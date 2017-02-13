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