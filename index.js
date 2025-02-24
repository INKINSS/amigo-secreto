const input = document.getElementById("input");
const list = document.getElementById("list");
const button = document.getElementById("button");

const stateButton = () => {
  if (input.value.trim() === "") {
    button.classList.add("disabled");
    button.disabled = true; // Desactiva el botón
  } else {
    button.classList.remove("disabled");
    button.disabled = false; // Activa el botón
  }
};

stateButton()

input.addEventListener("input", stateButton);

const addFriendToList = () => {
  const text = input.value;
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = text;
  list.appendChild(li);
  input.value = "";
  stateButton()
};

const handleClick = () => {
  addFriendToList();
};
