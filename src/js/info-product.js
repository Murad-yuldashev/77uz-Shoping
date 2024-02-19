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