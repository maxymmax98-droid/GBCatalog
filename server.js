const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let messages = [];

app.get('/messages', (req,res) => res.json(messages));

app.post('/messages', (req,res) => {
    const {username, message} = req.body;
    if(username && message){
        messages.push({username,message});
    }
    res.sendStatus(200);
});

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));