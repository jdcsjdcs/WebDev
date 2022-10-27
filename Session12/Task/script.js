function price() {
    document.querySelector('.cong_pic').src = 'beer.jpg'
    const price_btn = document.querySelector('#price_btn');
    price_btn.style.display = 'none';
    let h3 = document.createElement('h3');
    h3.innerText = 'Enjoy!';
    document.body.append(h3);
    document.body.style.backgroundColor = '#a8dadc';

}



