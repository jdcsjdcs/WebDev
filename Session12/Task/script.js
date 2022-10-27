function price() {
    document.querySelector('.cong_pic').src = 'beer.jpg'
    let price_btn = document.querySelector('#price_btn');
    price_btn.style.display = 'none';

    let h3 = document.createElement('h3');
    h3.innerText = 'Enjoy!';
    document.body.append(h3);
    document.body.style.backgroundColor = '#a8dadc';

    let p = document.createElement('p');
    p.innerText = 'Some more?';
    document.body.append(p);

    let yes_btn = document.createElement('button');
    yes_btn.innerText = 'yes, please';
    document.body.append(yes_btn);
    // yes_btn.onclick = document.body.append(beer.jpg);

    let no_btn = document.createElement('button');
    no_btn.innerText = 'no, thanks';
    document.body.append(no_btn);
}


