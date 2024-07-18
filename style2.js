// Clase que representa un contador
class Counter {
    constructor() {
      this.count = 0; // Variable de instancia para almacenar el contador
      this.display = document.getElementById('countDisplay'); // Elemento en el DOM para mostrar el contador
      this.incrementButton = document.getElementById('incrementButton'); // Botón para incrementar el contador
      this.resetButton = document.getElementById('resetButton'); // Botón para reiniciar el contador
  
      // Error 1: Acceso a un elemento no existente en el DOM (`nonexistentElement`)
      // Solución: Comentamos el código que intenta acceder a `nonexistentElement`
      /*
      this.nonexistentElement = document.getElementById('nonexistentElement');
      if (!this.nonexistentElement) {
        throw new Error("No se encontró el elemento 'nonexistentElement' en el DOM");
      }
      */
  
      // Error 2: Uso incorrecto de `this` dentro de una función de temporizador
      // Solución: Utilizamos una función de flecha para mantener el contexto de `this`
      setInterval(() => {
        console.log("Contador actual:", this.getCount());
      }, 1000);
  
      // Asociar métodos a eventos
      this.incrementButton.addEventListener('click', () => {
        this.increment(); // Llama al método de incremento cuando se hace clic en el botón de incremento
      });
  
      this.resetButton.addEventListener('click', () => {
        this.reset(); // Llama al método de reinicio cuando se hace clic en el botón de reinicio
      });
    }
  
    // Método para incrementar el contador
    increment() {
      this.count++; // Incrementa la variable de instancia 'count'
      this.display.textContent = this.count; // Actualiza el texto en el elemento HTML
    }
  
    // Método para reiniciar el contador
    reset() {
      this.count = 0; // Reinicia la variable de instancia 'count' a cero
      this.display.textContent = this.count; // Actualiza el texto en el elemento HTML
    }
  
    // Método para obtener el contador actual
    getCount() {
      return this.count; // Retorna la variable de instancia 'count'
    }
  }
  
  // Corregimos el Error 3: Envolver la creación de la instancia de `Counter` dentro de `DOMContentLoaded`
  document.addEventListener('DOMContentLoaded', () => {
    try {
      let myCounter = new Counter();
    } catch (error) {
      console.error('Error al crear el contador:', error.message);
    }
  });
  