const length = document.querySelector('#length');
const width = document.querySelector('#width');
const calBtn = document.querySelector('#calBtn');
const form = document.querySelector('#calculator')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const area = length.value * width.value;
    const h4 = document.querySelector('h4');
    h4.innerText = `Area of rectanle is: ${area} sqm`
})
