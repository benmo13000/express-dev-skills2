const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update,
};

function update(req, res) {
  Skill.update(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`);
}

function edit(req, res) {
  const skill = Skill.getOne(req.params.id);
  res.render('skills/edit', {
    title: "Pwease edit dis",
    skill
  });
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function create(req, res) {
  console.log(req.body);
  if (req.body.done){
    req.body.done = true
  }else{
    req.body.done = false
  }

  Skill.create(req.body);

  res.redirect('/skills');
}

function newSkill(req, res) {
  res.render('skills/new', {title: 'New Skill'});
}

function show(req, res) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id),
    title: 'Skills Details'
  });
}

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll(),
      title: 'All Details'
    });
  }