const character = document.querySelector('#charactername');
console.log(character);
const h1 = document.querySelector('h1');
character.addEventListener('input', function (e) {
    h1.innerText = `Welcome, ${character.value}`
})
