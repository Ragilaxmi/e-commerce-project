/*
function gotocart(){
    window.location.href='cart.html'
}
^*/

async function loadProducts(){
  let res = await fetch("https://dummyjson.com/products");
  let data = await res.json();

  let container = document.getElementById("products");
  data.products.slice(0,6).forEach(p=>{
    container.innerHTML += `
      <div class="card">
        <h3>${p.title}</h3>
        <p>₹${p.price}</p>
        
        <button onclick="addToCart(${p.id}, '${p.title}', ${p.price})">
          Add to Cart
        </button>
      </div>
    `;
  });
}
if(document.getElementById('products')){
loadProducts();
}
function addToCart(id,title,price){
    
    let cart=JSON.parse(localStorage.getItem("cart"))  || [];
    console.log(cart)
    cart.push({id,title,price})
    localStorage.setItem('cart',JSON.stringify(cart))
    alert('added to cart')
}
async function loadcart(){
    let cart=JSON.parse(localStorage.getItem('cart'))|| [];
    let div=document.getElementById('cart')
    div.innerHTML='';
    cart.forEach((item,index)=>{
        console.log(index,item)
        div.innerHTML+=`
        <div class="card">
        <h3>${item.title}</h3>
        <p>₹${item.price}</p>
        <button onclick=removeitem(${index});>Remove ❌</button>
        
      </div>
    `;
        
    })


}
if(document.getElementById('cart')){
    loadcart();
}

function removeitem(idx){
    let cart=JSON.parse(localStorage.getItem('cart'))|| [];
    cart.splice(idx,1)
    localStorage.setItem('cart',JSON.stringify(cart))
    loadcart();
    

}
    





