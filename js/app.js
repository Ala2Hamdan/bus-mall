'use strict';

let max = 25;

let atm = 0;

let div= document.getElementById('imgCH');

let img1 = document.getElementById('imge1');
let img2 = document.getElementById('imge2');
let img3 = document.getElementById('imge3');

let indexImg=[];

let arrayName=[];
let arrayShown=[];
let arrayVotes=[];
console.log(arrayVotes);
let arrayProduct = [];
function BusMall (pname , path ){
     this.productName = pname ;
     this.srcpath = path;
    this.shown = 0 ;
    this.clickD = 0 ;
    arrayProduct.push(this);
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

function randomImg(){
    let randomI = Math.floor(Math.random()*arrayProduct.length);
    return randomI;
   
}
 console.log(randomImg());

 
 
 let imageLfet;
 let imageMiddle;
 let imageRight;
function renderThreeImg (){
do {
 imageLfet = randomImg();
 if (indexImg.includes(imageLfet)){
     imageLfet=randomImg();
 }else {
    indexImg[0]= imageLfet;
 }
 imageMiddle = randomImg();
 if (indexImg.includes(imageMiddle)){
    imageMiddle=randomImg();
}else {
   indexImg[1]= imageMiddle;
}
 imageRight = randomImg();
 if (indexImg.includes(imageRight)){
    imageRight=randomImg();
}else {
   indexImg[2]= imageRight;
}
}while ( imageLfet===imageMiddle||imageLfet===imageRight||imageMiddle===imageRight);

//  indexImg=[];
//  console.log(indexImg)
//  indexImg[1]=imageMiddle;
//  indexImg[2]=imageRight;
    //  do {
    // //  imageLfet =randomImg();
    //  imageMiddle=randomImg();
    //  imageRight=randomImg();
    //  } while(indexImg.includes(imageLfet)===arrayProduct[imageLfet]|| indexImg.includes(imageMiddle)=== arrayProduct[imageMiddle] || indexImg.includes(imageRight)===arrayProduct[imageRight] );
   
    //  while((imageLfet === imageMiddle)|| (imageLfet === imageRight) || (imageMiddle === imageRight)){
    //     imageMiddle =randomImg();
    //     imageRight =randomImg();
    // }

    // do {
    //     imageLfet = randomImg();
    // }while (indexImg.includes(imageLfet));
    // do {
    //     imageMiddle = randomImg();
    //  }while (indexImg.includes(imageMiddle));
    //  do {
    //      imageRight = randomImg();
    //  }while(indexImg.includes(imageRight));

    // do {
    //     imageLfet = randomImg();
    //     imageMiddle = randomImg();
    //     imageRight = randomImg();
    //     do{
    //         imageMiddle=randomImg();
    //         imageRight=randomImg();
    //     } while(imageLfet===imageMiddle||imageLfet===imageRight||imageRight===imageMiddle);
     

    // }while(indexImg.includes(imageLfet) === indexImg.includes(imageMiddle)&& indexImg.includes(imageLfet)===indexImg.includes(imageMiddle)&&indexImg.includes(imageMiddle)===indexImg.includes(imageRight));
 
    


    

   indexImg[0] =imageLfet;
   indexImg[1]=imageMiddle;
   indexImg[2]=imageRight;
// indexImg.push(imageLfet);
// indexImg.push(imageMiddle);
// indexImg.push(imageRight);
   console.log(indexImg);

   img1.setAttribute('src' , arrayProduct[imageLfet].srcpath);
   arrayProduct[imageLfet].shown++;
   img2.setAttribute('src' , arrayProduct[imageMiddle].srcpath);
   arrayProduct[imageMiddle].shown++;
   img3.setAttribute('src' , arrayProduct[imageRight].srcpath);
   arrayProduct[imageRight].shown++;

}  

renderThreeImg ();


//  console.log(indexImg);

//  function renderNewImg (){
//     imageLfet = randomImg();
//     imageMiddle = randomImg();
//     imageRight = randomImg();
   
        // do {
        // imageMiddle=randomImg();
        // imageRight=randomImg();
        // } while(indexImg.includes(0)=== arrayProduct[imageLfet] || );
      
       
//       indexImg.push(imageLfet,imageMiddle,imageRight);
   
//       img1.setAttribute('src' , arrayProduct[imageLfet].srcpath);
//       arrayProduct[imageLfet].shown++;
//       img2.setAttribute('src' , arrayProduct[imageMiddle].srcpath);
//       arrayProduct[imageMiddle].shown++;
//       img3.setAttribute('src' , arrayProduct[imageRight].srcpath);
//       arrayProduct[imageRight].shown++;
   
//    }  
//  renderNewImg();


console.log(arrayProduct);




img1.addEventListener('click', countClick);
img2.addEventListener('click', countClick);
img3.addEventListener('click', countClick);



// div.addEventListener('click', countClick);

function countClick(event){

    // console.log(event);
        atm++ ;
   
    if ( atm < max ){

        if  ( event.target.id === 'imge1' ){
           arrayProduct[imageLfet].clickD++;

       

       }else if (event.target.id === 'imge2'){
           arrayProduct[imageMiddle].ckickD++;
   


       }else {
           arrayProduct[imageRight].ckickD++;
        
        
       }

       renderThreeImg();
    // renderNewImg ();
    
} else {
    let  button = document.getElementById('clickB');

      button.addEventListener('click', result);

      function result (event) {


     
       let ulEl = document.getElementById('ul1');

        // div.appendChild(ulEl);
       let li ;

       for (let i = 0; i < arrayProduct.length ; i++){
           li = document.createElement('li');
           ul1.appendChild(li);
           li.textContent = `${arrayProduct[i].productName} had ${arrayProduct[i].clickD} Votes, and was seen ${arrayProduct[i].shown} times`;
           button.removeEventListener('click',result);
         }  
         for( let j=0; j< arrayProduct.length;j++){
            arrayShown.push(arrayProduct[j].shown);
            arrayVotes.push(arrayProduct[j].clickD);
       }
       charts();
      }
    //    div.removeEventListener('click',countClick);
        img1.removeEventListener('click',countClick);
         img2.removeEventListener('click',countClick);
         img3.removeEventListener('click',countClick);




    //   let  button = document.getElementById('ckickB');

    //   button.addEventListener('ckick', result);


    //   function result (event) {


     
    //    let ulEl = document.getElementById('ul1');

    //     div.appendChild(ulEl);
    //    let li ;

    //    for (let i = 0; i < arrayProduct.length ; i++){
    //        li = document.createElement('li');
    //        ul1.appendChild(li);
    //        li.textContent = `${arrayProduct[i].productName} had ${arrayProduct[i].ckickD} Votes, and was seen ${arrayProduct[i].shown} times`;
    //        button.removeEventListener('ckick',result);
    //      }  
        //  for( let j=0; j< arrayProduct.length;j++){
        //      arrayShown.push(arrayProduct[j].shown);
        //      arrayVotes.push(arrayProduct[j].ckickD);
            
    //      }
    //       charts();
          
    //    }
        
    
    //    div.removeEventListener('ckick',countClick);
      


    }


}
// console.log(arrayShown);
// console.log(arrayVotes);

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
