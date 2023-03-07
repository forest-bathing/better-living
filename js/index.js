let num = 0;
let timer;
 
function AddTimer(num) {
    timer = setInterval(() => {
        ChangePic(num);
        num++;
        if(num == 5) {
            num = 0;
        }
    }, 5000);
}
 
function ChangePic(num) {
    for(let i of document.querySelectorAll("li")) {
        i.style.opacity = "0";
    }
    toRed(num);
    document.querySelectorAll("li")[num].style.opacity = "1";
}
 
function toRed(num) {
    for(let i of document.querySelectorAll("a")) {
        i.style.backgroundColor = "grey";
    }
    document.querySelectorAll("a")[num].style.backgroundColor = "red";
}
AddTimer(num);

    //  鼠标移入移开
document.querySelector("div").addEventListener("mouseover", () => {
    clearInterval(timer);
})
document.querySelector("div").addEventListener("mouseout", () => {
    AddTimer(num);
})
