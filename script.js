// Modo oscuro
document.getElementById('darkModeBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Formulario de contacto
document.getElementById('toggleFormBtn').addEventListener('click', () => {
  const formContainer = document.getElementById('formContainer');
  formContainer.classList.toggle('show');
  
  // Cerrar especialidades si están abiertas
  if(formContainer.classList.contains('show')) {
    document.getElementById('specialtiesContainer').classList.remove('show');
    document.getElementById('toggleSpecialtiesBtn').classList.remove('active');
  }
});

// Especialidades (acordeón)
document.getElementById('toggleSpecialtiesBtn').addEventListener('click', function() {
  const container = document.getElementById('specialtiesContainer');
  const btn = this;
  
  container.classList.toggle('show');
  btn.classList.toggle('active');
  
  // Cerrar formulario si está abierto
  if(container.classList.contains('show')) {
    document.getElementById('formContainer').classList.remove('show');
  }
  
  // Animación para los items
  if(container.classList.contains('show')) {
    const items = document.querySelectorAll('.specialties-list li');
    items.forEach((item, index) => {
      item.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
    });
  }
});

// Inicializar animaciones al cargar (para cuando se recarga la página con el acordeón abierto)
document.addEventListener('DOMContentLoaded', () => {
  if(document.getElementById('specialtiesContainer').classList.contains('show')) {
    const items = document.querySelectorAll('.specialties-list li');
    items.forEach((item, index) => {
      item.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
    });
  }
});