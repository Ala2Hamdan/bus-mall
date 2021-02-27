'use strict';

let max = 25;

let attemptsUser = 0;

let div= document.getElementById('imgCH');

let img1 = document.getElementById('imge1');
let img2 = document.getElementById('imge2');
let img3 = document.getElementById('imge3');





let arrayProduct = [];
function BusMall (pname , path ){
     this.productName = pname ;
     this.srcpath = path;
    this.shown = 0 ;
    this.clickD = 0 ;
    arrayProduct.push(this);

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
new BusMall('wine-glass','images/wine-glass.jpg' );
console.log(arrayProduct);

function randomImg(){
    let randomI = Math.floor(Math.random()*arrayProduct.length);
    return randomI;
   
}
 console.log(randomImg());
 
 let imageLfet;
 let imageMiddle;
 let imageRight;
function renderThreeImg (){
 imageLfet = randomImg();
 imageMiddle = randomImg();
 imageRight = randomImg();

     do {
     imageMiddle=randomImg();
     imageRight=randomImg();
     } while(imageLfet === imageMiddle||imageLfet === imageRight||imageMiddle===imageRight);
    // while((imageLfet === imageMiddle )|| (imageLfet === imageRight )|| (imageMiddle === imageRight )){
    //     imageMiddle =randomImg();
    //     imageRight =randomImg();
    // }

   img1.setAttribute('src' , arrayProduct[imageLfet].srcpath);
   arrayProduct[imageLfet].shown++;
   img2.setAttribute('src' , arrayProduct[imageMiddle].srcpath);
   arrayProduct[imageMiddle].shown++;
   img3.setAttribute('src' , arrayProduct[imageRight].srcpath);
   arrayProduct[imageRight].shown++;

}
renderThreeImg ();


div.addEventListener('click', countClick);

function countClick(event){

    console.log(event);
        
   
    if ( attemptsUser < max ){

        if  ( event.target.id === 'imge1' ){
           arrayProduct[imageLfet].clickD++;
           attemptsUser++ ;
      
       

       }else if (event.target.id === 'imge2'){
           arrayProduct[imageMiddle].clickD++;
           attemptsUser++ ;


       }else {
           arrayProduct[imageRight].clickD++;
           attemptsUser++ ;
        
       }
       renderThreeImg();
      
    
} else {

      let  button = document.getElementById('clickB');

      button.addEventListener('click', result);

      function result (event) {


     
       let ulEl = document.getElementById('ul1');
       let li ;

       for (let i = 0; i < arrayProduct.length ; i++){
           li = document.createElement('li');
           ul1.appendChild(li);
           li.textContent = `${arrayProduct[i].productName} had ${arrayProduct[i].clickD} Votes, and was seen ${arrayProduct[i].shown} times`;
           button.removeEventListener('click',result);
         }  
       }
      
    
       div.removeEventListener('click',countClick);
      


    }


}


