const router=require('express').Router();
const todoItemsModel=require('../models/todoItems');

router.post('/api/item',async(req,res)=>{
  try{
    
    const {item}=req.body;
    const newItem=new todoItemsModel({
      item:item
    })
    const saveItem=await newItem.save()
    
    res.status(200).json(saveItem);

  }catch(err){
    res.json(err);
  }
})

router.get('/api/items',async (req,res)=>{
  try{
    const allTodos=await todoItemsModel.find({});
    res.status(200).json(allTodos)
  }catch(err){
    res.json(err)
  }
  
})

router.put('/api/item/:id',async (req,res)=>{
  try{
    const updateItem=await todoItemsModel.findByIdAndUpdate(req.params.id,{$set:req.body});
    res.status(200).send({"message":"updated successfully"})
  }catch(err){
    res.json(err)
  }
})

router.delete('/api/item/:id',async (req,res)=>{
  try{
    const deleteItem=await todoItemsModel.findByIdAndDelete(req.params.id);
    res.status(200).send({"message":"deleted successfully"})
  }catch(err){
    res.json(err)
  }
})

module.exports=router;
