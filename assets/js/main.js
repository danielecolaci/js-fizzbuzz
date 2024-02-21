const list = document.getElementById('list');
console.log(list);

//Stampare i numeri da 1 a 100 in console
for (let i = 1; i <= 100; i++) {
    console.log(i);
    //Stampare FizzBuzz in console
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log(i + 'FizzBuzz');
    }
    else if (i % 3 === 0) {
        console.log(i + 'Fizz');
    }
    else if (i % 5 === 0) {
        console.log(i + 'Buzz');
    }

}