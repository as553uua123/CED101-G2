window.addEventListener('load', doFirst);
let storage = sessionStorage;

function doFirst() {
    if (storage['addItemList'] == null) {
        storage['addItemList'] = '';
    }
    let add_cart = document.querySelectorAll('.add_cart');
    for (let i = 0; i < add_cart.length; i++) {
        add_cart[i].addEventListener('click', additem);
    }
}

function additem(e) {
    let itemValue = e.target.nextSibling.nextSibling.value;
    let itemNo = itemValue.split('|')[0],
        itemName = itemValue.split('|')[1],
        itemPrice = itemValue.split('|')[2],
        itemNum = itemValue.split('|')[3];
    console.log(itemNo);
    console.log(itemName);
    console.log(itemPrice);
    console.log(itemNum);
    if (storage[`${itemNo}`]) {
        alert('已經在購物車內囉。')
    } else {
        storage[`${itemNo}`] = itemValue;
        storage['addItemList'] += itemNo + ',';
    }
}