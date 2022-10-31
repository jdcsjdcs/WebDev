
let priceBtn = document.querySelector('#price_btn')
let yesBtn = document.createElement('button');
let h3 = document.createElement('h3');
let p = document.createElement('p');
let noBtn = document.createElement('button');

priceBtn.addEventListener('click', function () {
    document.querySelector('.cong_pic').src = 'beer.jpg'
    priceBtn.style.display = 'none';

    h3.innerText = 'Enjoy!';
    document.body.append(h3);
    document.body.style.backgroundColor = '#a8dadc';

    p.innerText = 'Some more?';
    document.body.append(p);

    yesBtn.innerText = 'yes, please';
    document.body.append(yesBtn);

    noBtn.innerText = 'no, thanks';
    document.body.append(noBtn);

})

let p1 = document.createElement('p')
yesBtn.addEventListener('click', function () {
    let beer = document.createElement("img");
    beer.src = 'beer.jpg';
    beer.style.width = '100px';
    p1.append(beer);
    document.body.append(p1);


})

noBtn.addEventListener('click', function () {
    p1.innerText = ''

})

console.log(new Date())


