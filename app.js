const data =[
    '1',
    '2',
    '3',
    '4',
    '5',
    '6'
];

const bgColor=['#00a4e4','#7552cc','#00205b','#008eaa','#1c79c0','#0066a1'];
const body = document.querySelector('body');
body.addEventListener('click', nextSlide);

let count =0;
let slideCollection;

function createDivSlide(){
    for(let i=0;i<data.length;i++){
        let div = document.createElement('div');
        div.classList.add('slide');
        div.style.background =bgColor[0];
        if(i!==0) div.classList.add('hide');
        let text = document.createElement('div');
        text.textContent = data[i];
        div.append(text);
        body.append(div);
    }
    slideCollection = document.querySelectorAll('.slide');
}

function randomInteger(min,max){
    let rand = min+ Math.random() * (max +1-min);
    return Math.floor(rand);
}

function nextSlide(){
    slideCollection[count].classList.add('hide');
    if(count+1 < data.length){
        count++;
    }
    else{
        count =0;
    }
    slideCollection[count].classList.remove('hide');
    let bg = bgColor[randomInteger(0,bgColor.length-1)]
    slideCollection[count].style.background = bg;
}
createDivSlide();



