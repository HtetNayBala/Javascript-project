let number = 0;
let btns = document.querySelectorAll(".btn");
let input = document.querySelector(".input");



btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        let style = e.currentTarget.classList;
        if(style.contains("decrease")){
            number--;
        }else if(style.contains("increase")){
            number++
        }else{
            number = 0;
        }
        if(number<0){
            input.style.color = "red";
        }
        if(number>0){
            input.style.color = "green";
        }
        if(number==0){
            input.style.color = "black";
        }
        input.value = number;
    })
})


//$(".input").get(0).value++ \Code from stackoverflow.com
// $(".decrease").on({
//     click : function(e){
//         if(e.currentTarget){
//            $(".input").get(0).value--;
//            $(".input").css({
//                "color":"red",
//            })
//         }
//     }
// });
// $(".increase").on({
//     click : function(e){
//         if(e.currentTarget){
//            $(".input").get(0).value++
//            $(".input").css({
//                "color":"green",
//            })
//         }
//     }
// });
// $(".reset").on({
//     click : function(e){
//         if(e.currentTarget){
//            $(".input").val(0)
//            $(".input").css({
//             "color":"black",
//         })
//         }
//     }
// });

