const list = document.getElementById('list');
console.log(list);

let number = '';

//Stampare i numeri da 1 a 100 in console
for (let i = 1; i <= 100; i++) {
    console.log(i);
    //Stampare FizzBuzz in console e in pagina
    if ((i % 3 === 0) && (i % 5 === 0)) {
        //console.log(i + 'FizzBuzz');
        number += '<li>FizzBuzz</li>';
    }
    else if (i % 3 === 0) {
        //console.log(i + 'Fizz');
        number += '<li>Fizz</li>';
    }
    else if (i % 5 === 0) {
        //console.log(i + 'Buzz');
        number += '<li>Buzz</li>';
    }
    else {
        number += `<li>${i}</li>`;
    }

}

list.innerHTML = number;