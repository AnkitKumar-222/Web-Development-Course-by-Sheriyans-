// show real products
var products = [
    {name: "White Chair", headline: "Soft like cloud.", price: "15,000", image:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYWlyfGVufDB8fDB8fHww"},
    {name: "Blue Chair", headline: "Lakdi ka stool", price: "10,000", image:"https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Traditional Chair", headline: "Look very old", price: "16,500", image:"https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"}
];

var popular = [
    {name: "Red Chair", headline: "Painted blood red.", price: "15,000", image:"https://images.unsplash.com/photo-1617582907226-c49e2d8200d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNoYWlyfGVufDB8fDB8fHww"},
    {name: "Blue Chair", headline: "Lakdi ka stool", price: "10,000", image:"https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Traditional Chair", headline: "Look very old", price: "16,500", image:"https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"}
];

function addProduct(){
    var clutter = "";
products.forEach(function(product){
    clutter += '<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden ">
                    <img class="w-full h-full object-cover "  scr="${product.image}"/>
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${product.head}</h3>
                            <h4 class="font-semibold mt-2">&#8377;${product.price}</h4>
                        </div>
                        <button class="w-10 h-10 rounded-full shader text-yellow-400"><i
                                class="ri-add-line"></i></button>
                    </div>
                </div>
    </div> ';

            })

            document.querySelector(".products").innerHTML = clutter;
}

function addPopularProdcuts(){
    
}

addProduct();

// show real popular products
// on click of product and button add it to the cart 



