const express=require('express')
const routes=express.Router()
const user=require('../Model/userDetails')

routes.get('/',(req,res)=>{
    res.json({'Home':'Home route'})
})
routes.post('/thankyou',async (req,res)=>{
    try{

        const { name, enrollment_number, age } = req.body;
        await user.create({ name, enrollment_number, age });
        res.status(200).json({message:'form data added to the database'})
    }
    catch(e){
        res.status(400).json({message:'something went wrong to add form data'})
    }
})

module.exports=routes