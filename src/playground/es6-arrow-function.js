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

const user = {
    name: 'Animesh',
    cities: ['Hazaribag','Ranchi','Bengaluru'],
    printPlacesLived(){
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

// console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((num) => this.multiplyBy*num);
    }
};

console.log(multiplier.multiply());