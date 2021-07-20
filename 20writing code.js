//1. Imperative - code for a computer 
//2. declarative - code for people


//1 Imperative USING FOR LOOP
const people = ['Doug', 'Fred', 'Jane'];
const invitations = [];

for (let i = 0; i < people.length; i++) {
    invitations[i] = `Hi ${people[i]}, come to my party!`;
}

console.log(invitations);

//2 declarative using MAP
const people = ['Doug', 'Fred', 'Jane'];
const invitations = people.map(person => `Hi ${person}, come to my party!`);

console.log(invitations);