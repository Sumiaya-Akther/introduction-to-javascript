// incremental loop
// for(let i = 0; i <=10; i++){
//     console.log(i);
// }


//decremental for loop

// for (let i = 10; i >=0; i--){
//     console.log(i);
// }


// for(let i = 20; i >= 11; i--){
//     console.log(i);
// }


// give me the list numbers between 1 to 30 divisible by 5

// for(let i = 1; i <=30; i++){
//     if(i % 5 === 0){
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 30; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i);
//     }
// }


// give me the sum of numbers from 1 to 20 that are divisible by 3

// let total = 0;
// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//         total = total + i;
//         console.log('total', total)
//     }
// }
// console.log('total of the numbers', total)


//break------->


// for (let i = 0; i < 150; i++) {
//     console.log(i);
//     if (i >= 5) {
//         break;
//     }
// }
// console.log('life after break up');
// let n = 54;
// while (n > 25) {
//     if (n < 50) {
//         break;
//     }
//     console.log(n);
//     n--;
// }


//continue---------->


// for (let i = 1; i < 10; i++) {
//     if (i % 2 === 1) {
//         continue;
//     }
//     console.log(i);
// }


let n = 1;
while (n < 15) {
    n++;
    if (n % 2 !== 1) {
        continue;
    }
    console.log(n);
    
}