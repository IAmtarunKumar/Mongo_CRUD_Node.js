const express = require("express");
const { DataModel } = require("../model/data.model");

const DataRouter = express.Router();

// Get data from the database (show all data in the given collection)
DataRouter.get("/", async (req, res) => {
    try {
        let users = await DataModel.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(`Internal Server Error${error.message}`);
    }
});

// Post data to the database (post - post the data by giving data in req.body)
DataRouter.post("/", async (req, res) => {
    try {
        const payload = req.body;
        const user = new DataModel(payload);
        await user.save();
        res.status(200).send( "Data is posted" );
    } catch (error) {
        res.status(500).send(`Internal Server Error${error.message}`);
    }
});

// Put data to the database (put - use for changing the whole data object)
DataRouter.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const payload = req.body;
        const user = await DataModel.findByIdAndUpdate({ _id: id }, payload);
        if (!user) {
            return res.status(400).send({ msg: "Data not found" });
        }
        res.status(200).send({ msg: "Whole data updated (put)" });
    } catch (error) {
        res.status(500).send(`Internal Server Error${error.message}`);
    }
});

// Patch data in the database (patch - use for changing one element of the object)
DataRouter.patch("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const payload = req.body;
        const user = await DataModel.findByIdAndUpdate({ _id: id }, payload);
        if (!user) {
            return res.status(400).send( "Data not found" );
        }
        res.status(200).send("Specific data element updated (patch)" );
    } catch (error) {
        res.status(500).send(`Internal Server Error${error.message}`);
    }
});

// Delete data from the database (delete - delete the whole object by the given id)
DataRouter.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await DataModel.findByIdAndDelete({ _id: id });
        if (!user) {
            return res.status(400).send( "Data not found" );
        }
        res.status(200).send( "Data is deleted by the given id" );
    } catch (error) {
        
        res.status(500).send(`Internal Server Error${error.message}`);
    }
});

module.exports = { DataRouter };
