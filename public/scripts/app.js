'use strict';

// const square = function(x){
//     return x*x;
// }

// // const squareArrow = (x) => {
// //     return x*x;
// // }

// const squareArrow = (x) => x*x;

// console.log(squareArrow(7));

// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
// }

// console.log(getFirstName('Animesh Lal'));

// const getFirstNameShortHand = (fullName) => fullName.split(' ')[0];

// console.log(getFirstNameShortHand('Abhishek Lal'));

// const user = {
//     name: 'Animesh',
//     cities: ['Hazaribag','Ranchi','Bengaluru'],
//     printPlacesLived(){
//         this.cities.forEach((city) => {
//             console.log(this.name + ' has lived in ' + city);
//         });
//     }
// };

var user = {
    name: 'Animesh',
    cities: ['Hazaribag', 'Ranchi', 'Bengaluru'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};

// console.log(user.printPlacesLived());

var multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (num) {
            return _this2.multiplyBy * num;
        });
    }
};

console.log(multiplier.multiply());
