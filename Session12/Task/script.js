function price() {
    document.querySelector('.cong_pic').src = 'beer.jpg'
    let priceBtn = document.querySelector('#price_btn');
    priceBtn.style.display = 'none';

    let h3 = document.createElement('h3');
    h3.innerText = 'Enjoy!';
    document.body.append(h3);
    document.body.style.backgroundColor = '#a8dadc';

    let p = document.createElement('p');
    p.innerText = 'Some more?';
    document.body.append(p);

    let yesBtn = document.createElement('button');
    yesBtn.innerText = 'yes, please';
    document.body.append(yesBtn);

    let noBtn = document.createElement('button');
    noBtn.innerText = 'no, thanks';
    document.body.append(noBtn);
}


