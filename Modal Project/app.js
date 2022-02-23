let modalBox = document.querySelector(".modal-box");
let showBtn = document.querySelector(".btn");
let closeBtn = document.querySelector(".close-btn");

showBtn.addEventListener("click",function(){
    modalBox.classList.add("show");
})

closeBtn.addEventListener("click",function(){
    modalBox.classList.remove("show");
})