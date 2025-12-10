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
function display() {
    let btn = document.querySelectorAll(".digits");
    let disp = document.querySelector(".disp");
    btn.forEach(btn => {
        btn.addEventListener("click", () => {
            disp.textContent += btn.textContent;
        })
    })
    let btnOp = document.querySelectorAll(".operation");
    btnOp.forEach(btnOp => {
        btnOp.addEventListener("click", () =>{
            disp.textContent += btnOp.textContent;
        })
    })
    let btnCl = document.querySelector(".clear");
    btnCl.addEventListener("click", ()=>{
        disp.textContent = "";
    })
    
}
display();

