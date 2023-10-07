const skills = [
    {id: 125223, skill: 'Ability to be handsome', done: true},
    {id: 127904, skill: 'Ability to be as handsome as ken', done: false},
    {id: 139608, skill: 'Ability to know why everyone pronounces boolean differently', done: false}
  ];
	
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
  };

  function update(id, updateSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updateSkill);
  }

  function deleteOne(id) {
    id = parseInt(id);

    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }

  function create(skill) {

    skill.id = Date.now() % 1000000;

    skills.push(skill);
  }

	function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }

  function getAll() {
    return skills;
  }