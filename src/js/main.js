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
  document.body.classList.add('h-screen');
  document.body.classList.add('overflow-hidden');
  
});

closeModal.addEventListener("click", () => {
  loginModal.classList.add("hidden");
  document.body.classList.remove('h-screen');
  document.body.classList.remove('overflow-hidden');
});


// Application Modal

const applicationContainer = document.querySelector('.application-modal-container');
const applicationShow = document.querySelector('.application-show');
const applicationClose = document.querySelector('.application-close');

applicationShow.addEventListener('click', () => {
  applicationContainer.classList.remove('hidden');
  loginModal.classList.add('hidden');
  document.body.classList.add('h-screen');
  document.body.classList.add('overflow-hidden');
});

applicationClose.addEventListener('click', () => {
  applicationContainer.classList.add('hidden');
  document.body.classList.remove('h-screen');
  document.body.classList.remove('overflow-hidden');
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


