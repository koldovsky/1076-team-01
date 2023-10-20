// Convert a string to an array
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
    return string.split(" ");
}

// DNA to RNA Conversion
// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
    return dna.replaceAll("T", "U");
}

// Find Maximum and Minimum Values of a List
// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
const min = list => Math.min(...list);
const max = list => Math.max(...list);

// Smallest value of an array
// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
    const minValue = Math.min(...arr);
    return toReturn === "value" ? minValue : arr.indexOf(minValue);
}

//---------------------------------------------------------------------
// //######### Поглиблені задачки ###########
//---------------------------------------------------------------------

// A wolf in sheep's clothing
// https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
const warnTheSheep = queue => {
    const positionFromRight = queue.reverse().indexOf("wolf");
    return positionFromRight === 0
        ? "Pls go away and stop eating my sheep"
        : `Oi! Sheep number ${positionFromRight}! You are about to be eaten by a wolf!`;
};

// Beginner - Lost Without a Map
// https://www.codewars.com/kata/beginner-lost-without-a-map
const maps = numsArr => numsArr.map(num => num * 2);

// Find the first non-consecutive number
// https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
        if (arr[i] + 1 !== arr[i + 1]) {
            return arr[i + 1];
        }
    }
    return null;
}

//---------------------------------------------------------------------
// //######### Додаткові задачки по JS ###########
//---------------------------------------------------------------------

// You Can't Code Under Pressure
// https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
const doubleInteger = i => i * 2;

// Century From Year
// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript
const century = year => Math.ceil(year / 100);

// Return Negative
// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
const makeNegative = num => num >= 0 ? -num : num;

// Cockroach
// https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
function cockroachSpeed(kmPerHour) {
    return Math.floor(kmPerHour * (100000 / 3600));
}

// https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
const otherAngle = (a, b) => 180 - (a + b);

// Twice as old
// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
const twiceAsOld = (dadYearsOld, sonYearsOld) =>
    Math.abs(dadYearsOld - sonYearsOld * 2);

// Return n-th even number
// https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
const nthEven = num => num * 2 - 2;

// What's the real floor
// https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
const getRealFloor = floor => {
    return floor <= 0 ? floor : floor > 13 ? floor - 2 : floor - 1;
}

// Clock
// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
const past = (h, m, s) => (h * 3600 + m * 60 + s) * 1000;

// Is n divisible by x and y 
// https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
const isDivisible = (n, x, y) => n % x === 0 && n % y === 0;