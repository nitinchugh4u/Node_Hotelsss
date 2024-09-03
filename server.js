// const fs = require("fs");
// const os = require("os");

// const user = os.userInfo();

// console.log(user);
// fs.appendFile("greeting", "hello how are you " + user.username, () => {});
// var _ = require('lodash');

// const notes = require("./notes.js");
// console.log(notes)
// console.log("server file is running")
// console.log("age", notes.age);
// console.log(notes.add(5,15))

// let arr = [1,2,2,3,3,4,6,6,7,8,8,6,5,4,4,4,5,5,6,7,7,]

// const res = _.uniq(arr)
// console.log(res)

// const obj ={
//     name:"nitin",
//     city:"delhi",
//     age:20
// }

// const ObjectConvertJSon = JSON.stringify(obj)
// console.log(ObjectConvertJSon)
// console.log(typeof ObjectConvertJSon)
// console.log(typeof obj)

// const jsonData = '{"name":"nitin","class":"12th","city":"Pune"}'
// console.log(typeof jsonData)
// const jsonToObject = JSON.parse(jsonData)
// console.log( typeof jsonToObject)

var express = require("express");
var app = express();
const db = require("./db");
require("dotenv").config();
// const passport = require("passport");
const passport = require("./auth");

// const LocalStrategy = require("passport-local").Strategy; //username and password authentication
// const PORT = process.env.PORT || 3000;
//node js host link
// https://hotels-gz6w.onrender.com

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

// const Person = require("./models/Person");

const MenuItem = require("./models/MenuItem");

// middle ware functiom
const logRequest = (req, res, next) => {
  console.log(
    `[${new Date().toLocaleString()}] Request made to ${req.originalUrl}`
  );
  next(); //move on to the next phase
};
app.use(logRequest);

// passport.use(
//   new LocalStrategy(async (USERNAME, password, done) => {
//     //authentication logic here

//     try {
//       console.log("Recieved Credentials", USERNAME, password);
//       const user = await Person.findOne({ username: USERNAME });

//       if (!user) return done(null, false, { message: "Incorrect username" });
//       const isPasswordMatch = user.password === password ? true : false;
//       if (isPasswordMatch) {
//         return done(null, user);
//       } else {
//         return done(null, false, { message: "Incorrect  password." });
//       }
//     } catch (err) {
//       return done(err);
//     }
//   })
// );

app.use(passport.initialize());
const localAuthMiddleware=passport.authenticate('local',{session:false})

// app.get("/",logRequest,(req, res) => {
app.get("/", (req, res) => {
  res.send("welcome to our hotel and here is the menu");
});
// app.post('/person',(req,res)=>{
//    const data = req.body //aassuming the  request body contains the person body
// const newPerson =  new Person(data)
//  newPerson.save((error,savedPerson)=>{
//     if(error){
//         console.log('error saving person',error)
//         res.status(500).json({error:"Internal server error"})

//     }else{
//         console.log("data saved successfully")
//         res.status(200).json(savedPerson)

//     }

//  })
// })

// app.post("/person", async (req, res) => {
//   try {
//     const data = req.body; //aassuming the  request body contains the person body
//     const newPerson = new Person(data);
//     const response = await newPerson.save();
//     console.log("data saved");
//     res.status(200).json({ response });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// app.get("/person", async (req, res) => {
//   try {
//     const data = await Person.find();
//     console.log("data  fetched");
//     res.status(200).json(data);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// app.post("/menuItem", async (req, res) => {
//   try {
//     const data = req.body;
//     const newMenuItem = new MenuItem(data);
//     const response = await newMenuItem.save();
//     console.log("menu item save  succesfully");
//     res.status(200).json(response);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// app.get("/menuItem", async (req, res) => {
//   try {
//     const data = await MenuItem.find();
//     console.log("data  fetched");
//     res.status(200).json(data);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// app.get("/person/:workType", async (req, res) => {
//   try {
//     const workType = req.params.workType; //extract the work type from the url paramter
//     if (workType == "chef" || workType == "waiter" || workType == "manager") {
//       const response = await Person.find({ work: workType });
//       console.log("response fetched");
//       res.status(200).json(response);
//     } else {
//       res.status(404).json({ error: "Invalid work type" });
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.get('/chicken',(req,res)=>{
//     res.send("here is  your chicken")
// })

// app.get('/momos',(req,res)=>{
//     const momosVariety = {
//         momos1:"afhani momo",
//         momos2:"tandoori momo",
//         momos3:"malai momo",
//         momos4:"achari momo",
//         momos5:"steam momo"
//     }
//     res.send(momosVariety)
// })
// app.get('/idli',(req,res)=>{
//       res.send('here is your Idli')

// })

// import the router files

const personRoutes = require("./routes/personRoutes");
const menuItemRoutes = require("./routes/menuItemsRoutes");

//use the router
app.use("/person",localAuthMiddleware, personRoutes);
app.use("/menuItem", menuItemRoutes);
// localAuthMiddleware

// app.listen(3000);

app.listen(PORT, () => {
  console.log("listening on Port 3000");
});
