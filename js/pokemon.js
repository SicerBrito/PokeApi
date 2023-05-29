const input = document.getElementById('pokemonNumberInput');
const button = document.getElementById('searchButton');
const nameElement = document.getElementById('pokemonName');
const typeElement = document.getElementById('pokemonType');
const idElement = document.getElementById('pokemonId');
const imageElement = document.getElementById('pokemonImage');

button.addEventListener('click', () => {
  const pokemonNumber = input.value;
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
    .then(response => response.json())
    .then(data => {
      const name = data.name;
      const id = data.id;
      const imageUrl = data.sprites.front_default;
      const types = data.types.map(type => type.type.name).join(', ');

      nameElement.textContent = `Name: ${name}`;
      typeElement.textContent = `Type: ${types}`;
      idElement.textContent = `Id: ${id}`;
      imageElement.src = imageUrl;
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
