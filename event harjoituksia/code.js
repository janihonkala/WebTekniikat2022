 //Harjoitus 1.
let h1 = document.querySelector("h1");
h1.classList.add("special");
h1.style.width = "750px";

//Harjoitus 2.
let p = document.querySelector("p");
p.addEventListener("mouseenter", changeColor);
p.addEventListener("mouseleave", changeColor);
p.addEventListener("click", changeBg);

function changeColor(){
p.classList.toggle("textcolor");
}
function changeBg(){
    p.classList.toggle("textbg")
}

//Harjoitus 3.
let sotu = document.getElementById("sotu");
sotu.addEventListener("input", checkValidity);
function checkValidity(){
    let text = sotu.value;

    if(text.length == 11) {
    sotu.classList.remove("invalid")
    }else{
        sotu.classList.add("invalid")
}
}


let form = document.querySelector("button");

form.addEventListener("submit", sendData);

//Alemmalla functiolla estetään oletusarvoinen toiminta
function sendData(event){
    event.preventDefault();
    //joka loppuu tähän


//Haetaan data formista alla olevalla
    let inputField = document.getElementById("fname");

    console.log(inputField.value);

    let formData = new FormData(form);
    console.log(formData.get("fname"));
    console.log(formData.get("1name"));
    console.log(formData.get("age"));
}
