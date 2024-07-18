// Clase que representa un contador
class Counter {
    constructor() {
      this.count = 0; // Variable de instancia para almacenar el contador
      this.display = document.getElementById('countDisplay'); // Elemento en el DOM para mostrar el contador
      
      this.incrementButton = document.getElementById('incrementButton'); // Botón para incrementar el contador
      this.resetButton = document.getElementById('resetButton'); // Botón para reiniciar el contador
  
      // Validar si el elemento 'countDisplay' existe en el DOM
      if (!this.display) {
        throw new Error("No se encontró el elemento 'countDisplay' en el DOM");
      }
  
      // Asociar métodos a eventos
      // Error: Uso incorrecto de 'this' dentro de funciones de eventos
      this.incrementButton.addEventListener('click', this.increment); // ERROR: No se usa arrow function aquí
      this.resetButton.addEventListener('click', this.reset); // ERROR: No se usa arrow function aquí
    }
  
    // Método para incrementar el contador
    increment() {
      this.count++; // ERROR: 'this' aquí no apunta a la instancia de Counter
      this.display.textContent = this.count; // ERROR: 'this' aquí no apunta a la instancia de Counter
    }
  
    // Método para reiniciar el contador
    reset() {
      this.count = 0; // ERROR: 'this' aquí no apunta a la instancia de Counter
      this.display.textContent = this.count; // ERROR: 'this' aquí no apunta a la instancia de Counter
    }
  }
  
  // Error: Intento de crear una instancia de Counter antes de que el DOM esté completamente cargado
  // Esto puede causar un error si el script se carga antes de que el DOM esté listo
  try {
    document.addEventListener('DOMContentLoaded', () => {
      let myCounter = new Counter();
    });
  } catch (error) {
    console.error('Error al crear el contador:', error.message);
  }
  