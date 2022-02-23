const colors = [0,1,2,3,4,5,"a","b","c","d","e","f"];
const btn = document.getElementById("btn");
const colorName = document.querySelector(".color-name");

btn.addEventListener("click",function(){
    let h = "#";
    for(let i=0;i<6;i++){
        h += colors[randomNumber()];
        document.body.style.backgroundColor = h;
        colorName.textContent = h;
    }

    //Star(*) ပြတဲ့ ဆရာ့နည်း
    // for(let i=0;i<6;i++){
    //     let h = "#";
    //     for(let x=0;x<=i;x++){
    //         h += colors[randomNumber()];
    //     }
    //     console.log(h);
    //     document.body.style.backgroundColor = h;
    //     colorName.textContent = h;

    // }
});

function randomNumber(){
    return Math.floor(Math.random()*colors.length);
}

