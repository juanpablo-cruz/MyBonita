document.getElementById("boton-inicio").addEventListener("click", function() {
    document.getElementById("mensaje-inicial").classList.add("oculto");
    this.classList.add("oculto");
    document.getElementById("pregunta").classList.remove("oculto");

    // Generar pétalos de rosa animados al hacer clic en el botón
    for (let i = 0; i < 15; i++) {
        crearPetalo();
    }

    // Seguir generando pétalos cada 0.5 segundos
    setInterval(crearPetalo, 500);
});

const options = [
    'Segura?', 
    'Segurisima?', 
    'Estas completamente segura?', 
    'Ni por un croissant de chocolate?', 
    'Ni por una carnita de res?', 
    'No te arrepentiras?', 
    'Pero si estas segura?', 
    'En serio no?', 
    'No me voy hasta un sí', 
    'No hay manera de que no', 
    'no hay'
];

let index = 0;

function mostrarFraseNo() {
    if (index < options.length) {
        document.getElementById("mensaje-no").innerText = options[index];
        index++;
    } else {
        document.getElementById("boton-no").innerText = "Ya no puedes decir que no 😏";
        document.getElementById("boton-no").disabled = true;
    }
}

function mostrarRespuesta() {
    document.getElementById("pregunta").classList.add("oculto");
    document.getElementById("respuesta-final").classList.remove("oculto");
}

// Función para crear un pétalo animado
function crearPetalo() {
    let petalo = document.createElement("div");
    petalo.classList.add("petalos");
    document.body.appendChild(petalo);
    
    let startPosX = Math.random() * window.innerWidth; // Posición horizontal aleatoria
    let startPosY = -50; // Iniciar arriba de la pantalla
    let startDelay = Math.random() * 5; // Retraso aleatorio antes de caer
    let duration = Math.random() * 3 + 3; // Duración aleatoria entre 3 y 6 segundos
    
    petalo.style.left = startPosX + "px"; // Aparecer en una posición horizontal aleatoria
    petalo.style.top = startPosY + "px"; // Aparecer en la parte superior
    petalo.style.animationDuration = duration + "s"; // Duración aleatoria
    petalo.style.animationDelay = startDelay + "s"; // Retraso aleatorio

    setTimeout(() => {
        petalo.remove(); // Eliminar el pétalo después de que termine la animación
    }, (duration + startDelay) * 1000); // Tiempo total de la animación
}
