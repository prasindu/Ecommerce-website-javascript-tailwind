export let cart =JSON.parse(localStorage.getItem('cart'));


if(!cart){
    cart=[{
        productid: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2
    },
    {
        productid: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1
    }];
};
// export let cart =[{
//     productid: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
//     quantity: 2
// },
// {
//     productid: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
//     quantity: 1
// }];

function localsrotagesave() {
    localStorage.setItem("cart",JSON.stringify(cart));
};

export function addtocart(productId){
    let value=true;
      cart.forEach((item)=>{
        if(productId === item.productid){
          item.quantity+=1;
          value= false;
        }  
      });
      if(value){
        cart.push({
          productid:productId,
          quantity: 1
          });
      }
      // cart.push({
      //   productname:productName,
      //   quantity: 1
      // });
      localsrotagesave();
      console.log(cart);
  };



const rematchingcart =[];

export function removeaddcart(productId){
    cart.forEach((item) =>{
        if(productId !== item.productid){
            rematchingcart.push(item);
        }
    });
    cart = rematchingcart;
    localsrotagesave();     
};