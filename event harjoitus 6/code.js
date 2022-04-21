document.querySelector("form").addEventListener("submit", calc);

function calc (event){
 event.preventDefault(); 

    let formData = new FormData(event.currentTarget);
    
    // Muista getin jälkeen nimi, ei ID
    let num1 = formData.get("num1");
    let num2 = formData.get("num2");

    let sum = Number(num1) + Number(num2);

    let res = document.getElementById("result");

    let arit = formData.get("arit");

    if(arit == "sum") {
        res.textContent = "Lukujen summa on " + (Number(num1) + Number(num2));
    }else{
        res.textContent = "Lukujen erotus on " + (Number(num1) - Number(num2));



    }
}