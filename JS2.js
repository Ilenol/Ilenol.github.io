//link change colar 
let linkColorChanger=document.querySelector(".link1");
let linkColorChanger2=document.querySelector(".link2");

function linkChangeColor(){
    linkColorChanger.style="color: #9400D3;"
}
linkColorChanger.addEventListener("mouseover",linkChangeColor)

function linkChangeColor2(){
    linkColorChanger2.style="color: #9400D3;"
}
linkColorChanger2.addEventListener("mouseover",linkChangeColor2)

function linkChangeColorBack(){
    linkColorChanger.style="color: blue;"
}
linkColorChanger.addEventListener("mouseout",linkChangeColorBack)

function linkChangeColorBack2(){
    linkColorChanger2.style="color: blue;"
}
linkColorChanger2.addEventListener("mouseout",linkChangeColorBack2)
