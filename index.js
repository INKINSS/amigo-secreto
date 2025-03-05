const input = document.getElementById("input");
const list = document.getElementById("list");
const addButton = document.getElementById("addButton");
const raffle = document.getElementById("raffle");
const result = document.getElementById("result");
const hidden = document.getElementById("hidden");

hidden.classList.add("hidden");

const validateCharacter = () => {
  const inputValue = input.value;
  const invalidCharacter = [1,2,3,4,5,6,7,8,9,0];
  for(let i = 0; i < invalidCharacter.length; i++) {
    if(inputValue.includes(invalidCharacter[i])) {
      alert("no se permiten números en el nombre");
      input.value = "";
    }
  }
}

validateCharacter();

const stateButtonAdd = () => {
  validateCharacter()
  if (input.value.trim() === "") {
    addButton.classList.add("disabled");
    addButton.disabled = true;
  } else {
    addButton.classList.remove("disabled");
    addButton.disabled = false;
  }
};

const stateButtonRaffler = () => {
  if (list.children.length === 0) {
    raffle.classList.add("disabled");
    raffle.disabled = true;
  } else {
    raffle.classList.remove("disabled");
    raffle.disabled = false;
  }
};

stateButtonAdd();
stateButtonRaffler();

input.addEventListener("input", stateButtonAdd);

const addFriendToList = () => {
  const text = input.value;
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = text;
  list.appendChild(li);
  input.value = "";
  stateButtonAdd();
  stateButtonRaffler();
};

addButton.addEventListener("click", addFriendToList);

const raffleFriend = () => {
  const friends = Array.from(list.children);
  const randomIndex = Math.floor(Math.random() * friends.length);
  const friendRaffle = friends[randomIndex].textContent;
  raffle.disabled = true;

  const swalAlert = () => {
    Swal.fire({
      title: 'Felicidades',
      text: 'tu amigo secreto es: ' + friendRaffle,
      icon: 'success',
      confirmButtonText: 'Volver a jugar'
    })
  }
  swalAlert();
  hidden.classList.remove("hidden");
  confetti({
    particleCount: 200,
    spread: 70,
    origin: { y: 0.6 },
  });
  //limpiar la lista de elemntos para que vuelva a ser cero
  list.innerHTML = "";
  raffle.classList.add("disabled");
}

raffle.addEventListener("click", raffleFriend);
