let increase = document.querySelector(".increase");
let decrease = document.querySelector(".decrease");
let reset = document.querySelector(".reset");
let value = document.getElementById("value");
let initialValue = 0;

increase.addEventListener("click",()=>{
    value.innerText=initialValue+1;
    initialValue++;
});
reset.addEventListener("click",()=>{
    initialValue=0;
    value.innerText=0;
});
decrease.addEventListener("click",()=>{
    if (initialValue>=1){
        value.innerText=initialValue-1;
        initialValue--;
    }

});