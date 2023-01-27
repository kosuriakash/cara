let productDataUrl = 'https://my-json-server.typicode.com/kosuriakash/json-server/db' 

async function getProducts(productDataUrl) {
    fetch(productDataUrl)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            let productsData = data.product;
            console.log(productsData);
            let cards = ' ';

            productsData.forEach((product,index) => {
                // console.log(product)
                cards = cards + `
                <div class="pro">
                <img src="${product.source}" alt="" onclick="window.location.href='sproduct-${index+1}.html';">
                <div class="des">
                    <span>${product.brand}</span>
                    <h5>${product.name}</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>$ ${product.price}</h4>
                </div>
                <a><i class="fa-solid fa-cart-shopping" onclick="cart.addToCart('${encodeURI(JSON.stringify(product))}')"></i></a>
            </div>`;
            });

            document.getElementById('product').innerHTML = cards;

            // console.log(cards);

        });

}
getProducts(productDataUrl)
