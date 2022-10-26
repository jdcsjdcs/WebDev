
let list = []

function add_to_list() {

    let item = document.querySelector("input").value;

    if (list.includes(item)) {
        alert('item is already on the list');
    }
    else {
        list.push(item);
        alert('added to list')

        let li = document.createElement('li');
        li.innerText = item;
        let ul = document.querySelector('ul');
        ul.append(li);
        document.getElementById('item').value = '';
    }
}





