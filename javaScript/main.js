let $ = document
let navBtn = $.querySelector(".nav__toggle-icon")
let navMenueMobile = $.querySelector(".nav-mobile__wrapper")
let listItems =  $.querySelectorAll(".list__item ")
let newestCards = $.querySelector(".newesr__cards")



let newestArrayAll =[
    {id:1 , title:"ربات نویسی هوشمند" , date:"جمعه ۱۷ دی ماه" , time:"۱۵:۳۰ الی ۱۸:۳۰" , loc:"شیراز" , price:"۲۰۰۰۰", img:"../images/card-page-photo.png"},
    {id:2 , title:"هوش مصنوعی" , date:"جمعه ۲۴ دی ماه" , time:"۱۵:۳۰ الی ۱۸:۳۰" , loc:"بندرعباس" , price:" ۱۲۰۰۰", img:"../images/ticket-page-photo.jpg"},
    {id:3 , title:"آموزش لینکدین" , date:"جمعه ۱ بهمن ماه" , time:"۱۵:۳۰ الی ۱۸:۳۰" , loc:"تهران" , price:"رایگان", img:"../images/card-page-photo.png"},
]
let newestArrayShiraz =[
    {id:1 , title:"ربات نویسی هوشمند" , date:"جمعه ۱۷ دی ماه" , time:"۱۵:۳۰ الی ۱۸:۳۰" , loc:"شیراز" , price:"۲۰۰۰۰", img:"../images/card-page-photo.png"},
]
let newestArrayTehran =[
    {id:3 , title:"آموزش لینکدین" , date:"جمعه ۱ بهمن ماه" , time:"۱۵:۳۰ الی ۱۸:۳۰" , loc:"تهران" , price:"رایگان", img:"../images/card-page-photo.png"},
]
let newestArraybandar =[
    {id:2 , title:"هوش مصنوعی" , date:"جمعه ۲۴ دی ماه" , time:"۱۵:۳۰ الی ۱۸:۳۰" , loc:"بندرعباس" , price:" ۱۲۰۰۰", img:"../images/ticket-page-photo.jpg "},
]



navBtn.addEventListener("click" , function(){
    navBtn.classList.toggle("nav__toggle-icon--open")
    navMenueMobile.classList.toggle("nav-mobile__wrapper--open")
})







