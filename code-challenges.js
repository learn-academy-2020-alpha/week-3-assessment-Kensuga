// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

let iterations = 10;

const fibTaco = (iter) => {
    let a = 1;
    let b = 0;
    let array = []
    for(let i = 0; i < iter; i++){
        array.push(a);
        let temp = a;
        a = a + b;
        b = temp;
    }
    return array;
}

console.log(fibTaco(iterations));


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

const oddTaco = (taco) => {
    return taco.filter(number =>  typeof number === "number").filter(number => number%2 === 1 || number%2 === -1).sort((a,b) => a - b)
}

console.log(oddTaco(fullArr1));
console.log(oddTaco(fullArr2));



// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

let middleTaco = (taco) => {
    if (taco.length%2 === 1){
        return taco.charAt(taco.length/2)
    } else if (taco.length%2 === 0){
        return  taco.charAt((taco.length-1)/ 2) + taco.charAt(taco.length/2)
    }
}

console.log(middleTaco(middleLetters1));
console.log(middleTaco(middleLetters2));





// --------------------4) Create a class to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

class Taco{
    constructor(){
        this.myTaco = 0;
    }

    sphericalTaco(yourTaco){
        this.myTaco = Math.floor(((yourTaco**2)*4)*Math.PI);
        console.log("≈", this.myTaco);
    }
}

ourTaco = new Taco();
ourTaco.sphericalTaco(15);

smallTaco = new Taco();
smallTaco.sphericalTaco(2);

supremeTaco = new Taco();
supremeTaco.sphericalTaco(60);


// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

let tacoAccumulator = (taco) => {
    let tempTaco = 0;
    let tacorray = []
    for(let i = 0; i<taco.length; i++){
        tempTaco = taco[i] + tempTaco
        tacorray.push(tempTaco)
    }
    return tacorray
}

console.log(tacoAccumulator(numbersToAdd1));
console.log(tacoAccumulator(numbersToAdd2));
console.log(tacoAccumulator(numbersToAdd3));