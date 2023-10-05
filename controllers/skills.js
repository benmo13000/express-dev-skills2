const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    create,
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(reqparams.id),
        title: 'My Skills'
    });
}

function index(req, res){
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'All Skills'
    });
}