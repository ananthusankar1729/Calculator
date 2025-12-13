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
    if (b===0) {
        return "Cannot divide by 0"
    }
    return a/b ;
};
function operate(operator, a, b) {
    if (operator=="+") {
        return add(a,b);
    }
    if (operator=="-") {
        return subtract(a,b);
    }
    if (operator=="x") {
        return multiply(a,b);
    }
    if (operator=="/") {
        return divide(a,b);
    }
}
function display() {
    let btn = document.querySelectorAll(".digits");
    let disp = document.querySelector(".disp");
    let x = null;
    let op = null;
    let y = null;
    let ans = null;
    let i = 0;
    btn.forEach(btn => {
        btn.addEventListener("click", () => {
            disp.textContent += btn.textContent;
        })
    })
    let btnOp = document.querySelectorAll(".operation");
    btnOp.forEach(btnOp => {
        btnOp.addEventListener("click", () =>{
            if (i>0) {
                y = Number(disp.textContent);
                op = btnOp.textContent;
                x = Number(operate(op,x,y));
                disp.textContent = "";
            }
            else{
                x = Number(disp.textContent);
                op = btnOp.textContent;
                disp.textContent = "";
            }
            i = i + 1;
            console.log(x);
            console.log(op);
        })
    })
    let btnCl = document.querySelector(".clear");
    btnCl.addEventListener("click", ()=>{
        disp.textContent = "";
        x = null;
        op = null;
        y = null;
    })
    let btnEq = document.querySelector(".equalto");
    btnEq.addEventListener("click",()=>{
        y =  Number(disp.textContent);
        console.log(y)
        ans = operate(op, x, y);
        disp.textContent = ans;
        console.log(ans);
        op = null;
        y = null;
        i = 0;
        

    });
}
display();


