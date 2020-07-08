# Dynamics Tips

Librería que algunas funcionalidades para añadir objetos dinámicos a los elementos de una página web.
A través de estos elementos se incorporan descripciones, enlaces y eventos que permiten mostrar una buena cantidad de información en espacios reducidos.

Los elementos más conocidos son los tooltips dinámicos que se muestran alrededor de los elementos detallando un fragmento de información explicativa de los componentes.

## Descarga

### CDN

Disponemos varias formas de descargar la librería. La más rápida y sensilla es a través del CDN del archivo `dynamics.bundle.min.js`. 

[https://ghcdn.rawgit.org/FedericoManzano/dynamics-tips-v1.0.0/master/dist/js/dynamics.bundle.min.js](https://ghcdn.rawgit.org/FedericoManzano/dynamics-tips-v1.0.0/master/dist/js/dynamics.bundle.min.js)

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <script src="https://ghcdn.rawgit.org/FedericoManzano/dynamics-tips-v1.0.0/master/dist/js/dynamics.bundle.min.js"></script>
    
        <title>Document</title>
    </head>
    <body>
        <!-- Contenido de la página -->
    </body>
</html>
```

### Archivo pre-compilado 

[pre-compilado]()

### Gestores de paquetes de NodeJs

#### Npm

```js
npm i dynamics-tips
```
#### Yarn

```js
yarn add dynamics-tips
```

## Utilización 

Vamos a ver los diferentes elementos que tenemos y como declararlos para poder utilizarlos.

### ToolTips

En proyectos tradicionales que no utilizan `react`, `vue` o `angular` simplemente añadimos el CDN 
que se encuentra en la parte superior de este documento. Y luego en uno de los elementos donde queramos que se muestre el Tips agregamos una serie de atributos para configurar el elemento.

```html
<a class="btn fd-azul" data-pos="top" data-tips="Hola Soy un Tips !!!" data-evt="hover">Botón</a>
```

En este ejemplo disponemos de un botón de [bodystyle](https://bodystyle.000webhostapp.com/documentacion/tooltips). 

Los attr `data-pos` y `data-evt` no son obligatorios por defecto estos tienen el valor de `bottom` y `hover`.

#### Atributos

- data-pos
    - top / arriba
    - bottom / abajo (default)
    - left / iquierda
    - right / derecha
- data-evt
    - click
    - hover (default)
- data-tips (Contenido de html del tips puede ser solo texto).

