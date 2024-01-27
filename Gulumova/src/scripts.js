function hb1show(){
    const element = document.getElementById("hb1");
    element.style.display = "inline";
    document.getElementById("smoke").style.display = "inline";
}

function hb1hide(){
    const element = document.getElementById("hb1");
    element.style.display = "none";
    document.getElementById("smoke").style.display = "none";
}

function cartshow(){
    const element = document.getElementById("cartList");
    element.style.display = "inline";
    document.getElementById("smoke").style.display = "inline";
}

function carthide(){
    const element = document.getElementById("cartList");
    element.style.display = "none";
    document.getElementById("smoke").style.display = "none";
}

function button1(){
    document.getElementById("button1").classList.add("active");
    document.getElementById("button2").classList.remove("active");
    document.getElementById("button3").classList.remove("active");
    document.getElementById("popularItems").style.display="flex";
    document.getElementById("saleItems").style.display="none";
    document.getElementById("newItems").style.display="none";

}

function button2(){
    document.getElementById("button1").classList.remove("active");
    document.getElementById("button2").classList.add("active");
    document.getElementById("button3").classList.remove("active");
    document.getElementById("popularItems").style.display="none";
    document.getElementById("saleItems").style.display="flex";
    document.getElementById("newItems").style.display="none";

}

function button3(){
    document.getElementById("button1").classList.remove("active");
    document.getElementById("button2").classList.remove("active");
    document.getElementById("button3").classList.add("active");
    document.getElementById("popularItems").style.display="none";
    document.getElementById("saleItems").style.display="none";
    document.getElementById("newItems").style.display="flex";

}

// window.onload = function() {
//     // Your code here, which will run after the page has fully loaded
//     setTimeout(function() {
//         // Code to be executed after a certain delay
//         document.getElementById("notifBar").style.display="none";
//     }, 9500);
// };