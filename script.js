document.addEventListener('DOMContentLoaded', () => {
    const products = {
        1: {
            image: 'product1.jpg',
            title: 'Товар 1',
            description: 'Джорданы, хорошие 2020 года выпуска, из коллекции осень',
            price: '$40.00'
        },
        2: {
            image: 'product2.jpg',
            title: 'Товар 2',
            description: 'Джорданы, хорошие 2024 года выпуска, из коллекции весна',
            price: '$30.00'
        }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = products[productId];

    if (product) {
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-title').innerText = product.title;
        document.getElementById('product-description').innerText = product.description;
        document.getElementById('product-price').innerText = product.price;
    }

    const addToCartButton = document.getElementById('add-to-cart');
    const cartMessage = document.getElementById('cart-message');

    if (addToCartButton) {
        addToCartButton.addEventListener('click', () => {
            cartMessage.classList.add('show');
            setTimeout(() => {
                cartMessage.classList.remove('show');
            }, 2000);

            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        });
    }
});
