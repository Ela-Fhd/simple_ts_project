// @ts-check
import { v4 as uuidv4 } from "uuid";
import "./index.css";

type Item = {
  id: string;
  username: string;
  email: string;
};

let form = document.querySelector<HTMLFormElement>("#submit-form");
let username = document.querySelector<HTMLInputElement>("#username");
let email = document.querySelector<HTMLInputElement>("#email");
let userList = document.querySelector("#user-list");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!username?.value || !email?.value) {
    handleError();
    return false;
  }

  let userItem: Item = {
    id: uuidv4(),
    username: username.value,
    email: email.value,
  };
  addUser(userItem);
  username.value = "";
  email.value = "";
});

const addUser = (item: Item) => {
  let container = document.createElement("div");
  let usernameElement = document.createElement("p");
  let emailElement = document.createElement("p");
  container.classList.add("bg-slate-500", "rounded-md", "p-2");
  usernameElement.append("username : ", item.username);
  emailElement.append("email : ", item.email);
  container.append(usernameElement, emailElement);
  userList?.append(container);
};

const handleError = () => {
  let alert = document.createElement("div");
  alert.classList.add(
    "block",
    "w-full",
    "p-2",
    "bg-red-600",
    "text-white",
    "rounded-md",
    "text-center"
  );
  alert.innerHTML = "لطفا همه ی فیلد هارا پر کنید!";
  form?.append(alert);
  setTimeout(() => {
    alert.remove();
  }, 3000);
};
