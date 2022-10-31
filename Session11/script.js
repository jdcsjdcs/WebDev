
let list = []

function add_to_list() {

    const item = document.querySelector("#item").value;

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
        document.querySelector('#item').value = '';
    }
}





