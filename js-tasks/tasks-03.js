// Find the smallest integer in the array
// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);
    }
}

// Geometry Basics: Circle Circumference in 2D
// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
const circleCircumference = circle => 2 * Math.PI * circle.radius;

// Give Me Five
// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj) {
    const arrOfFive = [];

    for (const key in obj) {
        if (key.length === 5) arrOfFive.push(key);
        if (obj[key].length === 5) arrOfFive.push(obj[key]);
    }

    return arrOfFive;
}

//---------------------------------------------------------------------
//                ######### Поглиблені задачки ###########
//---------------------------------------------------------------------

// Understanding closures - the basics
// https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
const buildFun = count => {
    let arrFuncs = [];
    for (let i = 0; i < count; i++) {
        arrFuncs.push(() => i);
    }
    return arrFuncs;
};

// Animals and Inheritance
// https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript
class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, 0, "shark", status);
    }
}

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, 4, "cat", status);
    }

    introduce() {
        return `${super.introduce()}  Meow meow!`;
    }
}

class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, 4, "dog", status);
        this.master = master;
    }

    greetMaster() {
        return `Hello ${this.master}`;
    }
}
