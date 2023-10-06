const Skill = require('../models/skill')

// controllers/skills.js
module.exports = {
    index,
    show,
    new: newSkill,
    create,
};

function create(req, res) {
  console.log(req.body);
  res.redirect('/skills');
}

function newSkill(req, res) {
  res.render('skills/new', {title: 'New Skill'});
}

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll(),
    });
  }
  function show(req, res) {
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id),
    });
  }