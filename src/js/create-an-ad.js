document.querySelector("select").addEventListener("change", function () {
  let selectedOption = this.options[this.selectedIndex].text;
  console.log("Selected Option:", selectedOption);
});
