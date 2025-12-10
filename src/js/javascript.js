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
         add(a,b);
    }
    if (operator=="-") {
         subtract(a,b);
    }
    if (operator=="*") {
         multiply(a,b);
    }
    if (operator=="/") {
         divide(a,b);
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
            let x = Number(disp.textContent);
            let op = btnOp.textContent;
            disp.textContent = "";
            console.log(x);
            console.log(op);
        })
    })
    let btnCl = document.querySelector(".clear");
    btnCl.addEventListener("click", ()=>{
        disp.textContent = "";
        // x = null;
        // op = null;
    })
    let btnEq = document.querySelector(".equalto");
    btnEq.addEventListener("click",()=>{
        let y =  Number(disp.textContent);
        disp.textContent = "";
        
    });


    
}
display();


