const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { Project, Experience, HarryExperience, HarryProject, Play } = require("./models");
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const app = express();

app.use(bodyParser.json());
app.use(cors());

dotenv.config();
mongoose
  .connect("mongodb+srv://ekenestanekeson:XT5qOGfXhaTKqGf0@test.geq1wyo.mongodb.net/")
  .then(() => {
    console.log("DBconnection sucessful");
  })
  .catch((err) => console.log(err));


app.get("/", (req, res) => {
  res.status(200).json({ message: "OK" });
});
app.post("/add/project", async (req, res) => {
  //add image upload function
  let newProject =  new Project({
    name: req.body.name,
    description: req.body.description,
    tags: req.body.tags,
    image: req.body.image,
    source_code_link: req.body.source_code_link,
  });
  
  const savedProject = await newProject.save(); 
  res.status(200).json(savedProject);
});
app.post("/harry/add/project", async (req, res) => {
  //add image upload function
  let newProject =  new HarryProject({
    name: req.body.name,
    intro: req.body.intro,
    summary: req.body.summary,
    image: req.body.image,
    findings: req.body.findings
  });
  
  const savedProject = await newProject.save(); 
  res.status(200).json(savedProject);
});
app.post("/add/experience", async (req, res) => {
  let newExp = new Experience({
    title: req.body.title,
    company_name: req.body.company_name,
    icon: req.body.icon,
    date: req.body.date,
    tags: req.body.tags,
  });
  const savedExp = await newExp.save();
  res.status(200).json(savedExp);
  //console.log(savedExp);
});
app.get("/plays", async (req, res) => {
  const allExp = await Play.find();
  res.status(200).json(allExp);
  //console.log(allExp);
});
app.post("/add/play", async (req, res) => {
  let newPlay = new Play({
    title: req.body.title,
    name: req.body.company_name,
    icon: req.body.icon,
    date: req.body.date,
    tags: req.tags,
  });
  const savedPlay = await newPlay.save();
  res.status(200).json(savedPlay);
  //console.log(savedPlay);
});
app.post("/harry/add/experience", async (req, res) => {
  let newExp = new HarryExperience({
    title: req.body.title,
    company_name: req.body.company_name,
    icon: req.body.icon,
    date: req.body.date,
    tags: req.body.tags,
  });
  const savedExp = await newExp.save();
  res.status(200).json(savedExp);
  //console.log(savedExp);
});
app.get("/experiences", async (req, res) => {
  const allExp = await Experience.find();
  res.status(200).json(allExp);
  //console.log(allExp);
});
app.get("/harry/experiences", async (req, res) => {
  const allExp = await HarryExperience.find();
  res.status(200).json(allExp);
  //console.log(allExp);
});
app.get("/projects", async (req, res) => {
  const allWorks = await Project.find();
  res.status(200).json(allWorks);
  //console.log(allWorks);
});
app.get("/harry/projects", async (req, res) => {
  const allWorks = await HarryProject.find();
  res.status(200).json(allWorks);
  //console.log(allWorks);
});

app.delete("/delete/project/:title", async (req, res) => {
  const itemTitle = req.params.title;
  const query = { name: { $regex: new RegExp(itemTitle, 'i') } }; 

  try {
    const result = await Project.findOne(query);
    if (result) {
      const deletedProject = await Project.findByIdAndDelete(result._id);
      res.json({
        message: `${deletedProject.name} deleted successfully`,
        deletedProject: deletedProject,
      });
    } else {
      res.status(404).json({ error: "Document not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the document" });
  }
});

app.delete("/harry/delete/project/:title", async (req, res) => {
  const itemTitle = req.params.title;
  const query = { name: { $regex: new RegExp(itemTitle, 'i') } }; 

  try {
    const result = await HarryProject.findOne(query);
    if (result) {
      const deletedProject = await HarryProject.findByIdAndDelete(result._id);
      res.json({
        message: `${deletedProject.name} deleted successfully`,
        deletedProject: deletedProject,
      });


    } else {
      res.status(404).json({ error: "Document not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the document" });
  }
});

app.listen(443, () => {
  console.log("Server started ..");
});
