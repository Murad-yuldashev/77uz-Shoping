(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();const p=[{id:1,name:"Холодильники"},{id:2,name:"Телевизоры"},{id:3,name:"Наушники и аксессуары"},{id:4,name:"Кухонная мебель"},{id:5,name:"Телефоны"},{id:6,name:"Бытовая техника"},{id:7,name:"Микроволновки"},{id:8,name:"Аккумуляторы"},{id:9,name:"Домашняя утварь"},{id:10,name:"Детские товары"},{id:11,name:"Наушники и аксессуары"},{id:12,name:"Кухонная мебель"},{id:13,name:"Украшения и бижутерия"},{id:14,name:"Бытовая техника"},{id:15,name:"Микроволновки"},{id:16,name:"Аккумуляторы"}];function C(e,o){e.addEventListener("focus",t=>{o.classList.remove("hidden"),document.body.classList.add("h-screen"),document.body.classList.add("overflow-hidden")})}function S(e,o){window.onclick=function(t){t.target==e&&(o.classList.add("hidden"),document.body.classList.remove("h-screen"),document.body.classList.remove("overflow-hidden"))}}function x(e,o,t){function c(n){if(o.innerHTML="",n.length===0)return e.innerHTML="No result";const s=document.createElement("ul");n.forEach(i=>{const l=document.createElement("li");l.className="flex items-center justify-between py-4",l.innerHTML=`<div class="flex items-center gap-x-2.5">
            <img src="./src/assets/images/Icon/star.svg" alt="star" />
            <span >${i.name}</span>
          </div>
          <img
            src="./src/assets/images/Icon/chevron-right-gray.svg"
            alt="chevron-right"
          />`,s.appendChild(l)}),o.appendChild(s)}t.addEventListener("input",function(){const n=p.filter(s=>t.value===""?s:s.name.toLowerCase().includes(t.value.toLowerCase()));c(n)}),c(p)}const I=[{id:1,icon:"/images/Icon/woman.svg",name:"Для женщин",announcementCount:4142,subcategoriesCount:12,subcategories:[{id:11,slug:"smartphones",name:"Смартфоны"},{id:12,slug:"accessories",name:"Аксессуары для смартфонов и телефонов"},{id:13,slug:"smart-watches",name:"Смарт-часы"}]},{id:2,icon:"/images/Icon/beauty.svg",name:"Красота",announcementCount:4142,subcategoriesCount:12},{id:3,icon:"fridge",icon:"/images/Icon/appliances.svg",name:"Бытовая техника",announcementCount:4142,subcategoriesCount:12,subcategories:[{id:31,slug:"smartphones",name:"Фитнес браслеты"},{id:32,slug:"accessories",name:"Ремешки для часов и смарт-часов"},{id:33,slug:"smart-watches",name:"Запчасти для смартфонов"}]},{id:4,icon:"/images/Icon/man.svg",name:"Для мужчин",announcementCount:4142,subcategoriesCount:12},{id:5,icon:"/images/Icon/health.svg",name:"Здоровье",announcementCount:684,subcategoriesCount:12},{id:6,icon:"/images/Icon/electronics.svg",name:"Электроника",announcementCount:4147,subcategoriesCount:12},{id:7,icon:"/images/Icon/electronics.svg",name:"Детские товары",announcementCount:635,subcategoriesCount:12},{id:8,icon:"/images/Icon/decoration.svg",name:"Украшения и бижутерия",announcementCount:4147,subcategoriesCount:12},{id:9,icon:"/images/Icon/stuff.svg",name:"Домашняя утварь",announcementCount:4147,subcategoriesCount:12},{id:10,icon:"/images/Icon/sneaker.svg",name:"Обувь",announcementCount:4147,subcategoriesCount:12},{id:11,icon:"/images/Icon/office.svg",name:"Канцелярия",announcementCount:4147,subcategoriesCount:12},{id:12,icon:"/images/Icon/sport.svg",name:"Спорт и отдых",announcementCount:4147,subcategoriesCount:12},{id:13,icon:"/images/Icon/car.svg",name:"Автотовары",announcementCount:4147,subcategoriesCount:12},{id:14,icon:"/images/Icon/car2.svg",name:"Новые легковые автомобили",announcementCount:4147,subcategoriesCount:12},{id:15,icon:"/images/Icon/moto.svg",name:"Мототранспорт",announcementCount:4147,subcategoriesCount:12},{id:16,icon:"/images/Icon/garden.svg",name:"Дача, сады и огороды",announcementCount:4147,subcategoriesCount:12},{id:17,icon:"/images/Icon/hygiene.svg",name:"Личная гигиена",announcementCount:4147,subcategoriesCount:12},{id:18,icon:"/images/Icon/accessory.svg",name:"Аксессуарлар",announcementCount:4147,subcategoriesCount:12},{id:19,icon:"/images/Icon/sneaker.svg",name:"Бытовая химия и личная гигиена",announcementCount:4147,subcategoriesCount:12},{id:20,icon:"/images/Icon/builder.svg",name:"Строительство и ремонт",announcementCount:4147,subcategoriesCount:12},{id:21,icon:"/images/Icon/bag.svg",name:"Сумки и чемоданы",announcementCount:4147,subcategoriesCount:12}],q=document.querySelector(".language-head"),f=document.querySelector(".language-dropdown"),E=document.querySelector(".selected-img"),k=document.querySelector(".selected-text");document.querySelector(".selected-text-short");const T=document.querySelectorAll(".language-box");f.classList.add("hidden");q.addEventListener("click",()=>{f.classList.toggle("hidden")});T.forEach(e=>{e.addEventListener("click",()=>{let o=e.querySelector(".change-language"),t=e.querySelector("img");k.innerHTML=o.innerHTML,E.src=t.src,console.log(t)})});const j=document.querySelector(".modal-show"),g=document.querySelector(".login-modal"),M=document.querySelector(".close-modal");j.addEventListener("click",()=>{g.classList.remove("hidden"),document.body.classList.add("h-screen"),document.body.classList.add("overflow-hidden")});M.addEventListener("click",()=>{g.classList.add("hidden"),document.body.classList.remove("h-screen"),document.body.classList.remove("overflow-hidden")});const y=document.querySelector(".application-modal-container"),$=document.querySelector(".application-show"),A=document.querySelector(".application-close");$.addEventListener("click",()=>{y.classList.remove("hidden"),g.classList.add("hidden"),document.body.classList.add("h-screen"),document.body.classList.add("overflow-hidden")});A.addEventListener("click",()=>{y.classList.add("hidden"),document.body.classList.remove("h-screen"),document.body.classList.remove("overflow-hidden")});const O=document.querySelector(".search-input"),L=document.querySelector(".modal-box"),P=document.querySelector(".modal");C(O,L);S(P,L);const _=document.querySelector(".search"),D=document.getElementById("search-container"),N=document.getElementById("search-results");x(D,N,_);const H=(e,o="block")=>{o&&e.classList.remove(o),e.classList.add("hidden")},B=(e,o="block")=>{e.classList.remove("hidden"),o&&e.classList.add(o)},U=e=>{var o;return(o=JSON.stringify(e))==null?void 0:o.replace(/"/g,"&quot;")},R=(e,o)=>`
    <div
      class="category transition-all duration-200 rounded-xl border border-grey-4 hover:border-blue flex items-center gap-3 shadow-category py-[22px] pr-3 bg-white cursor-pointer group mb-9"
      onclick="toggleDropdown(${U(e.subcategories)}, ${o})"
    >
      <div
        class="category__img border boder-gray-4 shadow-[0_4px_20px_0_rgba(0,0,0,0.08)] rounded-xl p-4 -ml-8 bg-white transition-all duration-200 group-hover:bg-blue group-hover:border-white/20"
      >
        <img src="${e.icon}" :alt="${e.name}" class="w-8 h-8 icon-blue group-hover:icon-white" />
      </div>
      <div class="flex-grow">
        <h3>${e.name}</h3>
        <p>${e.announcementCount} объявлений</p>
      </div>
      <img src="/images/Icon/chevron-right.svg" "checvron-righ" class="category__chevron transition-[transform] duration-200" />
    </div>
  `,V=()=>{const e=document.querySelector("section.categories");I.forEach((o,t)=>{e.innerHTML+=R(o,t)})};V();const G=e=>`
    <a href="#" class="flex items-center justify-between gap-3 p-3">
      <h4>${e.name}</h4>
      <img src="/images/Icon/chevron-right.svg" alt="chevron-right" />
    </a>
  `;let w=null;const J=(e,o)=>{console.log(Math.floor(e/3)+2);const t=Math.floor(e/3)+2;o.style.gridRow=t},z=(e,o)=>{o.classList.contains("hidden")?B(o,"grid"):w===e&&H(o,"grid")},F=(e,o)=>{o.innerHTML=e?e.map(G).join(""):"Empty"},K=e=>{const o=document.querySelectorAll("section.categories .category");o.forEach(t=>t.classList.remove("active")),o[e].classList.toggle("active")};window.toggleDropdown=(e,o)=>{const t=document.querySelector(".subcategories-dropdown");J(o,t),z(o,t),K(o),F(e,t),w=o};const W=[{id:1,img:"/public/images/Img/card1.png",location:"г. Ташкент",title:"Кепки Corneliani Diamond for him edition.",date:"Вчера, 19:20",phone:"+998 71 200 70 07",price:"2 599 000"},{id:2,img:"/public/images/Img/card2.jpg",location:"г. Самарканд",title:"Chevrolet Onix 1.2 Turbo в наличии",date:"Вчера, 19:20",phone:"+998 71 200 70 77",price:"204 000 000"},{id:3,img:"/public/images/Img/card3.jpg",location:"г. Ташкент",title:"7Saber Trucker Cap",date:"Вчера, 19:20",phone:"+998 71 200 70 07",price:"280 000"},{id:4,img:"/public/images/Img/card4.jpg",location:"г. Самарканд",title:"Оригинальные кроссовки Nike Air Max Plus",date:"Вчера, 19:20",phone:"+998 71 200 70 07",price:"4 820 000"},{id:5,img:"/public/images/Img/card5.jpg",location:"г. Ташкент",title:"Оригинальные кроссовки Nike Air Max 97",date:"Вчера, 19:20",phone:"+998 71 200 70 07",price:"4 820 000"},{id:6,img:"/public/images/Img/card6.jpg",location:"г. Самарканд",title:"Apple Watch Series 8 - USA Non active",date:"Вчера, 19:20",phone:"+998 71 200 70 77",price:"4 500 000"},{id:7,img:"/public/images/Img/card7.jpg",location:"г. Ташкент",title:"Лучший кроссовер Geely Monjaro Limited Edition",date:"Вчера, 19:20",phone:"+998 71 200 70 07",price:"320 000 000"},{id:8,img:"/public/images/Img/card8.jpg",location:"г. Самарканд",title:"Стайлер для волос Dyson airwrap complete long",date:"Вчера, 19:20",phone:"+998 71 200 70 07",price:"500"},{id:9,img:"/public/images/Img/card1.png",location:"г. Ташкент",title:"Кепки Corneliani Diamond for him edition.",date:"Вчера, 19:20",phone:"+998 71 200 70 07",price:"2 599 000"},{id:10,img:"/public/images/Img/card2.jpg",location:"г. Самарканд",title:"Chevrolet Onix 1.2 Turbo в наличии",date:"Вчера, 19:20",phone:"+998 71 200 70 77",price:"204 000 000"},{id:11,img:"/public/images/Img/card3.jpg",location:"г. Ташкент",title:"7Saber Trucker Cap",date:"Вчера, 19:20",phone:"+998 71 200 70 07",price:"280 000"},{id:12,img:"/public/images/Img/card4.jpg",location:"г. Самарканд",title:"Оригинальные кроссовки Nike Air Max Plus",date:"Вчера, 19:20",phone:"+998 71 200 70 07",price:"4 820 000"}],Z=document.querySelector(".ads-container");W.forEach(e=>{let o=` <article
  class="hover:text-blue-500 cursor-pointer rounded-xl flex flex-col items-center bg-white">
  <a class="w-full" href="./src/pages/info-product.html">
  <div class="w-full relative">
    <img
      class="absolute top-3 left-3 sm:w-10 h-auto w-6"
      src="/public/images/Icon/heart2.svg"
      alt="icon"
    />
    <img
      class="w-full rounded-t-md"
      src=${e.img}
      alt="card"
    />
  </div>
  <div class="md:p-5 p-2">
    <p
      class="sm:text-sm text-[10px] text-gray-600 py-1 px-2 bg-gray-200 rounded-md w-[107px]"
    >
      ${e.location}
    </p>
    <h3 class="font-semibold sm:text-lg text-sm sm:mt-4 mt-2">
      ${e.title}
    </h3>
    <p class="sm:text-sm text-[10px] text-gray-600 py-2">
      ${e.date}
    </p>
    <p class="text-gray-600 sm:text-base text-xs font-semibold">
      ${e.phone}
    </p>
    <div class="flex flex-grow h-full"></div>
    <div class="flex items-center gap-2">
      <p class="lg:text-2xl md:text-xl text-base text-black font-bold">
        ${e.price}
      </p>
      <span class="text-blue-500 md:text-base text-sm font-medium"
        >UZS</span
      >
    </div>
  </div>
</a>
</article>`;Z.insertAdjacentHTML("beforeend",o)});const Q="https://77-dev.uicgroup.tech/api/v1",h=localStorage.getItem("access"),u=(e,o,t,c,n=!1)=>{const s={"Content-Type":"application/json"};return h&&n&&(s.Authorization=`Bearer ${h}`),new Promise((i,l)=>{fetch(Q+o+new URLSearchParams(c),{method:e,headers:s,body:JSON.stringify(t)}).then(r=>r.json()).then(r=>{i(r)}).catch(r=>{console.log("Error: ",r),l(r)})})},X={get(e,o){return u("GET",e,{},o)},post(e,o,t){return u("POST",e,o,t)},put(e,o,t){return u("PUT",e,o,t)},patch(e,o,t){return u("PATCH",e,o,t)}};function Y(e,o){return e.length>=5&&o.length>=8}const ee=localStorage.getItem("access"),v=document.querySelector(".modal-show"),b=document.querySelector(".modal-avatar-show");ee?(b.classList.remove("hidden"),v.classList.add("hidden")):(b.classList.add("hidden"),v.classList.remove("hidden"));const d=document.querySelector(".login"),a=document.querySelector(".password"),oe=document.querySelector(".password-show");document.querySelector(".handle-click");const te=document.querySelector(".form-user");te.addEventListener("submit",ne);let m=!1;oe.addEventListener("click",()=>{m=!m,a.type=m?"text":"password"});function ne(e){if(e.preventDefault(),Y(d.value,a.value)){let o={phone_number:d.value,password:a.value};X.post("/accounts/login/",o).then(t=>{localStorage.setItem("refresh",t.refresh_token),localStorage.setItem("access",t.access_token),console.log(t),window.location="/"}).catch(t=>console.log(t)),d.value="+998",a.value=""}else d.classList.remove("focus:border-blue-mainBlue"),d.classList.add("border"),d.classList.add("border-red-red1"),a.classList.remove("focus:border-blue-mainBlue"),a.classList.add("border"),a.classList.add("border-red-red1")}
