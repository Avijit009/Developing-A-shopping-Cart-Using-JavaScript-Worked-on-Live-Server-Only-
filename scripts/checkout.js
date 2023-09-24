let cartSummaryHTML = '';

cart.forEach((cartItem) => {

    const productId = cartItem.productId;
    let matchingProduct;

    

    products.forEach((product) =>{ 
        if(product.id === productId){
            matchingProduct = product;
        }
    });

    cartSummaryHTML += `
    <div class="cart-item-container cart-item-container-${matchingProduct.id}">

    <div class="cart-item-details-grid">
        <img class="product-image"
        src="${matchingProduct.image}">

        <div class="cart-item-details">
        <div class="product-name">
            ${matchingProduct.name}
        </div>
        <div class="product-price">
            $${((matchingProduct.priceCents)/100).toFixed(2)}
        </div>
        <div class="product-quantity">
            <span>
            Quantity: <span class="quantity-label">${cartItem.quantity}</span>
            </span>
            <span class="delete-quantity-link link-primary delete-link" data-product-id = '${matchingProduct.id}'>
            Remove
            </span>
        </div>
        </div>
        </div>
    </div>
    </div>
    `
});

document.querySelector(".list-cart").innerHTML = cartSummaryHTML;
// console.log(cartSummaryHTML);

document.querySelectorAll(".delete-link").forEach((link) =>{
    link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        deleteCartItem(productId);
        // console.log(cart);

        const container = document.querySelector(`.cart-item-container-${productId}`);
        container.remove();
        // console.log(container);
    });
});