// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
//`http://www.omdbapi.com/?&s=${name1}&apikey=25d9a1b2`
let id;
let debouncing=(func,delay)=>{
    if(id){
        clearTimeout(id);
    }
    id=setTimeout(()=>{
        func();
    },delay);
}

let query=(id)=>{
    return document.querySelector(id).value;
}

let main=async ()=>{
    try{
        let name=query("#search");
        let res=await fetch(`http://www.omdbapi.com/?&s=${name}&apikey=25d9a1b2`)
        let data=await res.json();
        MyCode(data.Search);
    }
    catch(err){
        console.log(err)
    }
    
}
let MyCode=(data)=>{
    console.log(data)
    data.map((ele)=>{
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=ele.Poster;
        let name=document.createElement("p");
        name.innerText=ele.Title;
        let button=document.createElement("button");
        button.setAttribute("class","book_now");
        button.innerText="Book Now";
        button.onclick=()=>{
            append(ele);
        }
        div.append(img,name,button);
        document.querySelector("#movies").append(div);
    })
}
let append=(ele)=>{
    localStorage.setItem("movie",JSON.stringify(ele));
    window.location.href="/checkout.html"
}
let amount=JSON.parse(localStorage.getItem("amount"))||0;
document.querySelector("#wallet").innerText=amount;