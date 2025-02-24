const input = document.getElementById("input");
const list = document.getElementById("list");
const button = document.getElementById("button");

const addFriendToList = () => {
  const text = input.value;
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = text;
  list.appendChild(li);
}

const handleClick = () => {
  addFriendToList();
}