newestArrayAll.forEach(item =>{
    if(item.price === "رایگان"){
        newestCards.insertAdjacentHTML("beforeend", ` <div class="card">
        <img class="card__img" src="${item.img}" alt="">
        <h2 class="card__title">${item.title}</h2>
        <p class="card__date">${item.date}</p>
        <div class="card__time">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <mask id="mask0_33_73" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="22">
                <rect width="22" height="22" fill="url(#pattern0)"/>
                </mask>
                <g mask="url(#mask0_33_73)">
                <rect x="-3" y="-6" width="45" height="47" fill="#02C39A"/>
                </g>
                <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_33_73" transform="scale(0.0333333)"/>
                </pattern>
                <image id="image0_33_73" width="30" height="30" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACB0lEQVR4nO2WyUocURSGaxNiIAF14cYsXQndjf/faNEufJSYOD2A4JSNryNxegjBkJhAMJC2+5xuHBau2nnhAJFblqGtvlV1W8tskgNnd8/97v/f6XjePx81ckjJNSEbSl4qsC3kTKWv72WaOWaMGSvkDyEvBDgUcqlKIrFQyCkBbpT8HU0BRtPASo7bahW4FvKdtagO+HFQBeZdj4KSi9Y5yCurcgXWk6B7vt+txeIHM06AspDnQQLlYGsGBt7v5nJdSXAhl2w2N2zQPd9/peRHBU5ilDTnsQILYU0LXIBDm0WXUWhlcPCtkt8cgNH8ulMo9EbhQp7brN62QA/iJq8WiyUhh2PhwH4LHPhus3o2Ym+i0ianEpXXR0Y6muDT9jsYXplgT1PsdASbnAvHjSe+BcHpdThIbYCP7097Yig55nKA2gA7PT5e7H1+AljJVRfF1WdQXHZRfGq7OgkLTVcMnLooPmtZMTn8N8AVx31zTjerydWswUqupIPND5S94tFUsLnsQh5lBiUb9UKhMxUcqAYWMlPcRhPhbZEvFNjIQO1nl17tQZg25ang1CYvGpLP9/z5n4HrR9h7V2M61Hy+pwUQF+YfvS8MG4J2Wp/5oAEIFy7AF2ewkJtKbjWv9lep9EaASQGWBagFffNd71wT4FMNmPjZ3//6gWtmDnLTGfw/vGeIW0XKOHYwVnYgAAAAAElFTkSuQmCC"/>
                </defs>
                </svg>
                
            <span class="card-time__text">${item.time}</span>
        </div>
        <div class="card__location">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #02C39A;transform: ;msFilter:;"><path d="M12 22s8.029-5.56 8-12c0-4.411-3.589-8-8-8S4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22zM8 9h3V6h2v3h3v2h-3v3h-2v-3H8V9z"></path></svg>
    
                
            <span class="card-location__text">${item.loc}</span>
        </div>
        <div class="card__signin">
        <a class="card__link" href="./ticket.html?id=${item.id}">ثبت نام</a>
            <div class="card__price-parent">
    
                <span class="card__price">${item.price}</span>
                
    
            </div>
        </div>
    
    </div>`)

    }else{
        newestCards.insertAdjacentHTML("beforeend", ` <div class="card">
        <img class="card__img" src="${item.img} " alt="">
        <h2 class="card__title">${item.title}</h2>
        <p class="card__date">${item.date}</p>
        <div class="card__time">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <mask id="mask0_33_73" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="22">
                <rect width="22" height="22" fill="url(#pattern0)"/>
                </mask>
                <g mask="url(#mask0_33_73)">
                <rect x="-3" y="-6" width="45" height="47" fill="#02C39A"/>
                </g>
                <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_33_73" transform="scale(0.0333333)"/>
                </pattern>
                <image id="image0_33_73" width="30" height="30" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACB0lEQVR4nO2WyUocURSGaxNiIAF14cYsXQndjf/faNEufJSYOD2A4JSNryNxegjBkJhAMJC2+5xuHBau2nnhAJFblqGtvlV1W8tskgNnd8/97v/f6XjePx81ckjJNSEbSl4qsC3kTKWv72WaOWaMGSvkDyEvBDgUcqlKIrFQyCkBbpT8HU0BRtPASo7bahW4FvKdtagO+HFQBeZdj4KSi9Y5yCurcgXWk6B7vt+txeIHM06AspDnQQLlYGsGBt7v5nJdSXAhl2w2N2zQPd9/peRHBU5ilDTnsQILYU0LXIBDm0WXUWhlcPCtkt8cgNH8ulMo9EbhQp7brN62QA/iJq8WiyUhh2PhwH4LHPhus3o2Ym+i0ianEpXXR0Y6muDT9jsYXplgT1PsdASbnAvHjSe+BcHpdThIbYCP7097Yig55nKA2gA7PT5e7H1+AljJVRfF1WdQXHZRfGq7OgkLTVcMnLooPmtZMTn8N8AVx31zTjerydWswUqupIPND5S94tFUsLnsQh5lBiUb9UKhMxUcqAYWMlPcRhPhbZEvFNjIQO1nl17tQZg25ang1CYvGpLP9/z5n4HrR9h7V2M61Hy+pwUQF+YfvS8MG4J2Wp/5oAEIFy7AF2ewkJtKbjWv9lep9EaASQGWBagFffNd71wT4FMNmPjZ3//6gWtmDnLTGfw/vGeIW0XKOHYwVnYgAAAAAElFTkSuQmCC"/>
                </defs>
                </svg>
                
            <span class="card-time__text">${item.time}</span>
        </div>
        <div class="card__location">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #02C39A;transform: ;msFilter:;"><path d="M12 22s8.029-5.56 8-12c0-4.411-3.589-8-8-8S4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22zM8 9h3V6h2v3h3v2h-3v3h-2v-3H8V9z"></path></svg>
    
                
            <span class="card-location__text">${item.loc}</span>
        </div>
        <div class="card__signin">
        <a class="card__link" href="./html/ticket.html?id=${item.id}">ثبت نام</a>
            
            <div class="card__price-parent">
    
                <span class="card__price">${item.price}</span>
                <span class="card__price-under">تومان</span>
                
    
            </div>
        </div>
    
    </div>`)
    }


})


listItems.forEach(item=>{
    item.addEventListener("click" , (event) => {
       console.log(event.target.innerHTML);
       let haveClass = document.querySelector(".list__item--active")
       haveClass.classList.remove("list__item--active")
        item.classList.add("list__item--active")



  
        cardGenarator(event)

    })
})


