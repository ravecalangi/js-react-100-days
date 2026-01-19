const input = document.getElementById("animal-input");
const animalContainer = document.querySelector(".animal-container");

let animals = [
    'dog',
    'cat',
    'fish',
    'cow',
    'bird',
    'owl',
    'zebra',
    'lion',
    'tiger',
    'elephant',
    'giraffe',
    'monkey',
    'horse',
    'sheep',
    'goat',
    'rabbit',
    'duck',
    'penguin',
    'bear',
    'wolf',
    'fox',
    'snake',
    'frog',
    'kangaroo',
    'panda',
    'jellyfish',
    'quail',
    'viper',
    'vampire bat'
];

input.addEventListener("keyup", (e) => {

      let inputVal = e.target.value.toLowerCase();

      let result = [];

      if(inputVal.length === 0) {
            animalContainer.style.display = "none";
      } else{
            animalContainer.style.display = "block";
      }

      while(animalContainer.firstChild) {
            animalContainer.firstChild.remove();
      }

      result.length = 0;

      result = animals.filter(animal => animal.includes(inputVal));

      result.forEach(res => {

            const li = document.createElement("li");
            li.innerHTML = res;
            animalContainer.appendChild(li);

      })
      
})



