let btn = document.querySelector(".btn");
let side = document.querySelector(".side");
let sideClass = side.classList;

//To Work Btn
btn.addEventListener("click",function(){
    if(sideClass.contains("test")){
        sideClass.add("slideRight");
        sideClass.remove("test");
        sideClass.remove("slideLeft");
    }else{
        sideClass.remove("slideRight");
        sideClass.add("slideLeft");
        sideClass.add("test");
    }
});

//To work X Btn 
let xBtn = document.querySelector(".xBtn");

xBtn.addEventListener("click",function(){
    sideClass.remove("slideRight");
    sideClass.add("slideLeft");
    sideClass.add("test");
})