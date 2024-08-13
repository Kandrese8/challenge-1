# Proyecto de encriptación y desencriptación

## Descripción
Este proyecto es una aplicación web que permite encriptar y desencriptar textos simples. Además, ofrece la función de copiar el texto en el área de texto al portapapeles.

## Funcionalidades

### 1. **Encriptación**
- **Entrada**: El usuario ingresa un texto en un campo de texto (`textarea`).
- **Proceso**: El texto se encripta reemplazando caracteres específicos con palabras definidas previamente:
  - `e` se reemplaza por `enter`
  - `i` se reemplaza por `imes`
  - `a` se reemplaza por `ai`
  - `o` se reemplaza por `ober`
  - `u` se reemplaza por `ufat`
- **Resultado**: El texto encriptado se muestra en pantalla y se actualiza un mensaje que indica que la encriptación se realizó con éxito.

### 2. **Desencriptación**
- **Entrada**: El usuario ingresa un texto encriptado en el mismo campo de texto.
- **Proceso**: El texto se desencripta reemplazando las palabras específicas con las letras originales:
  - `enter` se reemplaza por `e`
  - `imes` se reemplaza por `i`
  - `ai` se reemplaza por `a`
  - `ober` se reemplaza por `o`
  - `ufat` se reemplaza por `u`
- **Resultado**: El texto desencriptado se muestra en el mismo espacio de texto. También se actualiza un mensaje que indica que la desencriptación se realizó con éxito.
- 

### 3. **Copiar**
- **Entrada**: El usuario hace clic en el botón "Copiar texto en pantalla".
- **Resultado**: Una notificación informa al usuario que el texto ha sido copiado. Si no hay texto para copiar, se muestra un mensaje de advertencia.

## Estructura del proyecto

- **`index.html`**: Contiene la estructura básica de la aplicación, incluyendo el campo de texto para entrada, botones para encriptar, desencriptar y copiar, y la sección para mostrar el resultado.
- **`style.css`**: Contiene los estilos para el header, footer, y otras secciones de la página.
- **`index.js`**: Contiene el código JavaScript para las funcionalidades de encriptación, desencriptación y copiado.

## Consideraciones
- El orden de reemplazo en el código JavaScript no se hace en orden (["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]) porque la encriptación me resulta erronea y aún trabajo en arreglarlo.

## Créditos

Desarrollado por Kevin Estrada en formación con Alura Latam.
