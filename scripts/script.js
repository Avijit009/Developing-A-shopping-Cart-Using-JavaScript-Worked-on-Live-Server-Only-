//List of product

const products = [{
    id: 'product-1',
    image: 'images/men-chino-pants-beige.jpg',
    name: 'Men chino pants beige',
    priceCents: 1090
},
{
    id: 'product-2',
    image: 'images/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name: 'Adults plain cotton tshirt',
    priceCents: 790
},
{
    id: 'product-3',
    image: 'images/men-athletic-shoes-green.jpg',
    name: 'Men athletic shoes',
    priceCents: 890
},
{
    id: 'product-4',
    image: 'images/athletic-cotton-socks-6-pairs.jpg',
    name: 'Athletic cotton socks 6 pairs',
    priceCents: 699
},
{
    id: 'product-5',
    image: 'images/men-cozy-fleece-zip-up-hoodie-red.jpg',
    name: 'Men chino pants beige',
    priceCents: 1199
},
{
    id: 'product-6',
    image: 'images/men-navigator-sunglasses-brown.jpg',
    name: 'Men navigator sunglasses',
    priceCents: 1599
}];

let cart = JSON.parse(localStorage.getItem('cart'));
// let cart = [];

let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
    <div class="product-container">
    <div class="product">
        <img class="product-image" src="${product.image}" alt="men-pant">
    </div>
    <div class="product-name">
        ${product.name}
    </div>
    <div class="product-price">
        $${((product.priceCents) / 100).toFixed(2)}
    </div>
    <div class="cart-manager">
        <button class="cart-btn add-to-cart" data-product-id = "${product.id}">Add to cart</button>
    </div>
</div> `;
});

document.querySelector('.product-grid').innerHTML = productsHTML;


function addToCart(productId){
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId){
            matchingItem = cartItem;
        }
    });

    if(matchingItem){
        matchingItem.quantity += 1;
    } 
    else{
        cart.push({
            productId: productId,
            quantity: 1
        });
    }

    saveToStorage();
}

function updateCartQuantity(){
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    // console.log(cartQuantity);
    document.querySelector(".added-cart-quantity")
    .innerHTML = cartQuantity;
}

document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {

    const productId = button.dataset.productId;
    // console.log(productId);
    addToCart(productId);
    updateCartQuantity();

    });

});

function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}


function deleteCartItem(productId){
    const newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });

    cart = newCart;

    saveToStorage();
}