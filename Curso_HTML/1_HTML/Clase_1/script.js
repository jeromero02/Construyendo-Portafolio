// 1. SELECCIÓN DE ELEMENTOS DEL HTML
const btnGames = document.getElementById('btn-games'); // El enlace "Games" del navbar
const btnBackHome = document.getElementById('btn-back-home'); // Botón volver
const heroSection = document.querySelector('.hero-section'); // Sección principal
const previewSection = document.querySelector('.preview-section'); // Sección de previas inferiores
const catalogSection = document.getElementById('catalog-section'); // El nuevo catálogo

const searchInput = document.querySelector('.search-box input'); // El input del buscador
const gameCards = document.querySelectorAll('.game-card'); // Las 5 tarjetas de juegos

// 2. FUNCIONES PARA CAMBIAR DE "PÁGINA"
function showCatalog() {
    heroSection.classList.add('hidden');
    previewSection.classList.add('hidden');
    catalogSection.classList.remove('hidden');
    window.scrollTo(0, 0); // Sube la pantalla al inicio
}

function showHome() {
    heroSection.classList.remove('hidden');
    previewSection.classList.remove('hidden');
    catalogSection.classList.add('hidden');
}

// Eventos para los botones
btnGames.addEventListener('click', (e) => {
    e.preventDefault(); // Evita que la página se recargue
    showCatalog();
});

btnBackHome.addEventListener('click', showHome);

// 3. FUNCIONALIDAD DEL BUSCADOR (Filtro en tiempo real)
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    // Si el usuario escribe algo, automáticamente lo llevamos al catálogo para ver resultados
    if (searchTerm !== "") {
        showCatalog();
    }

    // Filtrar las cartas
    gameCards.forEach(card => {
        // Leemos el atributo 'data-name' que le pusimos a cada carta en el HTML
        const gameData = card.getAttribute('data-name');
        
        if (gameData.includes(searchTerm)) {
            card.classList.remove('hidden'); // Muestra si coincide
        } else {
            card.classList.add('hidden'); // Oculta si no coincide
        }
    });
});

// Extra: Alertas interactivas para simular que los botones de compra funcionan
document.querySelectorAll('.btn-buy, .btn-play').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        alert("¡Cargando interfaz de acceso al juego seguro... Prepárate para el despliegue!");
    });
});