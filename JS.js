// 背景更換
let def = 0; // 0=背景黑 1=背景白
let styleChanger = document.querySelector("#colar");
let reminder = document.querySelector("#reminder");
let changeColarButton = document.querySelector("#avatar");
changeColarButton.addEventListener("click", function changeColor() {
    if (def === 0) {  // 黑換白
        styleChanger.href = "css/style2.css";
        def = 1;
        control = 0;
        linkChangeColorBack();
        linkChangeColorBack2();
        resetEaster();
        reminder.innerHTML = "ps:If U wanna change it back to dark version.<br/>Just ckick on my avatar again.";
    } else if (def === 1) {  // 白換黑
        styleChanger.href = "css/style.css";
        def = 0;
        control = 0;
        linkChangeColorBack();
        linkChangeColorBack2();
        resetEaster();
        reminder.innerHTML = "ps:If U wanna change this website to bright version.<br/>Just ckick on my avatar.";
    }
});

// link change colar 
let linkColorChanger = document.querySelector(".link1");
let linkColorChanger2 = document.querySelector(".link2");

function linkChangeColor() {
    if (def === 0) linkColorChanger.style = "color: #A9A9A9;";
    else if (def === 1) linkColorChanger.style = "color: #9400D3;";
}
linkColorChanger.addEventListener("mouseover", linkChangeColor);

function linkChangeColor2() {
    if (def === 0) linkColorChanger2.style = "color: #A9A9A9;";
    else if (def === 1) linkColorChanger2.style = "color: #9400D3;";
}
linkColorChanger2.addEventListener("mouseover", linkChangeColor2);

function linkChangeColorBack() {
    if (def === 0) linkColorChanger.style = "color: white;";
    else if (def === 1) linkColorChanger.style = "color: blue;";
}
linkColorChanger.addEventListener("mouseout", linkChangeColorBack);

function linkChangeColorBack2() {
    if (def === 0) linkColorChanger2.style = "color: white;";
    else if (def === 1) linkColorChanger2.style = "color: blue;";
}
linkColorChanger2.addEventListener("mouseout", linkChangeColorBack2);

// easter 觸發
let control = 0; // 0=尚未觸發 1=觸發狀態 
let easterStyle = document.querySelector(".easter");
let easterTexts = [
    document.querySelector("#easterText1"),
    document.querySelector("#easterText2"),
    document.querySelector("#easterText3"),
    document.querySelector("#easterText4"),
    document.querySelector("#easterText5")
];
let easterLogo = document.querySelector("#easterLogo");
let easterTimeouts = [];

// 初始化時隱藏 easterText
easterTexts.forEach(text => text.classList.add("hidden"));

function operator() {
    if (def === 0 && control === 0) {
        control = 1;
        easterStyle.style.opacity = "100%";
        easterTexts.forEach((text, index) => {
            let timeout = setTimeout(() => {
                text.classList.remove("hidden");
                text.classList.add("typing-animation");
            }, index * 4000); // 每行延遲 4 秒
            easterTimeouts.push(timeout);
        });
    } else if (def === 0 && control === 1) {
        resetEaster();
    }
}

function resetEaster() {
    control = 0;
    easterStyle.style.opacity = "0%";
    easterTexts.forEach((text) => {
        text.classList.add("hidden");
        text.classList.remove("typing-animation");
    });
    // 清除所有計時器
    easterTimeouts.forEach(timeout => clearTimeout(timeout));
    easterTimeouts = [];
}

// easter randomMusic
let randomNumber = 0;
let musicChanger = document.querySelector("#Music");
let musicEventlistener = document.querySelector(".logo");
musicEventlistener.addEventListener("click", function randomMusic1() {
    if (def === 0 && control === 1) {
        randomNumber = Math.random();
        randomNumber = Math.round(randomNumber * 10);
        if (randomNumber === 0) musicChanger.href = "https://www.youtube.com/watch?v=gzM8Dv7nXLQ"; // Weight of the World
        else if (randomNumber === 1) musicChanger.href = "https://www.youtube.com/watch?v=hMw-DUnR10s"; // 斜光
        else if (randomNumber === 2) musicChanger.href = "https://www.youtube.com/watch?v=8jpJM6nc6fE"; // Amusement Park
        else if (randomNumber === 3) musicChanger.href = "https://www.youtube.com/watch?v=IdMFhY_sl9E"; // A Beautiful Song
        else if (randomNumber === 4) musicChanger.href = "https://www.youtube.com/watch?v=UEG0Yk8Sb2M"; // Voice of NO Return
        else if (randomNumber === 5) musicChanger.href = "https://www.youtube.com/watch?v=paneqmGdM84"; // Vague Hope
        else if (randomNumber === 6) musicChanger.href = "https://www.youtube.com/watch?v=Gibu0sJQwkM"; // Kainé Salvation
        else if (randomNumber === 7) musicChanger.href = "https://www.youtube.com/watch?v=5FaEtvA_11A"; // Song of the Ancients
        else if (randomNumber === 8) musicChanger.href = "https://www.youtube.com/watch?v=NqlxaFkUxgg"; // Ashes of Dream
        else if (randomNumber === 9) musicChanger.href = "https://www.youtube.com/watch?v=PslQESlD4xs"; // Weight of the World/the End of YoRHa
        else if (randomNumber === 10) musicChanger.href = "https://www.youtube.com/watch?v=nPACM1xmAqg"; // Mix
    } else if (def !== 0 || control !== 1) musicChanger.href = "";
});