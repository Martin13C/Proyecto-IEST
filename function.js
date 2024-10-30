// Asegúrate de que ScrollReveal esté disponible
document.addEventListener("DOMContentLoaded", function () {
    const sr = ScrollReveal({
        distance: '100px',      // Distancia del movimiento
        duration: 800,         // Duración de la animación
        easing: 'ease-in-out', // Efecto de suavizado
        reset: true            // Restablece la animación al hacer scroll
    });

    // Aplica la animación a tus elementos
    sr.reveal('.efecto-aparicion', { 
        origin: 'bottom',       // Aparece desde la derecha
        delay: 200             // Retraso de 200ms
    });
    // Aplica la animación a tus elementos
    sr.reveal('.efecto-aparicion2', { 
        origin: 'left',       // Aparece desde la derecha
        delay: 200             // Retraso de 200ms
    });
 // Aplica la animación a tus elementos
    sr.reveal('.efecto-aparicion3', { 
        origin: 'left',       // Aparece desde la derecha
        delay: 600             // Retraso de 200ms
    });
    // Aplica la animación a tus elementos
    sr.reveal('.efecto-aparicion4', { 
        origin: 'right',       // Aparece desde la derecha
        delay: 600             // Retraso de 200ms
    });
    
    
const navbar = document.querySelector(".menu");
const menuList = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
    menuList.classList.add("active");
    menuBtn.classList.add("hide");
}

cancelBtn.onclick = () => {
    menuList.classList.remove("active");
    menuBtn.classList.remove("hide");
}

// al hacer click cierra el menu
const menuOptions = document.querySelectorAll(".menu-list-item");

menuOptions.forEach(option => {
    option.addEventListener("click", () => {
        menuList.classList.remove("active");
        menuBtn.classList.remove("hide");
    });
});

});