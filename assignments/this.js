/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
}
sayName('Abby');

// Principle 2

// code example for Implicit Binding
const fiance = {
    name: 'Abby',
    age: 22,
    dog: 'Piper',
    about () {
        return `My fiance is ${this.name}, she is ${this.age} years old, and her dog's name is ${this.dog}. `
    }
}
console.log(fiance.about());

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
const brey = {
    name: 'Brey'
}

const hobbies = ['workout', 'zipline', 'attend Lambda'];

function about(hobbie1, hobbie2, hobbie3) {
    console.log(`Hi! My name is ${this.name}. I like to ${hobbie1}, ${hobbie2}(and that's my job!), and I love being able to ${hobbie3}.`)
}
about.apply(brey, hobbies);
// about.call(brey, hobbies[0], hobbies[1], hobbies[2]);
// const aboutBrey = about.bind(brey, ...hobbies);

// aboutBrey();