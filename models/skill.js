const skills = [
    {id: 125223, skill: 'Ability to be handsome', done: true},
    {id: 127904, skill: 'Ability to be as handsome as ken', done: false},
    {id: 139608, skill: 'Ability to know why everyone pronounces boolean differently', done: false}
  ];
	
  module.exports = {
    getAll
  };
	
  function getAll() {
    return skills;
  }
