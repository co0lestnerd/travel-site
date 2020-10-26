/*CLASS SYNTAX*/
class Person {
    constructor(name, favouriteColor) {
        this.name = name;
        this.favouriteColor = favouriteColor;
    }

    greet() {
        console.log("Hello, my name is " + this.name + " and my favourite color is " + this.favouriteColor + ".");
    }
}



/* NORMAL SYNTAX  */
/*
function Person(fullName, favColor) {
    this.name = fullName;
    this.favouriteColor = favColor;
    this.greet = function() {
        console.log("Hello, my name is " + this.name + " and my favourite color is " + this.favouriteColor + ".");
    }
}
*/

export default Person