/* const url =  'https://pokeapi.co/api/v2/pokemon/25';


// TODO: Aqui lo que hice fue colocar el parametro que iba dentro de fetch dentro de una url en vez de meterlo directamente.
fetch(url)

// ! Promesas (son obligarotias)
.then(response => response.json())
.then(data => {
    let elemento = document.getElementById('element')
    elemento.innerHTML= `<p>${data.name}</p>
    <p>${data.order}</p>
    <img src='${data.sprites.front_default}' alt='pokemon' >`
    console.log(data);
})
.catch(err=>console.log(err)); // En caso de error */