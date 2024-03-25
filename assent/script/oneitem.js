import { item } from "../data/item.js";
import { products } from "../data/products.js";
import { cartquantitycal } from "../data/cart.js";
import { cartquantity } from "../data/cart.js";
import { localsrotagesavecart } from "../data/cart.js"; 
import { cart } from "../data/cart.js";



function xx(){
    let oneitemid=item[0];
    let templeteitem=``;
    products.forEach((product) =>{
        if(oneitemid===product.id){
            templeteitem=`
            <div class="absolute pl-[500px] top-0 bottom-0 left-[60%] right-0 overflow-hidden bg-left bg-no-repeat" style="background-image: url(${product.image});">    
                
            </div>
            <div class="absolute top-0 bottom-0 left-0 right-0 bg-white/80"></div>
            <div class=" flex align-middle h-[100vh] pt-16 z-10 relative  justify-between">
                <div class="mx-auto  items-center text-center align-middle max-h-[90vh] flex">
                    <img src="${product.image}" class="max-w-[80%] max-h-[90%] mt-8 z-10" alt="">
                </div>
                <div class="max-w-[50%] relative overflow-hidden">
                    
                    <div class="relative z-10 mr-20">
                        <div class="text-5xl font-bold mt-9">
                            <p>${product.name}</p>
                        </div>
                        <div class="mt-10">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, ex ipsum repellendus, veniam sint aliquam eum accusamus corporis nam saepe assumenda ullam nulla commodi ea dolor illum ad numquam quibusdam quia recusandae. Quia, recusandae? Sit, iusto nemo! Molestias cum ab perspiciatis exercitationem, perferendis eum asperiores minima vel alias eligendi enim reprehenderit rerum laborum optio non consequatur doloribus dicta harum! Commodi doloremque, velit tempora error delectus vel quas explicabo quo et officiis iusto dicta eius cumque veniam laudantium eos ducimus expedita quos. Non nostrum perferendis adipisci, neque aut quo explicabo, iusto beatae ut saepe facere nihil ipsam ea quidem asperiores voluptates.</p>
                        <div class="mt-4 text-2xl font-bold text-red-800">
                            $${(product.priceCents)/100}
                        </div>
                        <div class="mt-5 text-center">
                            <button class="js-click p-4 text-white bg-purple-500 hover:bg-purple-900 rounded-[10px]"> ADD TO CART</button>
            
                        </div>
                    </div>
                </div>
            </div>
            `;
            document.querySelector(".js-product-temp").innerHTML=templeteitem;
        }

    });
    
   

};
xx();

 const btn=document.querySelector(".js-click")
        btn.addEventListener( "click", () =>{
            
            const itemid=item[0];
            console.log(itemid);
            let value="false";
            cart.forEach((item) =>{
                if(itemid===item.productid){
                    item.quantity +=1;
                    value="true";
                    localsrotagesavecart();
                    
                }
            });
            
            if(value ==="false"){
                cart.push({
                    productid :itemid,
                    quantity : 1
                });
                localsrotagesavecart();
            }
            cartquantitycal();
            document.querySelector(".js-cart-num").innerHTML= cartquantity; 
            
        });



cartquantitycal();
document.querySelector(".js-cart-num").innerHTML= cartquantity; 
    

