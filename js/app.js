'use strict';

let max = 25;


let attemptsUser = 0; 

let div= document.getElementById('imgCH');

let img1 = document.getElementById('imge1');
let img2 = document.getElementById('imge2');
let img3 = document.getElementById('imge3');

let indexImg=[];

let arrayName=[];
let arrayShown=[];
let arrayVotes=[];


let arrayProduct = [];
// create constructor function 
function BusMall (pname , path ){
     this.productName = pname ;
     this.srcpath = path;
    this.shown = 0 ;

    this.clickD = 0 ; 
    arrayProduct.push(this);    // store every object in the arrayProduct
    arrayName.push(this.productName);

}
new BusMall('bag','images/bag.jpg' );
new BusMall('banana','images/banana.jpg' );
new BusMall('bathroom','images/bathroom.jpg' );
new BusMall('boots','images/boots.jpg' );
new BusMall('breakfast','images/breakfast.jpg' );
new BusMall('bubblegum','images/bubblegum.jpg' );
new BusMall('chair','images/chair.jpg' );
new BusMall('cthulhu','images/cthulhu.jpg' );
new BusMall('dog-duck','images/dog-duck.jpg' );
new BusMall('dragon','images/dragon.jpg' );
new BusMall('pen','images/pen.jpg' );
new BusMall('pet-sweep','images/pet-sweep.jpg' );
new BusMall('scissors','images/scissors.jpg' );
new BusMall('shark','images/shark.jpg' );
new BusMall('sweep','images/sweep.png' );
new BusMall('tauntaun','images/tauntaun.jpg' );
new BusMall('unicorn','images/unicorn.jpg' );
new BusMall('usb','images/usb.gif' );
new BusMall('water-can','images/water-can.jpg' );
new BusMall('wine-glass','images/wine-glass.jpg');
console.log(arrayProduct);

function randomImg(){ // this function is global and it asign random value between 0 and array length

    let randomI = Math.floor(Math.random()*arrayProduct.length);
    return randomI;
   
}
 console.log(randomImg());

 
 
 let imageLfet;
 let imageMiddle;
 let imageRight;


function renderThreeImg (){
    // asign to three images random index 
    imageLfet=randomImg();
    imageMiddle=randomImg();
    imageRight=randomImg();
   // here compare three image to not be the same ------------------------- // here compere to sure these images not in the arry indeximg[] using includes method
    while(imageLfet===imageMiddle|| imageLfet===imageRight|imageMiddle===imageRight||indexImg.includes(imageLfet)||indexImg.includes(imageMiddle)||indexImg.includes(imageRight)){
        imageLfet=randomImg();
        imageMiddle=randomImg();
        imageRight=randomImg(); 
    }


    
 // every index will store in global array indexImg
   indexImg[0] =imageLfet;
   indexImg[1]=imageMiddle;
   indexImg[2]=imageRight;



   console.log(indexImg);
// show image through  method its name setAttribute with two perameters the first identify the Attribute the secound to asign the value.
   img1.setAttribute('src' , arrayProduct[imageLfet].srcpath);
   arrayProduct[imageLfet].shown++;
   img2.setAttribute('src' , arrayProduct[imageMiddle].srcpath);
   arrayProduct[imageMiddle].shown++;
   img3.setAttribute('src' , arrayProduct[imageRight].srcpath);
   arrayProduct[imageRight].shown++;

}  

renderThreeImg ();

console.log(arrayProduct);

div.addEventListener('click', countClick);
   // when select image the cilck increment and attempts
function countClick(event){

    if ( attemptsUser <= max ){

        if  ( event.target.id === 'imge1' ){
           arrayProduct[imageLfet].clickD++;
           attemptsUser++;

       

       }else if (event.target.id === 'imge2'){
           arrayProduct[imageMiddle].clickD++;

           attemptsUser++;
       



       }else {
           arrayProduct[imageRight].clickD++;

           attemptsUser++;
        
       }

       renderThreeImg();
       storedVotes ();
    
} else {
    let  button = document.getElementById('clickB');

      button.addEventListener('click', result);
            // when clicl on button show the result 
      function result (event) {

       let ulEl = document.getElementById('ul1');

       let li ;
        
       for (let i = 0; i < arrayProduct.length ; i++){
           li = document.createElement('li');
           ul1.appendChild(li);
           li.textContent = `${arrayProduct[i].productName} had ${arrayProduct[i].clickD} Votes, and was seen ${arrayProduct[i].shown} times`;
           button.removeEventListener('click',result);
         }  
         // store every shown and click in global arrays
         for( let j = 0 ; j < arrayProduct.length ; j++){
           arrayShown.push(arrayProduct[j].shown);
           arrayVotes.push(arrayProduct[j].clickD);
       }
       console.log(arrayVotes);
       charts();
      }
       div.removeEventListener('click',countClick);
     
    
    }


}


// function create chart on web page and show data when click buttton ( i call this function above)

function charts(){
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels : arrayName,
        datasets: [{
            label: 'times shown',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: arrayShown, 
        },{

            label: 'times ckicked',
            backgroundColor: '#aee1e1',
            borderColor: 'rgb(255, 99, 132)',
            data: arrayVotes, 


        }]
    },

    // Configuration options go here
    options: {}
});
}

// save the array of object in the local storage 
function storedVotes (){
let votesLocalstorge = JSON.stringify(arrayProduct);
localStorage.setItem('localStoreVotes' , votesLocalstorge);
console.log(votesLocalstorge);
}

function getValuesLocal(){

    let votesGetStorge= localStorage.getItem('localStoreVotes');
     let votesList = JSON.parse(votesGetStorge);
     console.log(votesList);
   if (votesList){
       arrayProduct = votesList;
   }
}
getValuesLocal();