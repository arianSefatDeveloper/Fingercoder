let $ = document
let ticketTitle = $.querySelector(".ticket-left__title")
let ticketData = $.querySelector(".ticket-left__date")
let ticketTime = $.querySelector(".ticket-left__time")
let ticketImg = $.querySelector(".tiket__img")
let ticketPrice = $.querySelector(".ticket-right__price-number")
let ticketPriceTotal = $.querySelector(".ticket-right__price-total")
let ticketPlus = $.querySelector(".ticket-plus")
let ticketMines = $.querySelector(".ticket-mines")
let ticketNumberInput = $.querySelector(".ticket-right__price-input")
let counter = 1
console.log(ticketNumberInput);

let navBtn = $.querySelector(".nav__toggle-icon")
let navMenueMobile = $.querySelector(".nav-mobile__wrapper")
let newestArrayAll =[

    {id:1 , title:"ربات نویسی هوشمند" , date:"جمعه ۱۷ دی ماه" , time:"۱۵:۳۰ الی ۱۸:۳۰" , loc:"شیراز" , price:"20000", img:"../images/card-page-photo.png"},
    {id:2 , title:"هوش مصنوعی" , date:"جمعه ۲۴ دی ماه" , time:"۱۵:۳۰ الی ۱۸:۳۰" , loc:"بندرعباس" , price:" 12000", img:"../images/ticket-page-photo.jpg"},
    {id:3 , title:"آموزش لینکدین" , date:"جمعه ۱ بهمن ماه" , time:"۱۵:۳۰ الی ۱۸:۳۰" , loc:"تهران" , price:"رایگان", img:"../images/card-page-photo.png"},
]

navBtn.addEventListener("click" , function(){
    navBtn.classList.toggle("nav__toggle-icon--open")
    navMenueMobile.classList.toggle("nav-mobile__wrapper--open")
})




ticketNumberInput.innerHTML = counter
ticketPriceTotal.innerHTML = ticketPrice.innerHTML

ticketPlus.addEventListener("click", ()=>{
    counter++
    console.log(ticketPrice.innerHTML * counter);
    
    ticketNumberInput.innerHTML = counter
    // ticketPriceTotal = counter * ticketPrice
    if(ticketPrice.innerHTML === "رایگان"){
        
        ticketPriceTotal.innerHTML = "رایگان"
    }else{

        ticketPriceTotal.innerHTML = ticketPrice.innerHTML * counter
    }
    console.log("plus");
})
ticketMines.addEventListener("click", ()=>{
    if(counter > 1){
        counter--
        ticketNumberInput.innerHTML = counter
        if(ticketPrice.innerHTML === "رایگان"){
        
            ticketPriceTotal.innerHTML = "رایگان"
        }else{
    
            ticketPriceTotal.innerHTML = ticketPrice.innerHTML * counter
        }
        // ticketPriceTotal.innerHTML = ticketPrice.innerHTML * counter


    }else{
        counter=1
        ticketNumberInput.innerHTML = counter

    }
      
    
        
    
})




let locatton = new URLSearchParams(location.search)
let id = locatton.get("id")

let mainObj = newestArrayAll.find(function(product){
    return product.id === Number(id)
})

if(mainObj){
    ticketTitle.innerHTML=mainObj.title
    ticketData.innerHTML=mainObj.date
    ticketTime.innerHTML=mainObj.time
    ticketImg.setAttribute("src" , mainObj.img)
    ticketPrice.innerHTML = mainObj.price
    ticketPrice.innerHTML = mainObj.price
console.log(ticketPrice.innerHTML);
    if(ticketPrice.innerHTML === "رایگان"){
        ticketNumberInput.innerHTML = 1
        ticketPriceTotal.innerHTML = "رایگان"
        counter = 1
        ticketPlus.removeEventListener("click" ,()=>{
            // counter++
            // ticketNumberInput.innerHTML = counter

        })

    }else{
        ticketNumberInput.innerHTML = 1
        // ticketPriceTotal.innerHTML = 
    }
    // ticketPrice.innerHTML=  mainObj.price
    
}
ticketPriceTotal.innerHTML= ticketPrice.innerHTML

console.log(ticketPrice.textContent * counter);
