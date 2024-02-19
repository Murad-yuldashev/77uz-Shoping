import { searchData } from "../data/search";

// Form Modal

export function openSearchModal(searchInput, modalBox) {
  searchInput.addEventListener("focus", (e) => {
    modalBox.classList.remove("hidden");
    document.body.classList.add("h-screen");
    document.body.classList.add("overflow-hidden");
  });
}

export function closeSearchModal(modal, modalBox) {
  window.onclick = function (e) {
    if (e.target == modal) {
      modalBox.classList.add("hidden");
      document.body.classList.remove("h-screen");
      document.body.classList.remove("overflow-hidden");
    }
  };
}

//  Search Modal

export function addListOutput(searchContainer, searchResults, search) {
  function displaySearchList(results) {
    searchResults.innerHTML = "";
    if (results.length === 0) return (searchContainer.innerHTML = "No result");

    const ul = document.createElement("ul");

    results.forEach((item) => {
      const li = document.createElement("li");
      li.className = "flex items-center justify-between py-4";

      li.innerHTML = `<div class="flex items-center gap-x-2.5">
            <img src="./src/assets/images/Icon/star.svg" alt="star" />
            <span >${item.name}</span>
          </div>
          <img
            src="./src/assets/images/Icon/chevron-right-gray.svg"
            alt="chevron-right"
          />`;

      ul.appendChild(li);
    });
    searchResults.appendChild(ul);
  }

  search.addEventListener("input", function () {
    const results = searchData.filter((item) =>
      search.value === ""
        ? item
        : item.name.toLowerCase().includes(search.value.toLowerCase())
    );

    displaySearchList(results);
  });

  displaySearchList(searchData);
}
