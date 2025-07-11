const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const textChange = document.getElementById("chnge");
let intervalId = null;

function getColorFromPromise(){
    return new Promise((resolve) => {
        setTimeout(() => {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i=0; i<6 ; i++){
                color += letters[Math.floor(Math.random()*16)];
            }
            resolve(color);
        },1);
    });
}

async function changeBackgroundColor(){
    const color = await getColorFromPromise();
    document.body.style.backgroundColor = color;
}

function startChanging(){
    if (!intervalId){
        changeBackgroundColor();

        intervalId = setInterval(() => {
            changeBackgroundColor();
        }, 1000);
    }
    textChange.innerText="Let's get Started."
}

function stopChanging(){
    clearInterval(intervalId);
    intervalId=null;
}

startBtn.addEventListener('click', startChanging);
stopBtn.addEventListener('click', stopChanging);
