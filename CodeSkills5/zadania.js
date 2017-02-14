
// zadanie 1

const scope = [];

function makeScope (a, b) {
    for (let i = a; i <= b; i += 1) {
        scope.push(i);
    }
}
makeScope(1, 50);

const findThree = scope.filter(numberWithThree => numberWithThree.toString().includes('3'));

const howMany = findThree.length;
console.log(howMany);


//zadanie 2

const integers = [];

function makeIntegers (a) {
    const regEx = /^\d+(.\d+)?$/;
    if ( regEx.test(a) === true) {
        integers.push(a);
    }
}

makeIntegers();

console.log(integers);

const integersReverse = integers.map(integer => integer.split().toString().reverse());

console.log(integersReverse);

