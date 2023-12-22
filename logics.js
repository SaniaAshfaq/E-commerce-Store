
function Showing(){
    let catgory = document.querySelector('.catgory');
let ulForShowing = document.querySelector('.catul');
let myele = true;
catgory.addEventListener('click',function(){
   
    if(myele === true)
    {
        ulForShowing.style.display = 'block';
        myele = false;
    }
    else{
        ulForShowing.style.display = 'none';
       myele = true;
    }
})

}
Showing();
let cartdiv = document.querySelector('.cartdiv');
let cart = document.querySelector('.cart');

let cards = document.querySelector('.cards');
let Total = document.querySelector('.Total');
let cartdata = document.querySelector('.Cartdata');
let Totalprice = document.querySelector('.pTotal');
let btn;
let myarr;
let count=0;
let fullMoney=0;
let objarr = [];
  async function fetching(){
    let res = await fetch('https://fakestoreapi.com/products');
    let data = await res.json();
       console.log(data);
    for(i=0; i<=19; i++){
        let newElement = document.createElement('div');
        newElement.innerHTML = `
        <div class='card' data-aos="fade-up" >
        <img src='${data[i].image}' />
        <p class= 'title'> ${data[i].title}</p>
        <h4 class = 'price'> Rs. ${data[i].price}  </h4>
        <button class = 'jsbutton' id = ${i}> Add to cart</button>
        <ion-icon name="heart" class ='heart';></ion-icon>
        </div>`
        cards.appendChild(newElement);
        let buttons = newElement.querySelector('.jsbutton');
        let newdiv;
        buttons.addEventListener('click',function(e){
        
            let id = buttons.id;
             
              if(buttons.innerHTML === ' Add to cart')
              {
                
                ++count;
                Total.innerHTML = count;
                localStorage.setItem('count', count);
                localStorage.getItem('count');
                buttons.innerHTML = 'Remove from cart';
                buttons.style.backgroundColor = '#ab2525';
                 newdiv = document.createElement('div');
                newdiv.classList.add('ICdiv');
               newdiv.innerHTML = `<img src ='${data[id].image}' class="Cimage"/>
               <p class = "Ctitle"> ${data[id].title}</p>
               <h6>RS. ${data[id].price}</h6>
               `
              cartdata.appendChild(newdiv);
             
            let obj = {
                source : data[id].image,
                name : data[id].title,
                price : data[id].price,
            }
           console.log(objarr.push(obj));
            console.log(objarr);

            localStorage.setItem( 'item' , JSON.stringify(objarr));

            console.log(obj);

              fullMoney += data[id].price;
              Totalprice.innerHTML = ` Total price = ${(fullMoney.toFixed(2))} RS`;
        
                

              }
              else if(buttons.innerHTML === 'Remove from cart')
              {
                if(newdiv)
                {
                    cartdata.removeChild(newdiv);
                   localStorage.removeItem('items', )
                }
              
                --count;
                Total.innerHTML = count;
                buttons.innerHTML = ' Add to cart';
                buttons.style.backgroundColor = '#945f23';
                fullMoney -= data[id].price;
                Totalprice.innerHTML = ` Total price = ${(fullMoney.toFixed(2))}Rs`;
               
              }
              
              localStorage.setItem('money', fullMoney);
              localStorage.getItem('money');

              
        })
       
        function heart(){
            let color = true;
            let dill =  newElement.querySelector('.heart');
            dill.addEventListener('click',function(){
                if(color === true)
                {
                    dill.style.color = 'red';
                    dill.style.scale = '1.3';
                    color = false;
                    dill.style.transition = 'scale 1s ease'
                }
                else{
                    dill.style.color = 'grey';
                    dill.style.scale = '1';
                    color = true;
                }


            })
          }
          heart();
    }
    


}
fetching();

function fullcart(){
    let show = true;
cart.addEventListener('click',function(){
    if(count === 0){
        // alert('your cart is empty');
        cartdiv.style.display = 'none';
        alert('your cart is empty');
       
       
       }
   
   
   else if(show === true)
   {
     cartdiv.style.display = 'block';
     show = false;
   }
   else{
    cartdiv.style.display = 'none';
    show = true;
   }

  
   
})
}
fullcart();



let links = document.querySelector('.responsiveIcons');
let responsive = document.querySelectorAll('.responsive');
// console.log(responsive);
function drop(){
    let ele = true;
    responsive.forEach(element=>{
      
        element.addEventListener('click',function(){
            if(ele===true)
            {
                links.style.display = 'block'
                ele = false;
                console.log(ele)
            }
            else{
                links.style.display = 'none';
                ele = true;
                console.log(ele)
            }
        })
        
    })

}
drop();
 let closeshoping = document.querySelector('.closeshoping');
 closeshoping.addEventListener('click', function(){
    cartdiv.style.display = 'none';

 })

