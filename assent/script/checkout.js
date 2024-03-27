import { cart } from "../data/cart.js";
import { products } from "../data/products.js";


console.log(cart);
let checkouttemp=``;
document.querySelector(".js-checkout-template")
    cart.forEach((item) => {
        products.forEach((product) =>{
            if(item.productid===product.id){
                
                checkouttemp += `
                <div class="border-2 border-solid border-gray-400/50 rounded-[10px] p-3 mb-4">
                        <div class="flex justify-between">
                            <div >
                                <p class="p-3 text-xl font-bold text-green-800">Delivery date: Tuesday, June 21</p>
                            </div>
                            <div class="flex m-2">
                                <button class="m-2"><img src="assent/img/icon/refresh.png" class="w-8 " alt=""></button>
                                <button  class="m-2"><img src="assent/img/icon/close.png" class="w-8" alt=""></button>
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div class="">
                                <img src="${product.image}" class="w-[120px]" alt="">
                            </div>
                            <div class="w-[300px] ml-4 ">
                                <p class="mb-2 font-bold">${product.name}</p>
                                <p class="mb-2 font-bold text-red-700">$${(product.priceCents)/100}</p>
                                <p>Quantity: ${item.quantity}</p>
                                
                            </div>
                            <div class="ml-4">
                                <div class="">
                                    <div class="font-bold">
                                    Choose a delivery option:
                                    </div>
                                    <div class="flex mb-2 align-middle">
                                    <input type="radio" checked
                                        class=""
                                        name="delivery-option">
                                    <div class="ml-3">
                                        <div class="font-medium text-green-800">
                                        Tuesday, June 21
                                        </div>
                                        <div class="text-gray-500/70">
                                        FREE Shipping
                                        </div>
                                    </div>
                                    </div>
                                    <div class="flex mb-2 align-middle">
                                    <input type="radio"
                                        class=""
                                        name="delivery-option">
                                    <div class="ml-3">
                                        <div class="font-medium text-green-800">
                                        Wednesday, June 15
                                        </div>
                                        <div class="text-gray-500/70">
                                        $4.99 - Shipping
                                        </div>
                                    </div>
                                    </div>
                                    <div class="flex mb-2 align-middle">
                                    <input type="radio"
                                        class=""
                                        name="delivery-option">
                                    <div class="ml-3">
                                        <div class="font-medium text-green-800">
                                        Monday, June 13
                                        </div>
                                        <div class="text-gray-500/70">
                                        $9.99 - Shipping
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
        
                        </div>
                    </div>
                `;
            }
        });
        

        document.querySelector(".js-checkout-template").innerHTML=checkouttemp;

        
    });