function cardGenarator(event){
    newestCards.innerHTML=""


    if(event.target.innerHTML === "همه"){
        newestArrayAll.forEach(item =>{
            if(item.price === "رایگان"){
                newestCards.insertAdjacentHTML("beforeend", ` <div class="card">
                <img class="card__img" src="${item.img}" alt="">
                <h2 class="card__title">${item.title}</h2>
                <p class="card__date">${item.date}</p>
                <div class="card__time">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <mask id="mask0_33_73" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="22">
                        <rect width="22" height="22" fill="url(#pattern0)"/>
                        </mask>
                        <g mask="url(#mask0_33_73)">
                        <rect x="-3" y="-6" width="45" height="47" fill="#02C39A"/>
                        </g>
                        <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_33_73" transform="scale(0.0333333)"/>
                        </pattern>
                        <image id="image0_33_73" width="30" height="30" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACB0lEQVR4nO2WyUocURSGaxNiIAF14cYsXQndjf/faNEufJSYOD2A4JSNryNxegjBkJhAMJC2+5xuHBau2nnhAJFblqGtvlV1W8tskgNnd8/97v/f6XjePx81ckjJNSEbSl4qsC3kTKWv72WaOWaMGSvkDyEvBDgUcqlKIrFQyCkBbpT8HU0BRtPASo7bahW4FvKdtagO+HFQBeZdj4KSi9Y5yCurcgXWk6B7vt+txeIHM06AspDnQQLlYGsGBt7v5nJdSXAhl2w2N2zQPd9/peRHBU5ilDTnsQILYU0LXIBDm0WXUWhlcPCtkt8cgNH8ulMo9EbhQp7brN62QA/iJq8WiyUhh2PhwH4LHPhus3o2Ym+i0ianEpXXR0Y6muDT9jsYXplgT1PsdASbnAvHjSe+BcHpdThIbYCP7097Yig55nKA2gA7PT5e7H1+AljJVRfF1WdQXHZRfGq7OgkLTVcMnLooPmtZMTn8N8AVx31zTjerydWswUqupIPND5S94tFUsLnsQh5lBiUb9UKhMxUcqAYWMlPcRhPhbZEvFNjIQO1nl17tQZg25ang1CYvGpLP9/z5n4HrR9h7V2M61Hy+pwUQF+YfvS8MG4J2Wp/5oAEIFy7AF2ewkJtKbjWv9lep9EaASQGWBagFffNd71wT4FMNmPjZ3//6gWtmDnLTGfw/vGeIW0XKOHYwVnYgAAAAAElFTkSuQmCC"/>
                        </defs>
                        </svg>
                        
                    <span class="card-time__text">${item.time}</span>
                </div>
                <div class="card__location">
                                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #02C39A;transform: ;msFilter:;"><path d="M12 22s8.029-5.56 8-12c0-4.411-3.589-8-8-8S4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22zM8 9h3V6h2v3h3v2h-3v3h-2v-3H8V9z"></path></svg>
            
                        
                    <span class="card-location__text">${item.loc}</span>
                </div>
                <div class="card__signin">
        <a class="card__link" href="./ticket.html?id=${item.id}">ثبت نام</a>
                    
                    <div class="card__price-parent">
            
                        <span class="card__price">${item.price}</span>
                        
            
                    </div>
                </div>
            
            </div>`)
        
            }else{
                newestCards.insertAdjacentHTML("beforeend", ` <div class="card">
                <img class="card__img" src="${item.img}" alt="">
                <h2 class="card__title">${item.title}</h2>
                <p class="card__date">${item.date}</p>
                <div class="card__time">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <mask id="mask0_33_73" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="22">
                        <rect width="22" height="22" fill="url(#pattern0)"/>
                        </mask>
                        <g mask="url(#mask0_33_73)">
                        <rect x="-3" y="-6" width="45" height="47" fill="#02C39A"/>
                        </g>
                        <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_33_73" transform="scale(0.0333333)"/>
                        </pattern>
                        <image id="image0_33_73" width="30" height="30" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACB0lEQVR4nO2WyUocURSGaxNiIAF14cYsXQndjf/faNEufJSYOD2A4JSNryNxegjBkJhAMJC2+5xuHBau2nnhAJFblqGtvlV1W8tskgNnd8/97v/f6XjePx81ckjJNSEbSl4qsC3kTKWv72WaOWaMGSvkDyEvBDgUcqlKIrFQyCkBbpT8HU0BRtPASo7bahW4FvKdtagO+HFQBeZdj4KSi9Y5yCurcgXWk6B7vt+txeIHM06AspDnQQLlYGsGBt7v5nJdSXAhl2w2N2zQPd9/peRHBU5ilDTnsQILYU0LXIBDm0WXUWhlcPCtkt8cgNH8ulMo9EbhQp7brN62QA/iJq8WiyUhh2PhwH4LHPhus3o2Ym+i0ianEpXXR0Y6muDT9jsYXplgT1PsdASbnAvHjSe+BcHpdThIbYCP7097Yig55nKA2gA7PT5e7H1+AljJVRfF1WdQXHZRfGq7OgkLTVcMnLooPmtZMTn8N8AVx31zTjerydWswUqupIPND5S94tFUsLnsQh5lBiUb9UKhMxUcqAYWMlPcRhPhbZEvFNjIQO1nl17tQZg25ang1CYvGpLP9/z5n4HrR9h7V2M61Hy+pwUQF+YfvS8MG4J2Wp/5oAEIFy7AF2ewkJtKbjWv9lep9EaASQGWBagFffNd71wT4FMNmPjZ3//6gWtmDnLTGfw/vGeIW0XKOHYwVnYgAAAAAElFTkSuQmCC"/>
                        </defs>
                        </svg>
                        
                    <span class="card-time__text">${item.time}</span>
                </div>
                <div class="card__location">
                                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #02C39A;transform: ;msFilter:;"><path d="M12 22s8.029-5.56 8-12c0-4.411-3.589-8-8-8S4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22zM8 9h3V6h2v3h3v2h-3v3h-2v-3H8V9z"></path></svg>
            
                        
                    <span class="card-location__text">${item.loc}</span>
                </div>
                <div class="card__signin">
        <a class="card__link" href="./ticket.html?id=${item.id}">ثبت نام</a>
                    
                    <div class="card__price-parent">
            
                        <span class="card__price">${item.price}</span>
                        <span class="card__price-under">تومان</span>
                        
            
                    </div>
                </div>
            
            </div>`)
            }
        
        })

    }

    ///////////////////////////////////////////////////
    else if(event.target.innerHTML === "شیراز"){
      
        newestArrayShiraz.forEach(shiraz =>{
        if(shiraz.price === "رایگان"){
            newestCards.insertAdjacentHTML("beforeend", ` <div class="card">
            <img class="card__img" src="${shiraz.img}" alt="">
            <h2 class="card__title">${shiraz.title}</h2>
            <p class="card__date">${shiraz.date}</p>
            <div class="card__time">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <mask id="mask0_33_73" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="22">
                    <rect width="22" height="22" fill="url(#pattern0)"/>
                    </mask>
                    <g mask="url(#mask0_33_73)">
                    <rect x="-3" y="-6" width="45" height="47" fill="#02C39A"/>
                    </g>
                    <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_33_73" transform="scale(0.0333333)"/>
                    </pattern>
                    <image id="image0_33_73" width="30" height="30" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACB0lEQVR4nO2WyUocURSGaxNiIAF14cYsXQndjf/faNEufJSYOD2A4JSNryNxegjBkJhAMJC2+5xuHBau2nnhAJFblqGtvlV1W8tskgNnd8/97v/f6XjePx81ckjJNSEbSl4qsC3kTKWv72WaOWaMGSvkDyEvBDgUcqlKIrFQyCkBbpT8HU0BRtPASo7bahW4FvKdtagO+HFQBeZdj4KSi9Y5yCurcgXWk6B7vt+txeIHM06AspDnQQLlYGsGBt7v5nJdSXAhl2w2N2zQPd9/peRHBU5ilDTnsQILYU0LXIBDm0WXUWhlcPCtkt8cgNH8ulMo9EbhQp7brN62QA/iJq8WiyUhh2PhwH4LHPhus3o2Ym+i0ianEpXXR0Y6muDT9jsYXplgT1PsdASbnAvHjSe+BcHpdThIbYCP7097Yig55nKA2gA7PT5e7H1+AljJVRfF1WdQXHZRfGq7OgkLTVcMnLooPmtZMTn8N8AVx31zTjerydWswUqupIPND5S94tFUsLnsQh5lBiUb9UKhMxUcqAYWMlPcRhPhbZEvFNjIQO1nl17tQZg25ang1CYvGpLP9/z5n4HrR9h7V2M61Hy+pwUQF+YfvS8MG4J2Wp/5oAEIFy7AF2ewkJtKbjWv9lep9EaASQGWBagFffNd71wT4FMNmPjZ3//6gWtmDnLTGfw/vGeIW0XKOHYwVnYgAAAAAElFTkSuQmCC"/>
                    </defs>
                    </svg>
                    
                <span class="card-time__text">${shiraz.time}</span>
            </div>
            <div class="card__location">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #02C39A;transform: ;msFilter:;"><path d="M12 22s8.029-5.56 8-12c0-4.411-3.589-8-8-8S4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22zM8 9h3V6h2v3h3v2h-3v3h-2v-3H8V9z"></path></svg>
        
                    
                <span class="card-location__text">${shiraz.loc}</span>
            </div>
            <div class="card__signin">
        <a class="card__link" href="./ticket.html?id=${shiraz.id}">ثبت نام</a>
                
                <div class="card__price-parent">
        
                    <span class="card__price">${shiraz.price}</span>
                    
        
                </div>
            </div>
        
        </div>`)
    
        }else{
            newestCards.insertAdjacentHTML("beforeend", ` <div class="card">
            <img class="card__img" src="${shiraz.img}" alt="">
            <h2 class="card__title">${shiraz.title}</h2>
            <p class="card__date">${shiraz.date}</p>
            <div class="card__time">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <mask id="mask0_33_73" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="22">
                    <rect width="22" height="22" fill="url(#pattern0)"/>
                    </mask>
                    <g mask="url(#mask0_33_73)">
                    <rect x="-3" y="-6" width="45" height="47" fill="#02C39A"/>
                    </g>
                    <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_33_73" transform="scale(0.0333333)"/>
                    </pattern>
                    <image id="image0_33_73" width="30" height="30" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACB0lEQVR4nO2WyUocURSGaxNiIAF14cYsXQndjf/faNEufJSYOD2A4JSNryNxegjBkJhAMJC2+5xuHBau2nnhAJFblqGtvlV1W8tskgNnd8/97v/f6XjePx81ckjJNSEbSl4qsC3kTKWv72WaOWaMGSvkDyEvBDgUcqlKIrFQyCkBbpT8HU0BRtPASo7bahW4FvKdtagO+HFQBeZdj4KSi9Y5yCurcgXWk6B7vt+txeIHM06AspDnQQLlYGsGBt7v5nJdSXAhl2w2N2zQPd9/peRHBU5ilDTnsQILYU0LXIBDm0WXUWhlcPCtkt8cgNH8ulMo9EbhQp7brN62QA/iJq8WiyUhh2PhwH4LHPhus3o2Ym+i0ianEpXXR0Y6muDT9jsYXplgT1PsdASbnAvHjSe+BcHpdThIbYCP7097Yig55nKA2gA7PT5e7H1+AljJVRfF1WdQXHZRfGq7OgkLTVcMnLooPmtZMTn8N8AVx31zTjerydWswUqupIPND5S94tFUsLnsQh5lBiUb9UKhMxUcqAYWMlPcRhPhbZEvFNjIQO1nl17tQZg25ang1CYvGpLP9/z5n4HrR9h7V2M61Hy+pwUQF+YfvS8MG4J2Wp/5oAEIFy7AF2ewkJtKbjWv9lep9EaASQGWBagFffNd71wT4FMNmPjZ3//6gWtmDnLTGfw/vGeIW0XKOHYwVnYgAAAAAElFTkSuQmCC"/>
                    </defs>
                    </svg>
                    
                <span class="card-time__text">${shiraz.time}</span>
            </div>
            <div class="card__location">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #02C39A;transform: ;msFilter:;"><path d="M12 22s8.029-5.56 8-12c0-4.411-3.589-8-8-8S4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22zM8 9h3V6h2v3h3v2h-3v3h-2v-3H8V9z"></path></svg>
        
                    
                <span class="card-location__text">${shiraz.loc}</span>
            </div>
            <div class="card__signin">
        <a class="card__link" href="./ticket.html?id=${shiraz.id}">ثبت نام</a>
                
                <div class="card__price-parent">
        
                    <span class="card__price">${shiraz.price}</span>
                    <span class="card__price-under">تومان</span>
                    
        
                </div>
            </div>
        
        </div>`)
        }
        console.log("shiraz:" , shiraz);
       })

    }



    else if(event.target.innerHTML === "تهران"){
      
        newestArrayTehran.forEach(tehran =>{
        if(tehran.price === "رایگان"){
            newestCards.insertAdjacentHTML("beforeend", ` <div class="card">
            <img class="card__img" src="${tehran.img}" alt="">
            <h2 class="card__title">${tehran.title}</h2>
            <p class="card__date">${tehran.date}</p>
            <div class="card__time">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <mask id="mask0_33_73" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="22">
                    <rect width="22" height="22" fill="url(#pattern0)"/>
                    </mask>
                    <g mask="url(#mask0_33_73)">
                    <rect x="-3" y="-6" width="45" height="47" fill="#02C39A"/>
                    </g>
                    <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_33_73" transform="scale(0.0333333)"/>
                    </pattern>
                    <image id="image0_33_73" width="30" height="30" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACB0lEQVR4nO2WyUocURSGaxNiIAF14cYsXQndjf/faNEufJSYOD2A4JSNryNxegjBkJhAMJC2+5xuHBau2nnhAJFblqGtvlV1W8tskgNnd8/97v/f6XjePx81ckjJNSEbSl4qsC3kTKWv72WaOWaMGSvkDyEvBDgUcqlKIrFQyCkBbpT8HU0BRtPASo7bahW4FvKdtagO+HFQBeZdj4KSi9Y5yCurcgXWk6B7vt+txeIHM06AspDnQQLlYGsGBt7v5nJdSXAhl2w2N2zQPd9/peRHBU5ilDTnsQILYU0LXIBDm0WXUWhlcPCtkt8cgNH8ulMo9EbhQp7brN62QA/iJq8WiyUhh2PhwH4LHPhus3o2Ym+i0ianEpXXR0Y6muDT9jsYXplgT1PsdASbnAvHjSe+BcHpdThIbYCP7097Yig55nKA2gA7PT5e7H1+AljJVRfF1WdQXHZRfGq7OgkLTVcMnLooPmtZMTn8N8AVx31zTjerydWswUqupIPND5S94tFUsLnsQh5lBiUb9UKhMxUcqAYWMlPcRhPhbZEvFNjIQO1nl17tQZg25ang1CYvGpLP9/z5n4HrR9h7V2M61Hy+pwUQF+YfvS8MG4J2Wp/5oAEIFy7AF2ewkJtKbjWv9lep9EaASQGWBagFffNd71wT4FMNmPjZ3//6gWtmDnLTGfw/vGeIW0XKOHYwVnYgAAAAAElFTkSuQmCC"/>
                    </defs>
                    </svg>
                    
                <span class="card-time__text">${tehran.time}</span>
            </div>
            <div class="card__location">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #02C39A;transform: ;msFilter:;"><path d="M12 22s8.029-5.56 8-12c0-4.411-3.589-8-8-8S4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22zM8 9h3V6h2v3h3v2h-3v3h-2v-3H8V9z"></path></svg>
        
                    
                <span class="card-location__text">${tehran.loc}</span>
            </div>
            <div class="card__signin">
        <a class="card__link" href="./ticket.html?id=${tehran.id}">ثبت نام</a>
                
                <div class="card__price-parent">
        
                    <span class="card__price">${tehran.price}</span>
                    
        
                </div>
            </div>
        
        </div>`)
    
        }else{
            newestCards.insertAdjacentHTML("beforeend", ` <div class="card">
            <img class="card__img" src="${tehran.img}" alt="">
            <h2 class="card__title">${tehran.title}</h2>
            <p class="card__date">${tehran.date}</p>
            <div class="card__time">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <mask id="mask0_33_73" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="22">
                    <rect width="22" height="22" fill="url(#pattern0)"/>
                    </mask>
                    <g mask="url(#mask0_33_73)">
                    <rect x="-3" y="-6" width="45" height="47" fill="#02C39A"/>
                    </g>
                    <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_33_73" transform="scale(0.0333333)"/>
                    </pattern>
                    <image id="image0_33_73" width="30" height="30" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACB0lEQVR4nO2WyUocURSGaxNiIAF14cYsXQndjf/faNEufJSYOD2A4JSNryNxegjBkJhAMJC2+5xuHBau2nnhAJFblqGtvlV1W8tskgNnd8/97v/f6XjePx81ckjJNSEbSl4qsC3kTKWv72WaOWaMGSvkDyEvBDgUcqlKIrFQyCkBbpT8HU0BRtPASo7bahW4FvKdtagO+HFQBeZdj4KSi9Y5yCurcgXWk6B7vt+txeIHM06AspDnQQLlYGsGBt7v5nJdSXAhl2w2N2zQPd9/peRHBU5ilDTnsQILYU0LXIBDm0WXUWhlcPCtkt8cgNH8ulMo9EbhQp7brN62QA/iJq8WiyUhh2PhwH4LHPhus3o2Ym+i0ianEpXXR0Y6muDT9jsYXplgT1PsdASbnAvHjSe+BcHpdThIbYCP7097Yig55nKA2gA7PT5e7H1+AljJVRfF1WdQXHZRfGq7OgkLTVcMnLooPmtZMTn8N8AVx31zTjerydWswUqupIPND5S94tFUsLnsQh5lBiUb9UKhMxUcqAYWMlPcRhPhbZEvFNjIQO1nl17tQZg25ang1CYvGpLP9/z5n4HrR9h7V2M61Hy+pwUQF+YfvS8MG4J2Wp/5oAEIFy7AF2ewkJtKbjWv9lep9EaASQGWBagFffNd71wT4FMNmPjZ3//6gWtmDnLTGfw/vGeIW0XKOHYwVnYgAAAAAElFTkSuQmCC"/>
                    </defs>
                    </svg>
                    
                <span class="card-time__text">${tehran.time}</span>
            </div>
            <div class="card__location">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #02C39A;transform: ;msFilter:;"><path d="M12 22s8.029-5.56 8-12c0-4.411-3.589-8-8-8S4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22zM8 9h3V6h2v3h3v2h-3v3h-2v-3H8V9z"></path></svg>
        
                    
                <span class="card-location__text">${tehran.loc}</span>
            </div>
            <div class="card__signin">
        <a class="card__link" href="./ticket.html?id=${tehran.id}">ثبت نام</a>
                
                <div class="card__price-parent">
        
                    <span class="card__price">${tehran.price}</span>
                    <span class="card__price-under">تومان</span>
                    
        
                </div>
            </div>
        
        </div>`)
        }
        
       })

    }
    else if(event.target.innerHTML === "بندرعباس"){
      
        newestArraybandar.forEach(bandar =>{
        if(bandar.price === "رایگان"){
            newestCards.insertAdjacentHTML("beforeend", ` <div class="card">
            <img class="card__img" src="${bandar.img}" alt="">
            <h2 class="card__title">${bandar.title}</h2>
            <p class="card__date">${bandar.date}</p>
            <div class="card__time">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <mask id="mask0_33_73" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="22">
                    <rect width="22" height="22" fill="url(#pattern0)"/>
                    </mask>
                    <g mask="url(#mask0_33_73)">
                    <rect x="-3" y="-6" width="45" height="47" fill="#02C39A"/>
                    </g>
                    <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_33_73" transform="scale(0.0333333)"/>
                    </pattern>
                    <image id="image0_33_73" width="30" height="30" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACB0lEQVR4nO2WyUocURSGaxNiIAF14cYsXQndjf/faNEufJSYOD2A4JSNryNxegjBkJhAMJC2+5xuHBau2nnhAJFblqGtvlV1W8tskgNnd8/97v/f6XjePx81ckjJNSEbSl4qsC3kTKWv72WaOWaMGSvkDyEvBDgUcqlKIrFQyCkBbpT8HU0BRtPASo7bahW4FvKdtagO+HFQBeZdj4KSi9Y5yCurcgXWk6B7vt+txeIHM06AspDnQQLlYGsGBt7v5nJdSXAhl2w2N2zQPd9/peRHBU5ilDTnsQILYU0LXIBDm0WXUWhlcPCtkt8cgNH8ulMo9EbhQp7brN62QA/iJq8WiyUhh2PhwH4LHPhus3o2Ym+i0ianEpXXR0Y6muDT9jsYXplgT1PsdASbnAvHjSe+BcHpdThIbYCP7097Yig55nKA2gA7PT5e7H1+AljJVRfF1WdQXHZRfGq7OgkLTVcMnLooPmtZMTn8N8AVx31zTjerydWswUqupIPND5S94tFUsLnsQh5lBiUb9UKhMxUcqAYWMlPcRhPhbZEvFNjIQO1nl17tQZg25ang1CYvGpLP9/z5n4HrR9h7V2M61Hy+pwUQF+YfvS8MG4J2Wp/5oAEIFy7AF2ewkJtKbjWv9lep9EaASQGWBagFffNd71wT4FMNmPjZ3//6gWtmDnLTGfw/vGeIW0XKOHYwVnYgAAAAAElFTkSuQmCC"/>
                    </defs>
                    </svg>
                    
                <span class="card-time__text">${bandar.time}</span>
            </div>
            <div class="card__location">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #02C39A;transform: ;msFilter:;"><path d="M12 22s8.029-5.56 8-12c0-4.411-3.589-8-8-8S4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22zM8 9h3V6h2v3h3v2h-3v3h-2v-3H8V9z"></path></svg>
        
                    
                <span class="card-location__text">${bandar.loc}</span>
            </div>
            <div class="card__signin">
        <a class="card__link" href="./ticket.html?id=${item.id}">ثبت نام</a>
                
                <div class="card__price-parent">
        
                    <span class="card__price">${bandar.price}</span>
                    
        
                </div>
            </div>
        
        </div>`)
    
        }else{
            newestCards.insertAdjacentHTML("beforeend", ` <div class="card">
            <img class="card__img" src="${bandar.img}" alt="">
            <h2 class="card__title">${bandar.title}</h2>
            <p class="card__date">${bandar.date}</p>
            <div class="card__time">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <mask id="mask0_33_73" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="22">
                    <rect width="22" height="22" fill="url(#pattern0)"/>
                    </mask>
                    <g mask="url(#mask0_33_73)">
                    <rect x="-3" y="-6" width="45" height="47" fill="#02C39A"/>
                    </g>
                    <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_33_73" transform="scale(0.0333333)"/>
                    </pattern>
                    <image id="image0_33_73" width="30" height="30" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACB0lEQVR4nO2WyUocURSGaxNiIAF14cYsXQndjf/faNEufJSYOD2A4JSNryNxegjBkJhAMJC2+5xuHBau2nnhAJFblqGtvlV1W8tskgNnd8/97v/f6XjePx81ckjJNSEbSl4qsC3kTKWv72WaOWaMGSvkDyEvBDgUcqlKIrFQyCkBbpT8HU0BRtPASo7bahW4FvKdtagO+HFQBeZdj4KSi9Y5yCurcgXWk6B7vt+txeIHM06AspDnQQLlYGsGBt7v5nJdSXAhl2w2N2zQPd9/peRHBU5ilDTnsQILYU0LXIBDm0WXUWhlcPCtkt8cgNH8ulMo9EbhQp7brN62QA/iJq8WiyUhh2PhwH4LHPhus3o2Ym+i0ianEpXXR0Y6muDT9jsYXplgT1PsdASbnAvHjSe+BcHpdThIbYCP7097Yig55nKA2gA7PT5e7H1+AljJVRfF1WdQXHZRfGq7OgkLTVcMnLooPmtZMTn8N8AVx31zTjerydWswUqupIPND5S94tFUsLnsQh5lBiUb9UKhMxUcqAYWMlPcRhPhbZEvFNjIQO1nl17tQZg25ang1CYvGpLP9/z5n4HrR9h7V2M61Hy+pwUQF+YfvS8MG4J2Wp/5oAEIFy7AF2ewkJtKbjWv9lep9EaASQGWBagFffNd71wT4FMNmPjZ3//6gWtmDnLTGfw/vGeIW0XKOHYwVnYgAAAAAElFTkSuQmCC"/>
                    </defs>
                    </svg>
                    
                <span class="card-time__text">${bandar.time}</span>
            </div>
            <div class="card__location">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #02C39A;transform: ;msFilter:;"><path d="M12 22s8.029-5.56 8-12c0-4.411-3.589-8-8-8S4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22zM8 9h3V6h2v3h3v2h-3v3h-2v-3H8V9z"></path></svg>
        
                    
                <span class="card-location__text">${bandar.loc}</span>
            </div>
            <div class="card__signin">
        <a class="card__link" href="./ticket.html?id=${bandar.id}">ثبت نام</a>
                
                <div class="card__price-parent">
        
                    <span class="card__price">${bandar.price}</span>
                    <span class="card__price-under">تومان</span>
                    
        
                </div>
            </div>
        
        </div>`)
        }
       
       })

    }
 

}





