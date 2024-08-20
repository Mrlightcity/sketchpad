const popUp= document.querySelector('.popup');

const container= document.querySelector('.container');

const pad= document.querySelector('.container .pad');

const black= document.querySelector('.black button');

const random= document.querySelector('.random button');

const reset= document.querySelector('.redraw button');

let myValue= prompt('Enter number from 1 to 100:',"");

let value= myValue;
let padBoxes= (value*value)-1;
console.log(padBoxes)

if(value<1 || value> 100){
    padBoxes= 256;
}else if(value>=71){
    for(let i=0; i<padBoxes; i++){
        const div= document.createElement('div');
        div.classList= 'pad';
        div.style.minWidth = '2px';
        div.addEventListener('mouseover', ()=>{
            div.style.backgroundColor= 'blue';
        });
        container.insertBefore(div, pad);
    }
}else if(value>=50 || value<= 70){
    for(let i=0; i<padBoxes; i++){
        const div= document.createElement('div');
        div.classList= 'pad';
        div.style.minWidth = '4px';
        container.insertBefore(div, pad);
    }
}else if(value>=30 || value<=49){
    for(let i=0; i<padBoxes; i++){
        const div= document.createElement('div');
        div.classList= 'pad';
        div.style.minWidth = '6px';
        container.insertBefore(div, pad);
    }
}else if(value>=15 || value<= 29){
    for(let i=0; i<padBoxes; i++){
        const div= document.createElement('div');
        div.classList= 'pad';
        div.style.minWidth = '40px';
        container.insertBefore(div, pad);
    }
}else{
    for(let i=0; i<padBoxes; i++){
        const div= document.createElement('div');
        div.classList= 'pad';
        div.style.minWidth = '20px';
        div.addEventListener('mouseover', ()=>{
            div.style.backgroundColor= 'blue';
        });
        container.insertBefore(div, pad);
    }
}


// for(let i=0; i< allDiv.length; i++){
//     allDiv[i].addEventListener('mouseenter', penColor);
// }


// function penColor(e){
//     console.log(e.type);
//     let coloredBox= allDiv[i];
//     coloredBox.style.backgroundColor= 'blue'
// }