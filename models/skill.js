const skills = [
    {id: 125223, skill: 'Ability to be handsome', done: true},
    {id: 127904, skill: 'Ability to be as handsome as ken', done: false},
    {id: 139608, skill: 'Ability to know why everyone pronounces boolean differently', done: false}
  ];
	
  module.exports = {
    getAll,
    getOne,
    create,
  };

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }

	function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return skills.find(skill => skill.id === id);
  }

  
  //code this out maybe
  function getAll() {
    return skills;
  }
