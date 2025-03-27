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

// Animación de carga para imágenes
document.querySelectorAll(".menu-item img").forEach(img => {
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
    newItem.innerHTML = `<img src="assets/taco.jpg" alt="Taco">
                         <h3>Taco de Birria</h3>
                         <p>$2.00</p>`;
    document.querySelector(".menu-grid").appendChild(newItem);
}*/

console.log("⚠️ Scroll infinito desactivado temporalmente.");