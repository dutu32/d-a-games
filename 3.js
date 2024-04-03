let openShopping= document.querySelector('.shopping');
let closeShopping= document.querySelector('.closeShopping');
let list= document.querySelector('.list');
let listCard= document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let products = [
    {
        id:1,
        name: 'God of War',
        image: 'img1.jpg',
        price: 122,

    },
    {
        id:2,
        name: 'DOOM',
        image: 'cs.jpg',
        price: 99,

    },
    {
        id:3,
        name: 'GTA V',
        image: 'img4.jpg',
        price: 160,

    },
    {
        id:4,
        name: 'Mortal Kombat',
        image: 'mo.jpg',
        price: 99,

    },
    {
        id:5,
        name: 'PUBG',
        image: 'pubg.jpg',
        price: 199,

    },
    {
        id:6,
        name: 'League of Legends',
        image: 'lol.jpg',
        price: 54,

    },
];
let listCards =[];
function initApp(){
    products.forEach((value , key)=>{
let newDiv = document.createElement('div');
newDiv.classList.add('item');
newDiv.innerHTML = `
<img src="${value.image}">
<div class="title">${value.name}</div>
<div class="price">${value.price.toLocaleString()}ron</div>
<button onclick="addToCard(${key})">Adauga in cos</button>



`;

list.appendChild(newDiv);
})
}
initApp();
function addToCard(key){
    if(listCards[key]==null){
        listCards[key]=products[key];
        listCards[key].quantity=1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML='';
    let count = 0;
    let totalPrice=0;
    listCards.forEach((value,key)=>{
        totalPrice=totalPrice + value.price;
        count = count + value.quantity;


        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="${value.image}"/></div>
            <div>${value.price.toLocaleString()}lei</div>
            <div>${value.quantity}buc</div>
            <div>
            <button onclick="changeQuantity(${key},${value.quantity-1})">-</button>
            <div class="count">${value.quantity}</div>
            <button onclick="changeQuantity(${key},${value.quantity+1})">+</button>
            </div>
            `;
            listCard.appendChild(newDiv);
        }

    })
       total.innerText = totalPrice.toLocaleString();
        quantity.innerText = count;

}
function changeQuantity(key,quantity){
    if(quantity==0){
        delete listCards[key];
    }else{
        listCards[key].quantity=quantity;
        listCards[key].price=quantity*products[key].price;
    }
reloadCard();
}
