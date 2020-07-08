# Dynamics Tips v1.0.0

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
<a class="btn fd-azul tips-ele" data-pos="top" data-tips="Hola Soy un Tips !!!" data-evt="hover">Botón</a>
```

En este ejemplo disponemos de un botón de [bodystyle](https://bodystyle.000webhostapp.com/#/documentacion/tooltips). 

Se le añade al elemento la clase `tips-ele`.
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

En proyectos SPA cuando disponemos de la librería como una dependencia de nuestro proyecto hay que iniciar cada uno de los módulos de manera independiente. En este caso para los tooltips el procedimiento 
es el siguiente.

```js
import ToolTips from "dynamics-tips/modulos/ToolTis"
// Y donde corresponda lo iniciamos 
ToolTips.iniciar()
```

### Comentarios

Similares a los tips pero con algunos estilos que permiten añadir información más detallada sobre cada elemento. 

```html
<a class="btn fd-azul com-trigger" data-pos="top" data-info="Esto es un botón de la librería bodystyle la cual podemos acceder a través de este enlace <a href='https://bodystyle.000webhostapp.com/'>Bodystyle</a>" data-evt="hover">Botón</a>
```

La clase disparadora en este caso es `com-trigger`.

- data-pos
    - top / arriba
    - bottom / abajo (default)
    - left / iquierda
    - right / derecha
- data-evt
    - click
    - hover (default)
- data-info (Contenido de html del comentario puede ser solo texto).

Al igual que los tooltips los comentarios tenemos que inicializarlos en proyectos SPA

```js
import ComentariosDinamicos from "dynamics-tips/modulos/ComentariosDinamicos"
// Y donde corresponda lo iniciamos 
ComentariosDinamicos.iniciar()
```

### Dropdown

Tipico elemento que cuando damos click o pasamos el ratón por encima este desplega una lista de enlaces
que aparece y desaparece según las acciones del usuario.

#### 1° Paso

Creamos un elemnto disparador el cual puede ser cualquier elemento y le añadimos la clase 
`.dropdown-toggle`. Tambien agregamos un atributo obligatorio para el funcionamiento que 
es `data-target` con el id de la lista desplegable.

```html
<a class="btn fd-azul dropdown-toggle" data-target="#drop">Botón</a>
```

#### 2° Paso

Creamos la lista desplegable con la clase `.dropdown`

```html
<div class="dropdown" id="drop">
    <a href="#inicio">Inicio</a>
    <a href="#servicios">Servicios</a>
    <a href="#porfolio">Porfolio</a>
</div>
```

Notemos que id de la lista desplegable coincide con el attr data-target del dropdown-toggle.

Hasta aca la configuración por defecto. Pero si queremos personalizar el drop podemos añadir más 
atributos al elemento disparador.

```html
<a  class="btn fd-rojo dropdown-toggle" data-pos="derecha" data-target="#drop" data-evt="hover" data-color="#fff">Drop</a>
```

- data-pos
    - top / arriba
    - bottom / abajo (default)
    - left / iquierda
    - right / derecha
- data-evt
    - click (default)
    - hover 
- data-target (Obligatorio) id de la lista desplegable.
- data-color Hexadecimal del color de la flecha del disparador.


Al igual que los elementos anteriores tenemos que inicializarlos en proyectos SPA

```js
import DropDown from "dynamics-tips/modulos/DropDown"
// Y donde corresponda lo iniciamos 
DropDown.iniciar()
```

## Licencia

(MIT) (c) 2020 Dynamics Tis.

