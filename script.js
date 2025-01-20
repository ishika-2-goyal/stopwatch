const mili = document.querySelector(".miliseconds");
const sec = document.querySelector(".seconds");
const min= document.querySelector(".minutes");
let miliNum=0;
let secNum=0;
let minNum=0;
let interval;
function miliSecondsAdd(){
    miliNum++;
    if(miliNum<10){
        mili.textcontent="0"+miliNum;

    }else{
        mili.textcontent=miliNum;
    }
    if(miliNum===100){
        miliNum=0;
        secondsAdd();

    }

}
function secondsAdd(){
    secNum++;
    if(secNum<10){
        sec.textContent="0"+secNum;
    }else{
        sec.textContent=secNum;
    }
    if(secNum===100){
        secNum=0;
        minutesadd();


    }
}    
function minutesAdd() {
        minNum++;
        if (minNum < 10) {
            min.textContent = "0" + minNum;
        } else {
            min.textContent = minNum;
        }
    }    
    function start() {
        clearInterval(interval);
        interval = setInterval(miliSecondsAdd, 10);
    }
    
    function stop() {
        clearInterval(interval);
    }
    
    function reset() {
        clearInterval(interval);
        miliNum = 0;
        secNum = 0;
        minNum = 0;
        mili.textContent = "00";
        sec.textContent = "00";
        min.textContent = "00";
    }
    
    document.getElementById("startBtn").addEventListener("click", start);
    document.getElementById("stopBtn").addEventListener("click", stop);
    document.getElementById("resetBtn").addEventListener("click", reset);    
    






