// Imperative - code for a computer / declarative - code for people


//1 Imperative 
const people = ['Doug', 'Fred', 'Jane'];
const invitations = [];

for (let i = 0; i < people.length; i++) {
    invitations[i] = `Hi ${people[i]}, come to my party!`;
}

console.log(invitations);

//2 declarative
const people = ['Doug', 'Fred', 'Jane'];
const invitations = people.map(person => `Hi ${person}, come to my party!`);

console.log(invitations);