
// ============================
//   CARRITO CON LOCALSTORAGE


// Cargar carrito desde LocalStorage o inicializar vacío, traemos
// del almacenamiento local del navegador el valor guardado bajo la clave cart :)
//despues de convertir la cadena en un objeto Json utilizamos el operador logico ||
// si el valor es null lo inicia como un arreglo
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ---- ACtualizamos el Contador ----
function ActualizarCarrito() {
    document.getElementById("cart-count").textContent = cart.length;
}
ActualizarCarrito();

// ---- AGREGAR PRODUCTO ---- el querySelectorAll nos permite seleccionar varios elementos del DOM
document.querySelectorAll(".add-cart-btn").forEach(btn => {
    btn.addEventListener("click", e => {
        const product = {
            id: btn.dataset.id,
            name: btn.dataset.name,
            price: btn.dataset.price,
            img: btn.dataset.img
        };

        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        ActualizarCarrito();
        MostrarCarrito();
    });
});

// ---- MOSTRAR CARRITO EN EL SIDEBAR ----
function MostrarCarrito() {
    const container = document.getElementById("cart-items");
    container.innerHTML = "";

    cart.forEach(item => {
        container.innerHTML += `
            <div class="cart-item">
                <img src="${item.img}">
                <div class="cart-item-info">
                    <strong>${item.name}</strong>
                    <span>$${item.price}</span>
                </div>
            </div>
        `;
    });
}
MostrarCarrito();

// ---- ABRIR Y CERRAR SIDEBAR ----
document.getElementById("btn-cart").addEventListener("click", () => {
    document.getElementById("sidebar").classList.add("open");
});

document.getElementById("close-sidebar").addEventListener("click", () => {
    document.getElementById("sidebar").classList.remove("open");
});
