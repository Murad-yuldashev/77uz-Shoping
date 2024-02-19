const languageHead = document.querySelector(".language-head");
const languageDropdown = document.querySelector(".language-dropdown");
const selectedImg = document.querySelector(".selected-img");
const selectedText = document.querySelector(".selected-text");
const selectedTextShort = document.querySelector(".selected-text-short");
const languageBox = document.querySelectorAll(".language-box");

languageDropdown.classList.add("hidden");

// Hidden and Block Language Dropdown
languageHead.addEventListener("click", () => {
  languageDropdown.classList.toggle("hidden");
});

languageBox.forEach((item) => {
  item.addEventListener("click", () => {
    let clickedLanguage = item.querySelector(".change-language");
    let clickImg = item.querySelector("img");

    selectedText.innerHTML = clickedLanguage.innerHTML;
    selectedImg.src = clickImg.src;
    console.log(clickImg);
  });
});

// Login Modal

const modalShow = document.querySelector(".modal-show");
const loginModal = document.querySelector(".login-modal");
const closeModal = document.querySelector(".close-modal");

modalShow.addEventListener("click", () => {
  loginModal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  loginModal.classList.add("hidden");
});

//  Form Modal

import { openSearchModal } from "../modules/form-modal";
import { closeSearchModal } from "../modules/form-modal";

const searchInput = document.querySelector(".search-input");
const modalBox = document.querySelector(".modal-box");
const modal = document.querySelector(".modal");

openSearchModal(searchInput, modalBox);
closeSearchModal(modal, modalBox);

//   Search

import { addListOutput } from "../modules/form-modal";

const search = document.querySelector(".search");
const searchContainer = document.getElementById("search-container");
const searchResults = document.getElementById("search-results");

addListOutput(searchContainer, searchResults, search);

// function displaySearchList(results) {
//   searchResults.innerHTML = "";
//   if (results.length === 0) return (searchContainer.innerHTML = "No result");

//   const ul = document.createElement("ul");

//   results.forEach((item) => {
//     const li = document.createElement("li");
//     li.className = "flex items-center justify-between py-4";

//     li.innerHTML = `<div class="flex items-center gap-x-2.5">
//       <img src="./src/assets/images/Icon/star.svg" alt="star" />
//       <span >${item.name}</span>
//     </div>
//     <img
//       src="./src/assets/images/Icon/chevron-right-gray.svg"
//       alt="chevron-right"
//     />`;

//     ul.appendChild(li);
//   });
//   searchResults.appendChild(ul);
// }

// search.addEventListener("input", function () {
//   const results = searchData.filter((item) =>
//     search.value === ""
//       ? item
//       : item.name.toLowerCase().includes(search.value.toLowerCase())
//   );

//   displaySearchList(results);
// });

// displaySearchList(searchData);

// Categories

import { categories } from "../data/category";

const hideEl = (el, display = "block") => {
  if (display) {
    el.classList.remove(display);
  }

  el.classList.add("hidden");
};

const showEl = (el, display = "block") => {
  el.classList.remove("hidden");

  if (display) {
    el.classList.add(display);
  }
};

const stringifyObj = (obj) => {
  return JSON.stringify(obj)?.replace(/"/g, "&quot;");
};

const getCateogryTemplate = (category, idx) => {
  // console.log(category);
  return `
    <div
      class="category transition-all duration-200 rounded-xl border border-grey-4 hover:border-blue flex items-center gap-3 shadow-category py-[22px] pr-3 bg-white cursor-pointer group mb-9"
      onclick="toggleDropdown(${stringifyObj(category.subcategories)}, ${idx})"
    >
      <div
        class="category__img border boder-gray-4 shadow-[0_4px_20px_0_rgba(0,0,0,0.08)] rounded-xl p-4 -ml-8 bg-white transition-all duration-200 group-hover:bg-blue group-hover:border-white/20"
      >
        <img src="${category.icon}" :alt="${
    category.name
  }" class="w-8 h-8 icon-blue group-hover:icon-white" />
      </div>
      <div class="flex-grow">
        <h3>${category.name}</h3>
        <p>${category.announcementCount} объявлений</p>
      </div>
      <img src="/images/Icon/chevron-right.svg" "checvron-righ" class="category__chevron transition-[transform] duration-200" />
    </div>
  `;
};

const renderCatetories = () => {
  const categoriesSection = document.querySelector("section.categories");

  categories.forEach((category, idx) => {
    categoriesSection.innerHTML += getCateogryTemplate(category, idx);
  });
};

renderCatetories();

const getSubcategoryTemplate = (subcategory) => {
  return `
    <a href="#" class="flex items-center justify-between gap-3 p-3">
      <h4>${subcategory.name}</h4>
      <img src="/images/Icon/chevron-right.svg" alt="chevron-right" />
    </a>
  `;
};

let activeIdx = null;

const adjustDropdownPosition = (categoryIdx, dropdownContainer) => {
  console.log(Math.floor(categoryIdx / 3) + 2);

  const activeRow = Math.floor(categoryIdx / 3) + 2;
  dropdownContainer.style.gridRow = activeRow;
};

const toggleDropdownVisibility = (categoryIdx, dropdownContainer) => {
  if (dropdownContainer.classList.contains("hidden")) {
    showEl(dropdownContainer, "grid");
  } else if (activeIdx === categoryIdx) {
    hideEl(dropdownContainer, "grid");
  }
};

const renderSubcategories = (subcategories, dropdownContainer) => {
  dropdownContainer.innerHTML = subcategories
    ? subcategories.map(getSubcategoryTemplate).join("")
    : "Empty";
};

const toggleCategoryActive = (categoryIdx) => {
  const categories = document.querySelectorAll("section.categories .category");

  categories.forEach((c) => c.classList.remove("active"));

  categories[categoryIdx].classList.toggle("active");
};

window.toggleDropdown = (subcategories, categoryIdx) => {
  // console.log(categoryIdx, 'main');
  const dropdownContainer = document.querySelector(".subcategories-dropdown");

  adjustDropdownPosition(categoryIdx, dropdownContainer);

  toggleDropdownVisibility(categoryIdx, dropdownContainer);

  toggleCategoryActive(categoryIdx);

  renderSubcategories(subcategories, dropdownContainer);

  activeIdx = categoryIdx;
};

// Ads

import { adsData } from "../data/ads.js";
const adsContainer = document.querySelector(".ads-container");

adsData.forEach((item) => {
  let outputAds = ` <article
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
      src=${item.img}
      alt="card"
    />
  </div>
  <div class="md:p-5 p-2">
    <p
      class="sm:text-sm text-[10px] text-gray-600 py-1 px-2 bg-gray-200 rounded-md w-[107px]"
    >
      ${item.location}
    </p>
    <h3 class="font-semibold sm:text-lg text-sm sm:mt-4 mt-2">
      ${item.title}
    </h3>
    <p class="sm:text-sm text-[10px] text-gray-600 py-2">
      ${item.date}
    </p>
    <p class="text-gray-600 sm:text-base text-xs font-semibold">
      ${item.phone}
    </p>
    <div class="!h-full !self-stretch"></div>
    <div class="flex items-center gap-2">
      <p class="lg:text-2xl md:text-xl text-base text-black font-bold">
        ${item.price}
      </p>
      <span class="text-blue-500 md:text-base text-sm font-medium"
        >UZS</span
      >
    </div>
  </div>
</a>
</article>`;

  adsContainer.insertAdjacentHTML('beforeend', outputAds)
  // console.log(adsContainer.insertAdjacentElement);
});
