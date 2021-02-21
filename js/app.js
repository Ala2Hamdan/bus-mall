'use strict';

let max = 25;

let atm = 0;

let div= document.getElementById('imgCH');

let img1 = document.getElementById('imge1');
let img2 = document.getElementById('imge2');
let img3 = document.getElementById('imge3');





let arrayp = [];
function BusMall (pname , path ){
     this.productName = pname ;
     this.srcpath = path;
    this.shown = 0 ;
    this.clickD = 0 ;
    arrayp.push(this);

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
console.log(arrayp);

function randomImg(){
    let randomI = Math.floor(Math.random()*arrayp.length);
    return randomI;
   
}
 console.log(randomImg());
 
 let ig1;
 let ig2;
 let ig3;
function renderThreeImg (){
 ig1 = randomImg();
 ig2 = randomImg();
 ig3 = randomImg();

     do {
     ig2=randomImg();
     ig3=randomImg();
     } while(ig1 === ig2||ig1 === ig3||ig2===ig3);
    // while((ig1 === ig2 )|| (ig1 === ig3 )|| (ig2 === ig3 )){
    //     ig2 =randomImg();
    //     ig3 =randomImg();
    // }

   img1.setAttribute('src' , arrayp[ig1].srcpath);
   arrayp[ig1].shown++;
   img2.setAttribute('src' , arrayp[ig2].srcpath);
   arrayp[ig2].shown++;
   img3.setAttribute('src' , arrayp[ig3].srcpath);
   arrayp[ig3].shown++;

}
renderThreeImg ();


div.addEventListener('click', cl);

function cl(event){

    console.log(event);
        atm++ ;
   
    if ( atm < max ){

        if  ( event.target.id === 'imge1' ){
           arrayp[ig1].clickD++;
           arrayp[ig1].shown++;
       

       }else if (event.target.id === 'imge2'){
           arrayp[ig2].clickD++;
           arrayp[ig2].shown++;
       


       }else {
           arrayp[ig3].clickD++;
           arrayp[ig3].shown++;
        
        
       }
       renderThreeImg();
      
    
} else {

      let  button = document.getElementById('clickB');

      button.addEventListener('click', result);

      function result (event) {


     
       let ulEl = document.getElementById('ul1');

        div.appendChild(ulEl);
       let li ;

       for (let i = 0; i < arrayp.length ; i++){
           li = document.createElement('li');
           ul1.appendChild(li);
           li.textContent = `${arrayp[i].productName} had ${arrayp[i].clickD} Votes, and was seen ${arrayp[i].shown} times`;
           button.removeEventListener('click',result);
         }  
       }
      
    
       div.removeEventListener('click',cl);
      


    }


}


