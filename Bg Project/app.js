const colors = ["red","green","blue","pink","yellow"];
const btn = document.getElementById("btn");
const colorName = document.querySelector(".color-name");


btn.addEventListener("click",function(){
    let random = colors[randomNumber()];
    document.body.style.backgroundColor = random;
    colorName.textContent = random;
});

function randomNumber(){
    return Math.floor(Math.random()*colors.length);
};


