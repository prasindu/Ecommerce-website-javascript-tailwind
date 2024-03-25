import {products} from "../data/products.js";
import { item } from "../data/item.js";
import { cart } from "../data/cart.js";
import { cartquantitycal } from "../data/cart.js";
import { cartquantity } from "../data/cart.js";




let templete=``;
products.forEach((item) => {
    templete +=`
    <a href="item.html" class="js-link-page flex flex-col items-center hover:bg-gradient-to-br from-purple-300 via-white to-purple-300 w-[180px] md:w-56 p-2 md:p-4 md:mx-auto border-2 border-solid border-gray-400/50 rounded-[20px] mb-7" data-product-id=${item.id}>
                <div>
                    <img src="${item.image}" class=" h-[170px] w-[150px] md:h-[180px] max-w-48" >
                </div>
                <div class="mt-3 h-16 font-medium text-center md:w-[150px]">
                    ${item.name}
                </div>
                <div class="flex mt-4 align-middle">
                    <img src="assent/img/ratings/rating-${item.rating.stars*10}.png" alt="" class="h-6">
                    <div class="ml-2 md:ml-4 font-medium">
                        <p>${item.rating.count}</p>
                    </div>
                </div>
                <div class="mt-4 font-bold">
                    <p>$${(item.priceCents)/100}</p>
                </div>
            </a>
    `;
});
document.querySelector(".js-item-grid").innerHTML=templete;

export function localsrotagesaveitem() {
    localStorage.setItem("item",JSON.stringify(item));
};


document.querySelectorAll(".js-link-page")
    .forEach((itemselect) =>{
        itemselect.addEventListener("click",() =>{
            const id= itemselect.dataset.productId;
            
            item[0]=id;
            localsrotagesaveitem();
        });
    });


cartquantitycal();
document.querySelector(".js-cart-num").innerHTML= cartquantity; 
