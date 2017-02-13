const scope = [];

function makeScope (a, b) {
    for (let i = a; i <= b; i += 1) {
        scope.push(i);
    }
}


makeScope(10, 50);
console.log(scope);

const findThree = scope.filter(numberWithThree => numberWithThree.toString().includes('3'));
console.log(findThree);

