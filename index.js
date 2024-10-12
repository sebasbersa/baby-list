document.addEventListener("DOMContentLoaded", () => {
    
})

document.addEventListener("mousemove", event => {
    handleCrearCuadradito(event);
})
document.addEventListener("keydown", event => {
    crearCuadradito(event)
})
let prevPosition = {
    x: 0, 
    y: 0
}
let animaciones = ['caer', 'caer1']

function handleCrearCuadradito(event) {
    if (calcularDistancia(event.clientX, event.clientY, prevPosition.x, prevPosition.y) < 100 )
        return;
    crearCuadradito(event) 
}
function crearCuadradito(event) {
    const body = document.querySelector("body");
    const div = document.createElement("div");
    div.className = "material-symbols-outlined cuadradito";
    div.textContent = "eco";
    
    div.style.top = `${event.clientY}px`;
    div.style.left = `${event.clientX}px`;
    div.style.animation = getAnimacion();
    prevPosition.x = event.clientX;
    prevPosition.y = event.clientY;
    body.appendChild(div);
    setTimeout(() => {
        body.removeChild(div);
    }, 2500);
}

function calcularDistancia(x2, y2, x1, y1 ) {
    // raiz cuadrada del cuadrado de la resta
    return Math.sqrt(Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2))
}
function getAnimacion() {
    const numero = Math.round(Math.random());
    return `${animaciones[numero]} 5s forwards cubic-bezier(0.22, 0.61, 0.36, 1)`;
}