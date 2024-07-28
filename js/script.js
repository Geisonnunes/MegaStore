const mockedData = [
    {
        image: "img/product-4.png",
        title: "Combo Gamer",
        price: "1200.00"
    },
    {
        image: "img/product-5.png",
        title: "Placa De Vídeo Msi Geforce 1650",
        price: "879.90"
    },
    {
        image: "img/product-6.png",
        title: "Dualsense Para Ps5",
        price: "388.79"
    },
    {
        image: "img/product-7.png",
        title: "Cadeira Gamer",
        price: "899.90"
    },
    {
        image: "img/product-8.png",
        title: "Combo Gamer",
        price: "899.90"
    },
    {
        image: "img/product-5.png",
        title: "Placa De Vídeo Msi Geforce 1650",
        price: "879.90"
    },
    {
        image: "img/product-6.png",
        title: "Dualsense Para Ps5",
        price: "388.79"
    },
    {
        image: "img/product-7.png",
        title: "Cadeira Gamer",
        price: "899.90"
    },
    {
        image: "img/product-8.png",
        title: "IPhone 14 Pro Max",
        price: "10299.00"
    },
    {
        image: "img/product-9.png",
        title: "Galaxy S23 Ultra",
        price: "4859.10"
    },
    {
        image: "img/product-10.png",
        title: "ASUS ROG Phone II",
        price: "8549.10"
    },
    {
        image: "img/product-11.png",
        title: "12S Ultra",
        price: "7866.72"
    },
    {
        image: "img/product-12.png",
        title: "Series X 1TB",
        price: "3860.00"
    },
    {
        image: "img/product-13.png",
        title: "T80 Ferrari 488 GTB",
        price: "1806.89"
    },
    {
        image: "img/product-14.png",
        title: "PlayStation 5",
        price: "3559.90"
    },
    {
        image: "img/product-15.png",
        title: "Gabinete Gamer",
        price: "1000.00"
    }
];

document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.getElementById("cart-icon");
    const cartTab = document.querySelector(".cartTab");
    const cartItemsContainer = document.querySelector(".listCart");
    const cartTotal = document.createElement("div");
    cartTotal.id = "cart-total";
    cartTab.insertBefore(cartTotal, cartTab.querySelector(".btn"));
    const checkoutButton = document.querySelector(".checkOut");
    const closeCartButton = document.querySelector(".close");
    const cartCountSpan = document.querySelector(".icon-cart span");

    let cart = [];

    cartIcon.addEventListener("click", () => {
        document.body.classList.toggle("showCart");
    });

    closeCartButton.addEventListener("click", () => {
        document.body.classList.remove("showCart");
    });

    function addItemToCart(name, price) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].name === name) {
                cart[i].quantity++;
                updateCartDisplay();
                return;
            }
        }
        const item = { name, price, quantity: 1 };
        cart.push(item);
        updateCartDisplay();
    }

    function updateCartDisplay() {
        cartItemsContainer.innerHTML = "";
        let total = 0;
        cart.forEach((item) => {
            const div = document.createElement("div");
            div.className = "item";
            div.innerHTML = `
                  <div>${item.name}</div>
                  <div>R$ ${item.price.toFixed(2)}</div>
                  <div class="quantity">
                      <span class="decrease">-</span>
                      <span>${item.quantity}</span>
                      <span class="increase">+</span>
                  </div>
                  <button class="remove-item">Remover</button>
              `;
            cartItemsContainer.appendChild(div);
            total += item.price * item.quantity;
        });
        cartTotal.textContent = `Total: R$ ${total.toFixed(2)}`;

        document.querySelectorAll(".remove-item").forEach((button) => {
            button.addEventListener("click", function () {
                const name = this.parentElement.querySelector("div:nth-child(1)").textContent;
                removeItemFromCart(name);
            });
        });

        document.querySelectorAll(".increase").forEach((button) => {
            button.addEventListener("click", function () {
                const name = this.parentElement.previousElementSibling.previousElementSibling.textContent;
                increaseQuantity(name);
            });
        });

        document.querySelectorAll(".decrease").forEach((button) => {
            button.addEventListener("click", function () {
                const name = this.parentElement.previousElementSibling.previousElementSibling.textContent;
                decreaseQuantity(name);
            });
        });

        updateCartCount();
    }

    function increaseQuantity(name) {
        cart.forEach((item) => {
            if (item.name === name) {
                item.quantity++;
            }
        });
        updateCartDisplay();
    }

    function decreaseQuantity(name) {
        cart.forEach((item) => {
            if (item.name === name && item.quantity > 1) {
                item.quantity--;
            }
        });
        updateCartDisplay();
    }

    function removeItemFromCart(name) {
        cart = cart.filter((item) => item.name !== name);
        updateCartDisplay();
    }

    function updateCartCount() {
        const count = cart.reduce((acc, item) => acc + item.quantity, 0);
        cartCountSpan.textContent = count;
    }

    function attachAddToCartEvents() {
        document.querySelectorAll(".add-to-cart").forEach((button) => {
            button.addEventListener("click", function (event) {
                event.preventDefault();
                const name = this.dataset.name;
                const price = parseFloat(this.dataset.price);
                addItemToCart(name, price);

                this.classList.add("active");
                setTimeout(() => {
                    this.classList.remove("active");
                }, 500);
            });
        });
    }


    // Simula a chamada fetch e processa os dados mockados
    const productList = document.getElementById("product-list");
    mockedData.forEach(product => {
        const productElement = document.createElement("div");
        productElement.className = "product";

        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <p class="product-name">${product.title}</p>
            <p class="rate">&#9733;&#9733;&#9733;&#9733;&#9734;</p>
            <p class="product-price">R$ ${product.price}</p>
            <button class="add-to-cart" data-name="${product.title}" data-price="${product.price}">Adicionar ao Carrinho</button>
        `;

        productList.appendChild(productElement);
    });

    attachAddToCartEvents();

    checkoutButton.addEventListener("click", function () {
        alert("Finalizar Compra");
    });

    const menuButton = document.querySelector(".menu-button");
    const nav = document.querySelector("nav");

    menuButton.addEventListener("click", function () {
        nav.classList.toggle("show-menu");
    });
});
