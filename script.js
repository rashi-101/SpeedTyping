const randomTextUrl = "http://api.quotable.io/random";
const textDisplayEle = document.querySelector(".text");
const typingArea = document.querySelector(".typing-area");
let timer = document.querySelector(".timer" );
let start = document.querySelector(".start");

function getRandomText(){
    return fetch(randomTextUrl).then(function(res){
        return res.json();
    }).then(function(data){
        return data.content;
    });
}

async function getNextText(){
    const quote = await getRandomText();
    //textDisplayEle.innerText = quote;
    let arr = quote.split('');
    arr.forEach(function(ele){
        let charSpan = document.createElement('span');
        charSpan.innerText=ele;
        // charSpan.classList.add("right"); 
        textDisplayEle.appendChild(charSpan);
    });
    // startTimer();
}
 getNextText();


 typingArea.addEventListener('input', function(e){
     if(e.data==null){
        stopTimer();
        this.style.conntenteditable=false;
     }else{
     let arrText = document.querySelectorAll("span");
     let idx = this.innerText.length-1;
     let arrVal = this.innerText.split('')[idx];
     //console.log(arrVal);
       // let char = arrVal;
        if( arrVal==' '||arrVal==arrText[idx].innerText){
            arrText[idx].classList.add("right"); 
        }else{
            arrText[idx].classList.add("wrong"); 
        }
    }
 });

 let startTime;
 let interval;
 function startTimer(){
      timer.innerText= "0";
      timer.innerText.split(":");
      startTime = new Date();
      interval = setInterval(function(){
        timer.innerText=getTimerTime();
      },1000);
 }
 function stopTimer(){
    clearInterval(interval);
 }

 function getTimerTime(){
     return Math.floor((new Date()-startTime)/1000);
 }


start.style.cursor="pointer";
start.addEventListener("click",function(){
    startTimer();
});
 