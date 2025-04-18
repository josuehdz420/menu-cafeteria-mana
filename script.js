document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    darkModeToggle.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode", darkModeToggle.checked);
    });
});


// Filtros por categoría
document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", function() {
        const category = this.getAttribute("data-category");
        document.querySelectorAll(".menu-item").forEach(item => {
            if (category === "all" || item.getAttribute("data-category") === category) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

// Animación al hacer scroll
document.addEventListener("scroll", function() {
    document.querySelectorAll(".hidden").forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight - 50) {
            element.classList.add("show");
        }
    });
});

// Animación de carga para imágenes con Lazy Loading
document.querySelectorAll(".menu-item img").forEach(img => {
    img.setAttribute("loading", "lazy"); // Activa la carga diferida en las imágenes
    img.onload = () => img.classList.add("loaded");
});

/*// Scroll infinito para categorías
let page = 1;
window.addEventListener("scroll", function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        loadMoreItems();
    }
});

function loadMoreItems() {
    let newItem = document.createElement("div");
    newItem.className = "menu-item";
    newItem.innerHTML = `<img src="assets/taco.jpg" alt="Taco" loading="lazy"> <!-- Lazy loading aquí -->
                         <h3>Taco de Birria</h3>
                         <p>$2.00</p>`;
    document.querySelector(".menu-grid").appendChild(newItem);
}*/

console.log("⚠️ Scroll infinito desactivado temporalmente.");

// Buscador interactivo
document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("search-bar");
    const noResultsMessage = document.getElementById("no-results");
    const menuItems = document.querySelectorAll(".menu-item");

    searchBar.addEventListener("input", function () {
        const query = this.value.toLowerCase(); // Texto introducido por el usuario
        let hasResults = false; // Bandera para verificar si hay resultados

        menuItems.forEach(item => {
            const productName = item.querySelector("h3").textContent.toLowerCase(); // Nombre del producto
            if (productName.includes(query)) {
                item.style.display = "block"; // Mostrar productos que coincidan
                hasResults = true; // Hay al menos un resultado
            } else {
                item.style.display = "none"; // Ocultar productos que no coincidan
            }
        });

        // Mostrar el mensaje si no hay resultados
        noResultsMessage.style.display = hasResults ? "none" : "block";
    });

    // Ocultar el mensaje al cargar la página
    noResultsMessage.style.display = "none";
});
