const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  description:  String,
  tags: [String],
  image: { type: String, default: "" },
  source_code_link: { type: String },
  createdAt: { type: Date, default: Date.now },
});
const harryProjectSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  image: [String],
  summary: String,
  intro: String,
  findings: [String],
  createdAt: { type: Date, default: Date.now },
});

const experienceSchema = new mongoose.Schema({
  company_name: String,
  title: String,
  date: String,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});
const harryExperienceSchema = new mongoose.Schema({
  company_name: String,
  title: String,
  date: String,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});
const playSchema = new mongoose.Schema({
  name: String,
  title: String,
  date: String,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

const Project = mongoose.model("Project", projectSchema);
const Play = mongoose.model("Play", playSchema);
const HarryProject = mongoose.model("HarryProject", harryProjectSchema);
const Experience = mongoose.model("Experience", experienceSchema);
const HarryExperience = mongoose.model("HarryExperience", harryExperienceSchema);

module.exports = { Project, Play, Experience, HarryProject, HarryExperience };
