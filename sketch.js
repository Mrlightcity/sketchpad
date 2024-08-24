let color= "black";

document.addEventListener("DOMContentLoaded", function(){

    const reset= document.querySelector('.reset button');
    reset.addEventListener('click', function(){
        let value= getMyValue();
        theSize(value)
    })
})

const popUp= document.querySelector('.popup');

const container= document.querySelector('.container');

const pad= document.querySelector('.container .pad');
pad.addEventListener('mouseover', myColor)

const black= document.querySelector('.black button');

const random= document.querySelector('.random button');

const message= document.querySelector('.message h5');

let value; 

function theSize(value){
    let padBoxes= (value*value)-1;
    console.log( padBoxes)

    if(value== 2){
        for(let i=0; i<padBoxes; i++){
            const div= document.createElement('div');
            div.classList= 'pad';
            div.style.minWidth = '100px';
            div.addEventListener('mouseenter', myColor);
            container.insertBefore(div, pad);
        }
    
    }else if(value<= 15){
        for(let i=0; i<padBoxes; i++){
            const div= document.createElement('div');
            div.classList= 'pad';
            div.style.minWidth = '10px';
            div.addEventListener('mouseenter', myColor);
            container.insertBefore(div, pad);
        }
    
    }else if(value<=29){
        for(let i=0; i<padBoxes; i++){
            const div= document.createElement('div');
            div.classList= 'pad';
            div.style.minWidth = '8px';
            div.addEventListener('mouseenter', myColor);
            container.insertBefore(div, pad);
        }
    }else if(value<=49){
        for(let i=0; i<padBoxes; i++){
            const div= document.createElement('div');
            div.classList= 'pad';
            div.style.minWidth = '6px';
            div.addEventListener('mouseenter', myColor);
            container.insertBefore(div, pad);
        }
    }else if(value<= 70){
        for(let i=0; i<padBoxes; i++){
            const div= document.createElement('div');
            div.classList= 'pad';
            div.style.minWidth = '4px';
            div.addEventListener('mouseenter', myColor);
            container.insertBefore(div, pad);
        }
    }else if(value<= 100){
        for(let i=0; i<padBoxes; i++){
            const div= document.createElement('div');
            div.classList= 'pad';
            div.style.minWidth = '2px';
            div.addEventListener('mouseenter', myColor);
            container.insertBefore(div, pad);
        }
    }
}

black.addEventListener('click', ()=>{
    setColor('black')
});

random.addEventListener('click', ()=>{
    setColor('random')
});

function setColor(choice){
    color = choice;
}

function myColor(){
    if(color== 'random'){
        this.style.backgroundColor= generateJustOneColor();
    }else{
        this.style.backgroundColor= 'black';
    }
}

function getMyValue(){
    let myValue= prompt('Enter the size of your box:',"");
    if(myValue== ""){
        message.innerHTML= '<h5>'+'Please enter a number'+'<h5>';
    }else if(myValue< 0 || myValue> 100){
        message.innerHTML= '<h5>'+'Please enter number from 1 to 100'+'<h5>';
    }else{
        message.innerHTML= '<h5>'+'You can now play'+'<h5>';
        return myValue;
    }
   
}

const redraw= document.querySelector('.redraw button');
 
redraw.addEventListener('click', cleanSlate);

function cleanSlate(){
    const div= document.querySelectorAll('.pad');
    div.forEach((div)=>
        div.style.backgroundColor='white');
    
}

const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

        function getCharacter(index) {
            return hexCharacters[index]
        }

        function generateJustOneColor(){

        let hexColorRep = "#"

        for (let position = 0; position < 6; position++){
            const randomPosition = Math.floor ( Math.random() * hexCharacters.length ) 
            hexColorRep += getCharacter( randomPosition )
        }
        console.log( hexColorRep)
        return hexColorRep

        }