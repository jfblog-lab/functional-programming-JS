const fs = require('fs')

let fichier = fs.readFileSync('data/personal.json')
let personnes = JSON.parse(fichier)

// Functional Filter
let getPerson = personnes.filter(
    personne =>
        personne.age < 45
        && personne.country === "Germany"
);
console.log(getPerson);

// Functional Map
let newBirthDay = personnes.map(personne => {
    var rObj = {};
    rObj["name"] = personne.name
    rObj["age"] = personne.age + 1
    rObj["country"] = personne.country
    rObj["nb_child"] = personne.nb_child

    return rObj;
});
console.log(newBirthDay);

// Functional Reduce
let nbChildTotal = personnes.reduce((preVal,personne) => preVal + personne.nb_child,0)
console.log(nbChildTotal);
