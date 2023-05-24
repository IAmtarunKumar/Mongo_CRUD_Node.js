
const express = require("express")

const DataRouter  =  express.Router()

const {DataModel} = require("../model/data.model")



//get data from database (show all data in given collection)
DataRouter.get("/", async (req, res) => {
    let user = await DataModel.find();
    res.send(user);
  });
  
  //post data from database (post - post the data by give data in req.body)
  
  DataRouter.post("/", async (req, res) => {
    const payload = req.body;
    // console.log(payload)
  
    //   const postData = await DataModel.insertMany([payload])
    //     res.send(postData)
  
    const user = new DataModel(payload);
    await user.save();
  
    res.send({ msg: "Data is posted" });
  });
  
  //put data from database (put - use for change whole data object)
  
  DataRouter.put("/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const payload = req.body;
  
    const user = await DataModel.findByIdAndUpdate({ _id: id }, payload);
    res.send({ msg: "whole data Update(put)" });
  });
  
  //patch data from database (patch - use for change one element of object )
  
  DataRouter.patch("/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const payload = req.body;
  
    const user = await DataModel.findByIdAndUpdate({ _id: id }, payload);
    res.send({ msg: "specific data element Updated (patch)" });
  });
  
  //delete data from database (delete - delete whole object by given id )
  
  DataRouter.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const user = await DataModel.findByIdAndDelete({ _id: id });
  
    res.send({ msg: "Data is deleted by given id" });
  });


  module.exports={DataRouter}
  