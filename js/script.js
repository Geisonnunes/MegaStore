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
document.addEventListener("DOMContentLoaded", () => {

    const productList = document.getElementById("product-list");

    if (productList) {
        mockedData.forEach(product => {
            const productElement = document.createElement("div");
            productElement.className = "product";

            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <p class="product-name">${product.title}</p>
                <p class="rate">&#9733;&#9733;&#9733;&#9733;&#9734;</p>
                <p class="product-price">R$ ${product.price}</p>
                <button class="add-to-cart">Adicionar ao Carrinho</button>
            `;

            productList.appendChild(productElement);
        });
    }

    // Menu mobile
    const menuButton = document.querySelector(".menu-button");
    const nav = document.querySelector("nav");

    if (menuButton && nav) {
        menuButton.addEventListener("click", () => {
            nav.classList.toggle("show-menu");
        });
    }

    // ===== DROPDOWN ACCOUNT (HOVER DESKTOP + CLICK MOBILE) =====

    const accounts = document.querySelectorAll(".account");
    const isDesktop = window.matchMedia("(hover: hover)").matches;

    function closeAll() {
        accounts.forEach(acc => acc.classList.remove("active"));
    }

    accounts.forEach(account => {

        if (isDesktop) {
            let hoverTimeout;

            account.addEventListener("mouseenter", () => {
                clearTimeout(hoverTimeout);
                closeAll();
                account.classList.add("active");
            });

            account.addEventListener("mouseleave", () => {
                hoverTimeout = setTimeout(() => {
                    account.classList.remove("active");
                }, 180); // delay seguro para acessar o submenu
            });
        }

        // Clique (mobile e fallback)
        account.addEventListener("click", (e) => {
            e.stopPropagation();

            const isActive = account.classList.contains("active");
            closeAll();

            if (!isActive) {
                account.classList.add("active");
            }
        });
    });
    document.addEventListener("click", closeAll);

});

