# Instrucciones y Reglas de Desarrollo para el Agente IA

Para mantener la coherencia, calidad y el estilo de código en este desarrollo web, **debes seguir estrictamente** las siguientes directrices en cada fragmento de código que generes:

## 1. Sintaxis y Paradigma de JavaScript
* **Funciones Flecha (Arrow Functions):** Utiliza siempre funciones flecha (`const miFuncion = () => {}`) en lugar de declaraciones de funciones tradicionales (`function miFuncion() {}`).
* **Programación Declarativa:** Prioriza un enfoque declarativo (usando métodos como `.map()`, `.filter()`, `.reduce()`, etc.) en lugar de bucles imperativos tradicionales (`for`, `while`) cuando manipules datos y colecciones.

## 2. Lógica y Control de Flujo
* **Condicionales sin `else`:** Estructura los condicionales utilizando técnicas como guard clauses (cláusulas de guarda), retornos tempranos o evaluación de expresiones, evitando por completo el uso de la palabra reservada `else`.
  * *Ejemplo:* 
    ```javascript
    const validarEdad = (edad) => {
      if (edad < 18) {
        console.warn("La edad ingresada es menor al límite permitido.");
        return false;
      }
      
      console.log("Edad validada correctamente.");
      return true;
    };
    ```

## 3. Persistencia de Datos
* **Almacenamiento Local:** Utiliza exclusivamente `localStorage` para guardar, actualizar o consultar datos necesarios en el cliente. **Queda estrictamente prohibido usar `sessionStorage`**.

## 4. Depuración y Consola
* **Registro Contextual (`console`):** Agrega llamadas a `console.log`, `console.warn` o `console.error` según corresponda dentro de los bloques condicionales, manejo de errores o puntos críticos del código que necesiten trazabilidad o depuración.

## 5. Manipulación del DOM
* **Selección de Elementos:** Para interactuar con los elementos del HTML, utiliza siempre y exclusivamente el método `document.getElementById()`. **No utilices** `querySelector` ni `querySelectorAll`.

## 6. Idioma
* **Idioma Español:** Todos los nombres de variables, funciones, constantes, mensajes de interfaz, textos informativos, comentarios y registros en consola (`console`) deben estar redactados en **español**.