const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();

//this is the mockData
let mockData = [];
app.use(express.json());

app.get('/', (req,res) => {
    res.send({
        message:"List of all users",
        data: mockData,
    });
});

app.post('/',(req,res)=>{
    
    const payload = req.body;//this data is from client
    const id = uuidv4();
    payload.id = id;
    mockData.push(payload);//this is just saving to database
    res.send({
        message : "New user Created",
        data: payload,
    });
    // console.log(req.body);
});

app.post('/users',(req,res)=>{
    const payload = req.body;
    const unique_id = uuidv4();
    payload.unique_id = unique_id;
    mockData.push({unique_id, ...payload});
    res.send({
        message:"New user created",
        data:payload,
    })
})

app.listen(8000,()=> {
        console.log("Server running in 8000");
});