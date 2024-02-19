(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const u=[{id:1,name:"Холодильники"},{id:2,name:"Телевизоры"},{id:3,name:"Наушники и аксессуары"},{id:4,name:"Кухонная мебель"},{id:5,name:"Телефоны"},{id:6,name:"Бытовая техника"},{id:7,name:"Микроволновки"},{id:8,name:"Аккумуляторы"},{id:9,name:"Домашняя утварь"},{id:10,name:"Детские товары"},{id:11,name:"Наушники и аксессуары"},{id:12,name:"Кухонная мебель"},{id:13,name:"Украшения и бижутерия"},{id:14,name:"Бытовая техника"},{id:15,name:"Микроволновки"},{id:16,name:"Аккумуляторы"}];function f(e,n){e.addEventListener("focus",t=>{n.classList.remove("hidden"),document.body.classList.add("h-screen"),document.body.classList.add("overflow-hidden")})}function y(e,n){window.onclick=function(t){t.target==e&&(n.classList.add("hidden"),document.body.classList.remove("h-screen"),document.body.classList.remove("overflow-hidden"))}}function C(e,n,t){function c(o){if(n.innerHTML="",o.length===0)return e.innerHTML="No result";const s=document.createElement("ul");o.forEach(a=>{const i=document.createElement("li");i.className="flex items-center justify-between py-4",i.innerHTML=`<div class="flex items-center gap-x-2.5">
            <img src="./src/assets/images/Icon/star.svg" alt="star" />
            <span >${a.name}</span>
          </div>
          <img
            src="./src/assets/images/Icon/chevron-right-gray.svg"
            alt="chevron-right"
          />`,s.appendChild(i)}),n.appendChild(s)}t.addEventListener("input",function(){const o=u.filter(s=>t.value===""?s:s.name.toLowerCase().includes(t.value.toLowerCase()));c(o)}),c(u)}const x=[{id:1,icon:"/images/Icon/woman.svg",name:"Для женщин",announcementCount:4142,subcategoriesCount:12,subcategories:[{id:11,slug:"smartphones",name:"Смартфоны"},{id:12,slug:"accessories",name:"Аксессуары для смартфонов и телефонов"},{id:13,slug:"smart-watches",name:"Смарт-часы"}]},{id:2,icon:"/images/Icon/beauty.svg",name:"Красота",announcementCount:4142,subcategoriesCount:12},{id:3,icon:"fridge",icon:"/images/Icon/appliances.svg",name:"Бытовая техника",announcementCount:4142,subcategoriesCount:12,subcategories:[{id:31,slug:"smartphones",name:"Фитнес браслеты"},{id:32,slug:"accessories",name:"Ремешки для часов и смарт-часов"},{id:33,slug:"smart-watches",name:"Запчасти для смартфонов"}]},{id:4,icon:"/images/Icon/man.svg",name:"Для мужчин",announcementCount:4142,subcategoriesCount:12},{id:5,icon:"/images/Icon/health.svg",name:"Здоровье",announcementCount:684,subcategoriesCount:12},{id:6,icon:"/images/Icon/electronics.svg",name:"Электроника",announcementCount:4147,subcategoriesCount:12},{id:7,icon:"/images/Icon/electronics.svg",name:"Детские товары",announcementCount:635,subcategoriesCount:12},{id:8,icon:"/images/Icon/decoration.svg",name:"Украшения и бижутерия",announcementCount:4147,subcategoriesCount:12},{id:9,icon:"/images/Icon/stuff.svg",name:"Домашняя утварь",announcementCount:4147,subcategoriesCount:12},{id:10,icon:"/images/Icon/sneaker.svg",name:"Обувь",announcementCount:4147,subcategoriesCount:12},{id:11,icon:"/images/Icon/office.svg",name:"Канцелярия",announcementCount:4147,subcategoriesCount:12},{id:12,icon:"/images/Icon/sport.svg",name:"Спорт и отдых",announcementCount:4147,subcategoriesCount:12},{id:13,icon:"/images/Icon/car.svg",name:"Автотовары",announcementCount:4147,subcategoriesCount:12},{id:14,icon:"/images/Icon/car2.svg",name:"Новые легковые автомобили",announcementCount:4147,subcategoriesCount:12},{id:15,icon:"/images/Icon/moto.svg",name:"Мототранспорт",announcementCount:4147,subcategoriesCount:12},{id:16,icon:"/images/Icon/garden.svg",name:"Дача, сады и огороды",announcementCount:4147,subcategoriesCount:12},{id:17,icon:"/images/Icon/hygiene.svg",name:"Личная гигиена",announcementCount:4147,subcategoriesCount:12},{id:18,icon:"/images/Icon/accessory.svg",name:"Аксессуарлар",announcementCount:4147,subcategoriesCount:12},{id:19,icon:"/images/Icon/sneaker.svg",name:"Бытовая химия и личная гигиена",announcementCount:4147,subcategoriesCount:12},{id:20,icon:"/images/Icon/builder.svg",name:"Строительство и ремонт",announcementCount:4147,subcategoriesCount:12},{id:21,icon:"/images/Icon/bag.svg",name:"Сумки и чемоданы",announcementCount:4147,subcategoriesCount:12}],L=[{id:1,img:"./public/images/Img/card1.png",location:"г. Ташкент",title:"Кепки Corneliani Diamond for him edition.",date:"Вчера, 19:20",phone:"+998 71 200 70 07",price:"2 599 000"},{id:2,img:"./public/images/Img/card2.jpg",location:"г. Самарканд",title:"Chevrolet Onix 1.2 Turbo в наличии",date:"Вчера, 19:20",phone:"+998 71 200 70 77",price:"204 000 000"},{id:3,img:"./public/images/Img/card3.jpg",location:"г. Ташкент",title:"7Saber Trucker Cap",date:"Вчера, 19:20",phone:"+998 71 200 70 07",price:"280 000"},{id:4,img:"./public/images/Img/card4.jpg",location:"г. Самарканд",title:"Оригинальные кроссовки Nike Air Max Plus",date:"Вчера, 19:20",phone:"+998 71 200 70 07",price:"4 820 000"},{id:5,img:"./public/images/Img/card5.jpg",location:"г. Ташкент",title:"Оригинальные кроссовки Nike Air Max 97",date:"Вчера, 19:20",phone:"+998 71 200 70 07",price:"4 820 000"},{id:6,img:"./public/images/Img/card6.jpg",location:"г. Самарканд",title:"Apple Watch Series 8 - USA Non active",date:"Вчера, 19:20",phone:"+998 71 200 70 77",price:"4 500 000"},{id:7,img:"./public/images/Img/card7.jpg",location:"г. Ташкент",title:"Лучший кроссовер Geely Monjaro Limited Edition",date:"Вчера, 19:20",phone:"+998 71 200 70 07",price:"320 000 000"},{id:8,img:"./public/images/Img/card8.jpg",location:"г. Самарканд",title:"Стайлер для волос Dyson airwrap complete long",date:"Вчера, 19:20",phone:"+998 71 200 70 07",price:"500"},{id:9,img:"./public/images/Img/card1.png",location:"г. Ташкент",title:"Кепки Corneliani Diamond for him edition.",date:"Вчера, 19:20",phone:"+998 71 200 70 07",price:"2 599 000"},{id:10,img:"./public/images/Img/card2.jpg",location:"г. Самарканд",title:"Chevrolet Onix 1.2 Turbo в наличии",date:"Вчера, 19:20",phone:"+998 71 200 70 77",price:"204 000 000"},{id:11,img:"./public/images/Img/card3.jpg",location:"г. Ташкент",title:"7Saber Trucker Cap",date:"Вчера, 19:20",phone:"+998 71 200 70 07",price:"280 000"},{id:12,img:"./public/images/Img/card4.jpg",location:"г. Самарканд",title:"Оригинальные кроссовки Nike Air Max Plus",date:"Вчера, 19:20",phone:"+998 71 200 70 07",price:"4 820 000"}],w=document.querySelector(".language-head"),p=document.querySelector(".language-dropdown"),I=document.querySelector(".selected-img"),S=document.querySelector(".selected-text");document.querySelector(".selected-text-short");const q=document.querySelectorAll(".language-box");p.classList.add("hidden");w.addEventListener("click",()=>{p.classList.toggle("hidden")});q.forEach(e=>{e.addEventListener("click",()=>{let n=e.querySelector(".change-language"),t=e.querySelector("img");S.innerHTML=n.innerHTML,I.src=t.src,console.log(t)})});const E=document.querySelector(".modal-show"),h=document.querySelector(".login-modal"),T=document.querySelector(".close-modal");E.addEventListener("click",()=>{h.classList.remove("hidden")});T.addEventListener("click",()=>{h.classList.add("hidden")});const j=document.querySelector(".search-input"),b=document.querySelector(".modal-box"),M=document.querySelector(".modal");f(j,b);y(M,b);const k=document.querySelector(".search"),A=document.getElementById("search-container"),$=document.getElementById("search-results");C(A,$,k);const O=(e,n="block")=>{n&&e.classList.remove(n),e.classList.add("hidden")},P=(e,n="block")=>{e.classList.remove("hidden"),n&&e.classList.add(n)},D=e=>{var n;return(n=JSON.stringify(e))==null?void 0:n.replace(/"/g,"&quot;")},N=(e,n)=>`
    <div
      class="category transition-all duration-200 rounded-xl border border-grey-4 hover:border-blue flex items-center gap-3 shadow-category py-[22px] pr-3 bg-white cursor-pointer group mb-9"
      onclick="toggleDropdown(${D(e.subcategories)}, ${n})"
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
  `,_=()=>{const e=document.querySelector("section.categories");x.forEach((n,t)=>{e.innerHTML+=N(n,t)})};_();const H=e=>`
    <a href="#" class="flex items-center justify-between gap-3 p-3">
      <h4>${e.name}</h4>
      <img src="/images/Icon/chevron-right.svg" alt="chevron-right" />
    </a>
  `;let v=null;const B=(e,n)=>{console.log(Math.floor(e/3)+2);const t=Math.floor(e/3)+2;n.style.gridRow=t},U=(e,n)=>{n.classList.contains("hidden")?P(n,"grid"):v===e&&O(n,"grid")},R=(e,n)=>{n.innerHTML=e?e.map(H).join(""):"Empty"},V=e=>{const n=document.querySelectorAll("section.categories .category");n.forEach(t=>t.classList.remove("active")),n[e].classList.toggle("active")};window.toggleDropdown=(e,n)=>{const t=document.querySelector(".subcategories-dropdown");B(n,t),U(n,t),V(n),R(e,t),v=n};const G=document.querySelector(".ads-container");L.forEach(e=>{let n=` <article
  class="hover:text-blue-500 cursor-pointer rounded-xl flex flex-col items-center bg-white">
  <a class="w-full" href="./src/pages/info-product.html">
  <div class="w-full relative">
    <img
      class="absolute top-3 left-3 sm:w-10 h-auto w-6"
      src="./src/assets/images/Icon/heart2.svg"
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
    <div class="!h-full !self-stretch"></div>
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
</article>`;G.insertAdjacentHTML("beforeend",n)});const J="https://77-dev.uicgroup.tech/api/v1",m=localStorage.getItem("access"),d=(e,n,t,c)=>{const o={"Content-Type":"application/json"};return m&&(o.Authorization=`Bearer ${m}`),new Promise((s,a)=>{fetch(J+n,{method:e,headers:o,body:JSON.stringify(t),params:c}).then(i=>i.json()).then(i=>{s(i)}).catch(i=>{console.log("Error: ",i),a(i)})})},g={get(e,n){return d("GET",e,n)},post(e,n,t){return d("POST",e,n,t)},put(e,n,t){return d("PUT",e,n,t)},patch(e,n,t){return d("PATCH",e,n,t)}};function z(e,n){return e.length===12&&n.length>=8}const r=document.querySelector(".login"),l=document.querySelector(".password");document.querySelector(".handle-click");const F=document.querySelector(".form-user");F.addEventListener("submit",K);function K(e){e.preventDefault();let n={phone_number:"",password:""};if(g.post("/accounts/login/",n).then(t=>console.log(t)).catch(t=>console.log(t)),z(r.value,l.value)){let t={phone_number:r.value,password:l.value};g.post("/accounts/login/",t).then(c=>console.log(c)).catch(c=>console.log(c)),r.value="",l.value=""}else r.classList.remove("focus:border-blue-mainBlue"),r.classList.add("border"),r.classList.add("border-red-red1"),l.classList.remove("focus:border-blue-mainBlue"),l.classList.add("border"),l.classList.add("border-red-red1")}
