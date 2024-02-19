import API from "./api";
import { isValid } from "./utilits";

const login = document.querySelector(".login");
const password = document.querySelector(".password");
const handleClick = document.querySelector(".handle-click");
const form = document.querySelector(".form-user");

form.addEventListener("submit", getValueUser);

// let data = {
//   phone_number: "+998911111111",
//   password: "parol123",
// };

// API.post("/accounts/login", data)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

function getValueUser(e) {
  e.preventDefault();

  let data = {
    phone_number: "",
    password: "",
  };

  API.post("/accounts/login/", data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  if (isValid(login.value, password.value)) {
    let data = {
      phone_number: login.value,
      password: password.value,
    };

    API.post("/accounts/login/", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    login.value = "";
    password.value = "";
  } else {
    login.classList.remove("focus:border-blue-mainBlue");
    login.classList.add("border");
    login.classList.add("border-red-red1");

    password.classList.remove("focus:border-blue-mainBlue");
    password.classList.add("border");
    password.classList.add("border-red-red1");
  }
}
