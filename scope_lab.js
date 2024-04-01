// global scope
var globalVar = "I am global variable";
let globalLet = "I am also global, but scoped with let";
const globalConst = "I'm a global constant";

// global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"


{
    // block scope
    var blockVar = "I'am a block-scoped var";
    let blockLet = "I'am a block-scoped Let";
    const blockCost = "I'am a block-scoped constant";
}


//Block Scope
console.log(blockVar);
// console.log(blockLet);
// console.log(blockCost);

function show() {
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}
show();

// console.log(functionVar); // Throws ReferenceError
// console.log(functionLet); // Throws ReferenceError
// console.log(functionConst); // Throws ReferenceError