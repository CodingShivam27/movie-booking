// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let movie=JSON.parse(localStorage.getItem("movie"));
console.log(movie.Poster);

let amount=JSON.parse(localStorage.getItem("amount"))||0;
document.querySelector("#wallet").innerText=amount;

let gg=()=>{
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=movie.Poster;
    let name=document.createElement("h2");
    name.innerText=movie.Title;
    div.append(name,img)
    document.querySelector("#movie").append(div);
}
gg();
let MyCode=()=>{
    let seats=document.querySelector("#number_of_seats").value;
    let paise=Number(seats)*100;
    if(paise<=amount){
        alert("Booking successful!");
        amount-=paise;
        localStorage.setItem("amount",JSON.stringify(amount));
        document.querySelector("#wallet").innerText=amount;
    }
    else{
        alert("Insufficient Balance!");
    }
}

