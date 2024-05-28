export let cart=JSON.parse(localStorage.getItem('cart'));
if(!cart){
    cart=[{
        productid: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2
    },
    {
        productid: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1
    }];
}




/* ................................................................ */

export let cartquantity=0;
export function cartquantitycal(){
    cartquantity=0;
    cart.forEach((item) =>{
        cartquantity+= item.quantity;
    });
    console.log(cartquantity);
};


export function localsrotagesavecart(){
    localStorage.setItem("cart",JSON.stringify(cart));
};

let machcart=[];
export function deletecartitem(x){
    cart.forEach((item) =>{
        if(x!=item.productid){
            machcart.push(item);
           
        }
    
    });
   cart = machcart;
   machcart=[];
   localsrotagesavecart();
   const container =document.querySelector(`.js-cart-item-container-${x}`);
    container.remove();
};