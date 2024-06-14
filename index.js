let nums1 =  document.getElementById("nu")
let nums2 =  document.getElementById("nus")
let btn1 =  document.getElementById("btn1")
let btn2 =  document.getElementById("btn2")
let btn3 =  document.getElementById("btn3")
let old =  document.getElementById("new")

let num1 = 0;
let num2 = 0;
nums1.textContent = num1;
nums2.textContent = num2;

function btns1(){
    num1+=1;
    nums1.textContent = num1
}
function btns2(){
    num1+=2;
    nums1.textContent = num1
}
function btns3(){
    num1+=3;
    nums1.textContent = num1
}

function btns11(){
    num2+=1;
    nums2.textContent = num2
}
function btns21(){
    num2+=2;
    nums2.textContent = num2
}
function btns31(){
    num2+=3;
    nums2.textContent = num2
}

function news(){
    num1 = 0;
    num2 = 0;
    nums2.textContent = num2
    nums1.textContent = num1
}

