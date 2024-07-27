let def=0;
let styleChanger = document.querySelector("#colar");
let reminder=document.querySelector("#reminder");
let changeColarButton=document.querySelector("#avatar");
changeColarButton.addEventListener("click",function changeColar(){
    if(def===0){  //黑換白
        styleChanger.href="css/style2.css";
        def=1;
        control=0;
        easterStyle.style="opacity: 0%;";
        reminder.innerHTML="ps:If U wanna change it back to dark version.<br/>Just ckick on my avatar again.";
    }
    else if(def===1){  //白換黑
        styleChanger.href="css/style.css";
        def=0;
        control=0;
        reminder.innerHTML="ps:If U wanna change this website to bright version.<br/>Just ckick on my avatar.";
    }
}
)

let control=0;
let easterStyle=document.querySelector(".easter");
function operator(){
    if(def===0 && control===0){
        control=1;
        easterStyle.style="opacity: 100%;";
    }
    else if(def===0 && control===1){
        control=0;
        easterStyle.style="opacity: 0%;";
    }
}

let randomNumber=0;
let musicChanger=document.querySelector("#Music");
let musicEventlistener=document.querySelector(".logo");
musicEventlistener.addEventListener("click",function randomMusic1(){
    if(def===0 && control===1){
        randomNumber=Math.random();
        randomNumber=Math.round(randomNumber*10);
        if(randomNumber===0) musicChanger.href="https://www.youtube.com/watch?v=gzM8Dv7nXLQ"; //Weight of the World
        else if(randomNumber===1) musicChanger.href="https://www.youtube.com/watch?v=hMw-DUnR10s"; //斜光
        else if(randomNumber===2) musicChanger.href="https://www.youtube.com/watch?v=8jpJM6nc6fE"; //Amusement Park
        else if(randomNumber===3) musicChanger.href="https://www.youtube.com/watch?v=IdMFhY_sl9E"; //A Beautiful Song
        else if(randomNumber===4) musicChanger.href="https://www.youtube.com/watch?v=UEG0Yk8Sb2M"; //Voice of NO Return
        else if(randomNumber===5) musicChanger.href="https://www.youtube.com/watch?v=paneqmGdM84"; //Vague Hope
        else if(randomNumber===6) musicChanger.href="https://www.youtube.com/watch?v=Gibu0sJQwkM"; //Kainé Salvation
        else if(randomNumber===7) musicChanger.href="https://www.youtube.com/watch?v=5FaEtvA_11A"; //Song of the Ancients
        else if(randomNumber===8) musicChanger.href="https://www.youtube.com/watch?v=NqlxaFkUxgg"; //Ashes of Dream
        else if(randomNumber===9) musicChanger.href="https://www.youtube.com/watch?v=PslQESlD4xs"; //Weight of the World/the End of YoRHa
        else if(randomNumber===10) musicChanger.href="https://www.youtube.com/watch?v=nPACM1xmAqg"; //Mix
    }
    else if(def!==0 || control!==1) musicChanger.href="";
})