// Store the wallet amount to your local storage with key "amount"
let query=(id)=>{
    return document.querySelector(id).value;
}
let paise=JSON.parse(localStorage.getItem("amount"))||0;
document.querySelector("#wallet").innerText=paise;
//console.log(typeof paise)
let MyCode=()=>{
    let amount=query("#amount")
    //console.log(paise);
    paise+=Number(amount);
    localStorage.setItem("amount",JSON.stringify(paise));

    document.querySelector("#wallet").innerText=paise;
}
