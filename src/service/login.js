import axios from "axios";
import API from "./api";
import { isValid } from "./utilits";


const token = localStorage.getItem('access');
const modalShow = document.querySelector('.modal-show');
const modalAvatarShow = document.querySelector('.modal-avatar-show');

if(token) {
  modalAvatarShow.classList.remove('hidden');
  modalShow.classList.add('hidden');
} else {
  modalAvatarShow.classList.add('hidden');
  modalShow.classList.remove('hidden');
}

const login = document.querySelector(".login");
const password = document.querySelector(".password");
const passwordShow = document.querySelector(".password-show");
const handleClick = document.querySelector(".handle-click");
const form = document.querySelector(".form-user");

form.addEventListener("submit", getValueUser);

let passShow = false;
passwordShow.addEventListener("click", () => {
  passShow = !passShow;
  password.type = passShow ? "text" : "password";
});
// let data = {
//   phone_number: "  +998911111111",
//   password: "parol123"
// }

// API.post("/accounts/login/", data)
//   .then((res) => console.log("DATA", res))
//   .catch((err) => console.log(err));

function getValueUser(e) {
  e.preventDefault();

  if (isValid(login.value, password.value)) {
    let data = {
      phone_number: login.value,
      password: password.value,
    };
    API.post("/accounts/login/", data)
      .then((res) => {
        localStorage.setItem("refresh", res.refresh_token);
        localStorage.setItem("access", res.access_token);
        console.log(res);
        window.location = "/"
      })
      .catch((err) => console.log(err));

    login.value = "+998";
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
