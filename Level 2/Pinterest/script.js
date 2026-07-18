 var arr = [

    {name: "Ironman", image: "https://images.unsplash.com/photo-1626278664285-f796b9ee7806?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFydmVscyUyMGF2ZW5nZXJzfGVufDB8fDB8fHww"},
    {name: "Hluk", image: "https://images.unsplash.com/photo-1584844395736-24cf402e052e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fG1hcnZlbHMlMjBhdmVuZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Captain America", image: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fG1hcnZlbHMlMjBhdmVuZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Thor", image: "https://images.unsplash.com/photo-1612740722203-ba65e8877d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fG1hcnZlbHMlMjBhdmVuZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name: "BMW", image: "https://images.unsplash.com/photo-1441148345475-03a2e82f9719?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Super Car", image: "https://plus.unsplash.com/premium_photo-1737182592549-0c83f93e2903?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    {name: "Kyojuro Rengoku", image: "https://images.unsplash.com/photo-1765708180184-48458995024b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Spiderman", image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpZGVybWFufGVufDB8fDB8fHww"},
    {name: "Naruto", image: "https://images.unsplash.com/photo-1594007759138-855170ec8dc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzAyfHxhbmltZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Anya", image: "https://images.unsplash.com/photo-1670834169539-feed72d15b25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDcxfHxhbmltZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Tokyo City", image: "https://images.unsplash.com/photo-1773689915700-7b3af57a67f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTcxfHxhbmltZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Gojo", image: "https://images.unsplash.com/photo-1769874824744-1060f1f1a749?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjI4fHxhbmltZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Goku", image: "https://images.unsplash.com/photo-1783765803308-fc2eba85cc2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njk3fHxhbmltZXxlbnwwfHwwfHx8MA%3D%3D"},

     {name: "Ironman", image: "https://images.unsplash.com/photo-1626278664285-f796b9ee7806?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFydmVscyUyMGF2ZW5nZXJzfGVufDB8fDB8fHww"},
    {name: "Hluk", image: "https://images.unsplash.com/photo-1584844395736-24cf402e052e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fG1hcnZlbHMlMjBhdmVuZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Captain America", image: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fG1hcnZlbHMlMjBhdmVuZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Thor", image: "https://images.unsplash.com/photo-1612740722203-ba65e8877d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fG1hcnZlbHMlMjBhdmVuZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name: "BMW", image: "https://images.unsplash.com/photo-1441148345475-03a2e82f9719?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Super Car", image: "https://plus.unsplash.com/premium_photo-1737182592549-0c83f93e2903?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    {name: "Kyojuro Rengoku", image: "https://images.unsplash.com/photo-1765708180184-48458995024b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Spiderman", image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpZGVybWFufGVufDB8fDB8fHww"},
    {name: "Naruto", image: "https://images.unsplash.com/photo-1594007759138-855170ec8dc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzAyfHxhbmltZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Anya", image: "https://images.unsplash.com/photo-1670834169539-feed72d15b25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDcxfHxhbmltZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Tokyo City", image: "https://images.unsplash.com/photo-1773689915700-7b3af57a67f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTcxfHxhbmltZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Gojo", image: "https://images.unsplash.com/photo-1769874824744-1060f1f1a749?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjI4fHxhbmltZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Goku", image: "https://images.unsplash.com/photo-1783765803308-fc2eba85cc2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njk3fHxhbmltZXxlbnwwfHwwfHx8MA%3D%3D"},

    {name: "Peteals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9zZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Animals of town", image: "https://images.unsplash.com/photo-1694611338222-7f667a0e34ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEFuaW1hbHMlMjBvZiUyMHRvd258ZW58MHx8MHx8fDA%3D"},
    {name: "The crowd of city", image: "https://images.unsplash.com/photo-1627653422372-6a57cf5c2a76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGhlJTIwY3Jvd2QlMjBvZiUyMGNpdHl8ZW58MHx8MHx8fDA%3D"},
    {name: "Fruits of planet", image: "https://plus.unsplash.com/premium_photo-1671379086168-a5d018d583cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RnJ1aXRzJTIwb2YlMjBwbGFuZXR8ZW58MHx8MHx8fDA%3D"},
    {name: "Orange peeled", image: "https://plus.unsplash.com/premium_photo-1663926403396-6d9831ce6a1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T3JhbmdlJTIwcGVlbGVkfGVufDB8fDB8fHww"},
    {name: "Web design", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww"},
    {name: "Apple juice", image: "https://plus.unsplash.com/premium_photo-1724711441081-5c4199721ad7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QXBwbGUlMjBqdWljZXxlbnwwfHwwfHx8MA%3D%3D"},

    {name: "Peteals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9zZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Animals of town", image: "https://images.unsplash.com/photo-1694611338222-7f667a0e34ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEFuaW1hbHMlMjBvZiUyMHRvd258ZW58MHx8MHx8fDA%3D"},
    {name: "The crowd of city", image: "https://images.unsplash.com/photo-1627653422372-6a57cf5c2a76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGhlJTIwY3Jvd2QlMjBvZiUyMGNpdHl8ZW58MHx8MHx8fDA%3D"},
    {name: "Fruits of planet", image: "https://plus.unsplash.com/premium_photo-1671379086168-a5d018d583cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RnJ1aXRzJTIwb2YlMjBwbGFuZXR8ZW58MHx8MHx8fDA%3D"},
    {name: "Orange peeled", image: "https://plus.unsplash.com/premium_photo-1663926403396-6d9831ce6a1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T3JhbmdlJTIwcGVlbGVkfGVufDB8fDB8fHww"},
    {name: "Web design", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww"},
    {name: "Apple juice", image: "https://plus.unsplash.com/premium_photo-1724711441081-5c4199721ad7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QXBwbGUlMjBqdWljZXxlbnwwfHwwfHx8MA%3D%3D"},

      {name: "Ironman", image: "https://images.unsplash.com/photo-1626278664285-f796b9ee7806?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFydmVscyUyMGF2ZW5nZXJzfGVufDB8fDB8fHww"},
    {name: "Hluk", image: "https://images.unsplash.com/photo-1584844395736-24cf402e052e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fG1hcnZlbHMlMjBhdmVuZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Captain America", image: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fG1hcnZlbHMlMjBhdmVuZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Thor", image: "https://images.unsplash.com/photo-1612740722203-ba65e8877d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fG1hcnZlbHMlMjBhdmVuZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D"},
    {name: "BMW", image: "https://images.unsplash.com/photo-1441148345475-03a2e82f9719?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Super Car", image: "https://plus.unsplash.com/premium_photo-1737182592549-0c83f93e2903?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    {name: "Kyojuro Rengoku", image: "https://images.unsplash.com/photo-1765708180184-48458995024b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Spiderman", image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpZGVybWFufGVufDB8fDB8fHww"},
    {name: "Naruto", image: "https://images.unsplash.com/photo-1594007759138-855170ec8dc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzAyfHxhbmltZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Anya", image: "https://images.unsplash.com/photo-1670834169539-feed72d15b25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDcxfHxhbmltZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Tokyo City", image: "https://images.unsplash.com/photo-1773689915700-7b3af57a67f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTcxfHxhbmltZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Gojo", image: "https://images.unsplash.com/photo-1769874824744-1060f1f1a749?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjI4fHxhbmltZXxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Goku", image: "https://images.unsplash.com/photo-1783765803308-fc2eba85cc2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njk3fHxhbmltZXxlbnwwfHwwfHx8MA%3D%3D"},
 
 ]

 function showTheCards(){
    var clutter = "";
    arr.forEach(function(obj){
        clutter += `<div class="box"> 
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">Lorem ipsum </div>
    </div>`;
    })  

    document.querySelector(".container")
    .innerHTML = clutter;
 }

 function handleSearchFunctionality(){
    var input = document.querySelector("#searchinput");
    

    input
    .addEventListener("focus", function(){
        document.querySelector(".overlay").style.display = "block";
    })

    input
    .addEventListener("blur", function(){
        document.querySelector(".overlay").style.display = "none";
    })

    input
    .addEventListener("input", function(){
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
        var clutter = "";
        filteredArray.forEach(function(obj){
            clutter += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
        </div>`
        })
    document.querySelector(".searchdata").style.display = "block";
        document.querySelector(".searchdata").innerHTML = clutter;
    })
}

handleSearchFunctionality();
showTheCards();