let btn = document.querySelector(".btn");
let side = document.querySelector(".side");
let sideClass = side.classList;

//To Work Btn
btn.addEventListener("click",function(){
    // if(sideClass.contains("test")){
    //     sideClass.remove("test");
    //     sideClass.add("slideToLeft");
    // }
    sideClass.toggle("slideToLeft");
});

//To work X Btn 
let xBtn = document.querySelector(".xBtn");

xBtn.addEventListener("click",function(){
    sideClass.remove("slideToLeft");
})