function add(a,b) {
    return a + b;
};
function subtract(a,b){
    return a - b;
};
function multiply(a, b) {
    return a*b ;
};
function divide(a,b) {
    return a/b ;
};
function operate(operator, a, b) {
    if (operator=="+") {
        return add(a,b);
    }
    if (operator=="-") {
        return subtract(a,b);
    }
    if (operator=="*") {
        return multiply(a,b);
    }
    if (operator=="/") {
        return divide(a,b);
    }
}
// function display(x) {
//     let btn = document.querySelectorAll(".digits");
//     btn.forEach(btn => {
//         btn.addEventListener("click", () => {
//             let x = Number(btn.textContent);
//         })
//     })
//     let btnOp = document.querySelectorAll

    

// }