const skills = [
    {id: 12345, skill: "Know's Everything", done: true},
    {id: 12346, skill: "Know's why everyone pronounces Boolean different", done: false},
    {id: 12347, skill: "Know's Nothing", done: true}
];

module.exports = {
    getAll,
    getOne,
}



function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}


function getAll(){
    return skills;
}