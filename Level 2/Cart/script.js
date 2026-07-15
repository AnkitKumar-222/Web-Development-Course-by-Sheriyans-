// show real projects
var product = [
    {name : "White Chair", headline: "Soft like cloud", price: "15000", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYWlyfGVufDB8fDB8fHww"}
    {name : "Blue chair", headline: "Ladki ka stool", price: "10000", image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"}
    {name : "Traditional Chair", headline: "Look very old", price: "16500", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"}
];
var popular = [];

var popular = "";
products.forEach(function(product){
    clutter += ` <div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl"></div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">EJ 100 Ox Chair.</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">Hangup data.</h3>
                            <h4 class="font-semibold mt-2">$3,456</h4>
                        </div>
                        <button class="w-10 h-10 rounded-full shader text-yellow-400"><i
                                class="ri-add-line"></i></button>
                    </div>
                </div>
            </div>
            <div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl"></div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">EJ 100 Ox Chair.</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">Hangup data.</h3>
                            <h4 class="font-semibold mt-2">$3,456</h4>
                        </div>
                        <button class="w-10 h-10 rounded-full bg-[#4A4563] text-yellow-400"><i
                                class="ri-add-line"></i></button>
                    </div>
                </div>
            </div>`;
})


// show real popular products
// on click of product add button abd it to the cart