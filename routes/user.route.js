const { v4: uuidv4 } = require('uuid');    

const express = require("express");
const router = express.Router();
let mockData = [];
//user/ => get
router.get('/', (req,res)=>{
    res.send(mockData);
});
//user/ => post
router.post('/', (req,res)=>{
    const payload = req.body;
    const id =  uuidv4();
    payload.id = id;
    mockData.push({
        id,
         ...payload
        });
    res.json({
        message: "User created successfully",
        data: payload
    });
});

router.patch('/:id', (req,res)=>{
    const userId = req.params.id;
    const newUpdatedValue = req.body;
    let indexToUpdate = mockData.findIndex((item) =>{
        return item.id === userId;
    });
    const oldValueToBeUpdated = mockData[indexToUpdate];
    mockData[indexToUpdate]={
        ...oldValueToBeUpdated,
        ...newUpdatedValue
    };
    res.send(mockData);
});

router.delete('/:id', (req, res) => {
    const userId = req.params.id;
    const indexToDelete = mockData.filter((item) => item.id !== userId);
    res.send(indexToDelete);
});

module.exports = router;