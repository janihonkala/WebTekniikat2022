// Auto harjoitus
let car = {plateNumber: "OOP-001", currentSpeed: 120};

document.getElementById("printHere").innerHTML = "Car with plate number " + car.plateNumber + " is driving " 
+ car.currentSpeed + " km/h.";


let car2 = {plateNumber: "OOP-313", currentSpeed: 80};

document.getElementById("printHere2").innerHTML = "Car with plate number " + car2.plateNumber + " is driving " 
+ car2.currentSpeed + " km/h.";



// Resepti harjoitus
let recipes = [{name: "TunaPasta", 
                cookingTime: 20, 
                ingredients: ["Pasta", "Tuna", "Salt" , "Green pepper", "cream"]
},

{               name: "FishSoup", 
                cookingTime: 35, 
                ingredients: ["Fish", "Salt", "Milk"]
},
{               name: "Frenc fries", 
                cookingTime: 25, 
                ingredients: ["Salt", "Potatoes", "Olive oil"]
}

];
let element = document.getElementById("printHere3");
// Looppi harjoitukseen
let html = "<table>";
recipes.forEach(recipe => {
    html += "<tr>";
    html += "<td>" + recipe.name + "</td>";
    html += "</tr>"
});
html += "</table>";
element.innerHTML = html;




