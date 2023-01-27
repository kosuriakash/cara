function removeCartItems(id){
    cart.removeFromCart(id);
    renderCartItems();
}

function renderCartItems() {
    const cartItems = cart.getAllItems();

    let totalPrice = 0;

    const cards = cartItems.reduce((prev, curr) => {

        totalPrice += +curr.price * curr.qty;

        return prev + `<table width="100%">
        <tr>
            <td><img src="${curr.source}" alt=""></td>
            <td><strong>${curr.brand}</strong></td>
            <td>${curr.name}</td>
            <td>$ ${curr.price}</td>
            <td>
            <button class="bot" onclick="decrementQty(${curr.id})">-</button>
            ${curr.qty}
            <button class="bot" onclick="incrementQty(${curr.id})">+</button></td>
            <td>
            <button class="normal" onclick="removeCartItems(${curr.id})">REMOVE ITEMS</button>
            </td>
        </tr>
    </tbody>
    </table>`;
    }, '');

    document.getElementById('card-cart-wrapper').innerHTML = cards;
    document.getElementById('total-price').innerHTML = totalPrice
    document.getElementById('final-price').innerHTML = totalPrice
}

function incrementQty(id){
    cart.incrementQty(id);
    renderCartItems();
}

function decrementQty(id){
    cart.decrementQty(id);
    renderCartItems();
}

renderCartItems();