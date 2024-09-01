const express =  require('express')

const router = express.Router()
 const Person = require('../models/Person')

// post route to add a person




router.post("/", async (req, res) => {
    try {
      const data = req.body; //aassuming the  request body contains the person body
      const newPerson = new Person(data);
      const response = await newPerson.save();
      console.log("data saved");
      res.status(200).json({ response });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  router.get("/", async (req, res) => {
    try {
      const data = await Person.find();
      console.log("data  fetched");
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });


  
router.get("/:workType", async (req, res) => {
    try {
      const workType = req.params.workType; //extract the work type from the url paramter
      if (workType == "chef" || workType == "waiter" || workType == "manager") {
        const response = await Person.find({ work: workType });
        console.log("response fetched");
        res.status(200).json(response);
      } else {
        res.status(404).json({ error: "Invalid work type" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });


  router.put('/:id',async(req,res)=>{
    try{
    
        const personId = req.params.id  //extract the id feom the url paramter
    
        const updatedPersonData = req.body //updated data for the person
        const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new: true, // Returns the updated document
        runValidators: true // Applies schema validation
        })
    
        if (!response) {
            return res.status(404).json({ error: "Person not found" });
          }
          console.log("data updated")
          res.status(200).json(response)
    
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ error: "Internal server error" });
          }
    
      })



      
  router.delete('/:id',async(req,res)=>{
    try{
    
        const personId = req.params.id  //extract the id feom the url paramter
    

        const response = await Person.findByIdAndDelete(personId)
    
        if (!response) {
            return res.status(404).json({ error: "Person not found" });
          }
          console.log("data delete")
          res.status(200).json({error:"Person not found"})
    
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ error: "Internal server error" });
          }
    
      })
      
      
    
    
    


  module.exports = router

  
