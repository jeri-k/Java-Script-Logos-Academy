//----------1
let arr1 = [5, 6, 7, 8, 9];
let sum = 0
arr1.forEach(value => sum += value)
console.log('forEach ' + sum);

//---------2
let arr2 = [5, 6, 7, 8, 9];
let toTwo = arr2.map(value => value * 2)
console.log('Map ' + toTwo);

//---------3

let arr3 = [
    { name: 'Ivan', country: 'Ukraine' },

    { name: 'Petro', country: 'Ukraine' },

    { name: 'Miguel', country: 'Cuba' }

]
let unique = arr3.every(name => name.country.toLowerCase() === 'ukraine')
console.log('Every ' + unique);

//--------4

let arr4 = [
    { name: 'Ivan', country: 'Ukraine' },

    { name: 'Petro', country: 'Ukraine' },

    { name: 'Miguel', country: 'Cuba' }

]
let countryCuba = arr4.some(name => name.country.toLowerCase() === 'cuba')
console.log('Some ' + countryCuba);

//-------5

let arr5 = [1, 'string', [3, 4], 5, [6, 7]];
let mex = arr5.filter(arr5 => Array.isArray(arr5) ? arr5 : false)
console.log('Filter ' + mex);

//--------6
let arr6 = [1, 2, 5, 0, 4, 5, 6];
let goToThree = arr6.reduce((a, b) => b > 0 ? a + b : console.log('Reduce', a + b))


//------6.1

let arr7 = [1, 2, 3, 0, 4, 5, 6];
let count = 1
let toTen = arr7.reduce((a, b) => a + b <= 10 ? count++ : count)
console.log('Reduce ' + toTen);

//-------7
let arr8 = [1, -2, 3, 0, 4, -5, 6, -11];
let pos = arr8.filter(num => num > 0 ? arr8 : false)
let sqrt = pos.map(new_a => Math.sqrt(new_a))
console.log('Будь яким методом ' + sqrt);