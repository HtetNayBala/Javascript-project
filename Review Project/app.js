let reviews = [
    { 
        img : "Photos/Shraddha-hd-7-portrait.jpg",
        name : "Lar Baw",
        job : "Graphic Designer",
        info : "He is from Myitkyina and lives in Yangon now. He do as a Graphic Designer"
    },{
        img : "Photos/Shraddha-hd-8-portrait.jpg",
        name : "Moe Myint Mg Mg",
        job : "IT",
        info : "He is from Amarapura. He do as a IT technian"
    },{
        img : "Photos/Shraddha-hd-8-portrait.jpg",
        name :"Thu Rain",
        job : "Gay",
        info : "He is a gay from PyawBwe."
    },{
        img : "Photos/Shraddha-hd-9-portrait.jpg",
        name : "Saw Htut Win",
        job : "English Teacher",
        info : "He lives in Mandalay."
    }];

//get state 

let personImg = document.querySelector(".person-img");
let name = document.querySelector(".name");
let job = document.querySelector(".job");
let info = document.querySelector(".info");

let prevBtn = document.querySelector(".left-btn");
let nextBtn = document.querySelector(".right-btn");
let randomBtn = document.querySelector(".btn");

//set State

let randomNum = 0;

window.addEventListener("DOMContentLoaded",function(){
    collectData(randomNum);
})

function collectData(){
    let item = reviews[randomNum];
    personImg.src = item.img;
    name.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;
}

// set Btns work

nextBtn.addEventListener("click",function(){
    randomNum++;
    if(randomNum > reviews.length -1){
        randomNum = 0;
    }
    collectData();
});

prevBtn.addEventListener("click",function(){
    randomNum--;
    if(randomNum < 0){
        randomNum = reviews.length - 1;
    }
    collectData();
});

randomBtn.addEventListener("click",function(){
    randomNum = Math.floor(Math.random()*reviews.length);
    collectData();
})