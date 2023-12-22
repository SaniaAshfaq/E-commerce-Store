
let pricediv = document.querySelector('.pricediv');
let cart = document.querySelector('.mycart');
let data = localStorage.getItem('item');
let forChanging = JSON.parse(data);
let totalPrice = 0;
let count = localStorage.getItem('count');
// function for iteration through every element of the cart
for(let i=0; i<forChanging.length ;i++){
  //getting elements from loacal storage and adding to newdiv.
 let newdiv = document.createElement('div');
 newdiv.innerHTML = `<img src ='${forChanging[i].source}' class="Cimage"/>
       <p class = "Ctitle"> ${forChanging[i].name} </p>
       <h6 class='Sprice'>RS. ${forChanging[i].price}</h6>
       <div class='quantityDiv'><button class='minus'> - </button>
        <p class= 'quantity'> 1 </p>
        <button class="plus"> + </button></div>
       <button class='removeItem'>X</button>
       `
       newdiv.classList.add('newdiv');
       
       cart.appendChild(newdiv);
       console.log(newdiv);
    totalPrice += forChanging[i].price;
  
    pricediv.innerHTML = ` Total Rupees  = ${totalPrice} RS`;

// add eventlistener to removing items which are clicked by the user
let removingItem = newdiv.querySelector('.removeItem');
removingItem.addEventListener('click',function(){
  console.log(quantityEle);
  console.log(forChanging[i].price);
  if(quantityEle === 1){
  totalPrice -= forChanging[i].price;
  pricediv.innerHTML = `Total price = ${totalPrice.toFixed(2)} RS`;
  }
  else if(quantityEle === 2){
    totalPrice -= (forChanging[i].price)*2;
    pricediv.innerHTML = `Total price = ${totalPrice.toFixed(2)} RS`;
  }
  else if(quantityEle ===3){
    totalPrice -= (forChanging[i].price)*3;
    pricediv.innerHTML = `Total price = ${totalPrice.toFixed(2)} RS`;
  }
  else if(quantityEle ===4){
    totalPrice -= (forChanging[i].price)*4;
    pricediv.innerHTML = `Total price = ${totalPrice.toFixed(2)} RS`;
  }
  else if(quantityEle ===5){
    console.log(forChanging[i].price*5)
    totalPrice -= (forChanging[i].price)*5;
    pricediv.innerHTML = `Total price = ${totalPrice.toFixed(2)} RS`;
  }
  

   cart.removeChild(newdiv);

  
})

//adding and removing single prices
let singlePrice = newdiv.querySelector('.Sprice');
let plus = newdiv.querySelector('.plus');
let minus = newdiv.querySelector('.minus');
let quantity = newdiv.querySelector('.quantity');
let quantityEle = 1;
plus.addEventListener('click',function(){

 quantityEle++;
 quantity.innerHTML = quantityEle;

 if(quantityEle === 1)
 {
     singlePrice.innerHTML = (forChanging[i].price);
 }
 else if(quantityEle === 2)
 {
    singlePrice.innerHTML = (forChanging[i].price * 2);
   totalPrice += forChanging[i].price;
   pricediv.innerHTML = `Total price  = ${totalPrice.toFixed(2)} Rs`; 
 }
 else if(quantityEle === 3)
 {
    singlePrice.innerHTML = (forChanging[i].price * 3);
    totalPrice += forChanging[i].price;
   pricediv.innerHTML = `Total price  = ${totalPrice.toFixed(2)} Rs`; 

 }
 else if(quantityEle === 4)
 {
    singlePrice.innerHTML = (forChanging[i].price * 4);
    totalPrice += forChanging[i].price;
   pricediv.innerHTML = `Total price  = ${totalPrice.toFixed(2)} Rs`; 

 }

 else if(quantityEle === 5)
 {
    singlePrice.innerHTML = (forChanging[i].price * 5);
    totalPrice += forChanging[i].price;
   pricediv.innerHTML = `Total price  = ${totalPrice.toFixed(2)} Rs`; 
  
 }
 else
 {
    alert('you can buy only 5 items');
    quantityEle =5;
    quantity.innerHTML = 5;

 }


 if(count === 0){
  pricediv.innerHTML = 'Rs = 0';
  
 }

})
     
minus.addEventListener('click', function(){
  quantityEle--;
 

quantity.innerHTML = quantityEle;
  if(quantityEle === 1)
 {
     singlePrice.innerHTML = (forChanging[i].price);
     totalPrice -= forChanging[i].price;
   pricediv.innerHTML = `Total price  = ${totalPrice.toFixed(2)} Rs`; 
  
 }
 else if(quantityEle === 2)
 {
    singlePrice.innerHTML = (forChanging[i].price * 2);
    totalPrice -= forChanging[i].price;
   pricediv.innerHTML = `Total price  = ${totalPrice.toFixed(2)} Rs`; 
  
   
 }
 else if(quantityEle === 3)
 {
    singlePrice.innerHTML = (forChanging[i].price * 3);
    totalPrice -= forChanging[i].price;
   pricediv.innerHTML = `Total price  = ${totalPrice.toFixed(2)} Rs`; 
  
   
 }
 else if(quantityEle === 4)
 {
    singlePrice.innerHTML = (forChanging[i].price * 4);
    totalPrice -= forChanging[i].price;
   pricediv.innerHTML = `Total price  = ${totalPrice.toFixed(2)} Rs`; 
  

 }

 else if(quantityEle === 5)
 {
    singlePrice.innerHTML = (forChanging[i].price * 5);
    totalPrice -= forChanging[i].price;
   pricediv.innerHTML = `Total price  = ${totalPrice.toFixed(2)} Rs`; 
  
    
 }
 else if(quantityEle <1)
 {
  alert('There is only one item in your cart');
  quantityEle = 1;
  quantity.innerHTML = quantityEle;
 }

 if(count === 0){
  pricediv.innerHTML = 'Rs = 0';
 }





})
}
