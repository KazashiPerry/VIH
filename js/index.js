// Obtener todos los botones del menú
const buttons = document.querySelectorAll('.sidebar-button');

// Función para generar un número aleatorio entre min y max (ambos incluidos)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para generar un texto aleatorio
function getRandomText() {
  const words = ['palabra1', 'palabra2', 'palabra3', 'palabra4', 'palabra5'];
  return words[getRandomInt(0, words.length - 1)];
}

// Función para generar un icono aleatorio
function getRandomIcon() {
  const icons = ['fas fa-home', 'fas fa-user', 'fas fa-envelope',




