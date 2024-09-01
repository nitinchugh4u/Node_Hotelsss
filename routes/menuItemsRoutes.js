const express =  require('express')

const router = express.Router()
 const MenuItem = require('../models/MenuItem');
const Person = require('../models/Person');

// post route to add a person



router.post("/", async (req, res) => {
    try {
      const data = req.body;
      const newMenuItem = new MenuItem(data);
      const response = await newMenuItem.save();
      console.log("menu item save  succesfully");
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  router.get("/", async (req, res) => {
    try {
      const data = await MenuItem.find();
      console.log("data  fetched");
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

 
  



  module.exports = router

  
