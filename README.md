# Curso de ECMAScript Historia y Versiones de JavaScript

<h2>Contenido</h2>

- [Historia de Javascript: ¿Qué es ECMAScript?](#historia-de-javascript-¿qué-es-ecmascript)
- [¿Qué es el TC39?](#¿qué-es-el-tc39)
- [Configurando Nuestras Herramientas](#configurando-nuestras-herramientas)
- [ES6: let y const, y arrow functions](#es6-let-y-const-y-arrow-functions)


## Historia de Javascript: ¿Qué es ECMAScript?

**ECMAScript** es una especificación de lenguaje de programación con la que trabaja JavaScript. Ecma International está a cargo de estandarizar este lenguaje de programación, a través de una **serie de versiones que añaden funcionalidades nuevas**.

<h3>El primer Navegador web</h3>

La historia del primer navegador web empieza desde la necesidad de comunicar varias computadoras, a través de los siguientes acontecimientos:

* **1950**: Las computadoras surgen para analizar temas de la Segunda Guerra Mundial.
* **1969**: Surge la Red Arpanet, capaz de conectarse dos computadoras para compartir información.
* **1990**: Tim Berners-lee creó las bases de la web, la World Wide Web.
* **1993**: Se crea Mosaic, el primer navegador web.
* **1994**: Marc Andreessen crea la empresa Netscape, y a su vez crea el primer navegador comercial con el mismo nombre, con enlaces e imagenes muy primitivas.

<h3>La guerra de navegadores</h3>
* 
La guerra de los navegadores surge por la necesidad de las empresas de acaparar con el mercado de la web. En la primera guerra de navegadores, entre 1995 y 2001, se enfrentaron Netscape y Microsoft para posicionar comercialmente su propio navegador.

Incluso llegaron a hacerse bromas muy pesadas, como llevar el logo de Internet Explorer a las oficinas de Netscape. A partir de esta guerra surgieron nuevas tecnologías que perduran hasta la actualidad.

Los acontecimientos más importantes fueron:

* 1995: Microsoft crea su propio navegador web, Internet Explorer.
* 1996: Microsoft crea su propuesta de estilos para la web, CSS.
* 1995: Netscape crea su propuesta de lenguaje de programación para la web, Mocha. Después sería nombrado LiveScript, y finalmente JavaScript. JavaScript es un nombre elegido por marketing, ya que Java (otro lenguaje de programación) era muy popular en aquella época.
* 1995: Microsoft crea su propuesta de lenguaje de programación para la web, JScript.
* 1997: Se crea ECMA, European Computer Manufacturer Association, para estandarizar los múltiples lenguajes de programación que estaban surgiendo por parte de Netscape, Microsoft, y otras empresas más. Este estándar se denomina ECMAScript o ES.

<h3>Evolución de ECMAScript</h3>

A partir de 1997, ECMA empezó a lanzar versiones para estandarizar el lenguaje. Alguna abandonada, como la ES4.

<p align="center"><img width=60% src="./pictures/ecma01.PNG"></p>

A partir de 2015, con ECMAScript 6, fue un antes y después para el lenguaje. Se incluyen varias funcionalidades que situaron a JavaScript como uno de los mejores lenguajes de programación.

<h3>¿Qué aprenderás?</h3>

En este curso aprenderás las nuevas características de cada versión de ECMAScript como:

* Parámetros por defecto
* Plantillas literales
* Declaración de variables con let y const
* Funciones flecha
* Promesas y async / await
* Clases y módulos

<h3>¿Qué puedo o no utilizar de ECMAScript?</h3>

A lo largo de este curso aprenderás nuevas características de JavaScript. Sin embargo, puede que el navegador en el que trabajes no la soporte, esto por el mismo hecho de ser algo nuevo.

Cada navegador web tarda un tiempo en aplicar las nuevas características de ECMAScript. Esto quiere decir, que si utilizas una funcionalidad nueva, el navegador no las procese y colapse tu programa.

Como buena práctica te recomiendo el sitio web Can I use?, que muestra qué funcionalidades añadidas por ECMAScript están soportadas por cada navegador.

Esto es relevante para conocer qué puedes aplicar o qué no en tu código. También sirve para enfocarte en qué navegadores están tus clientes objetivo, y el producto entregado esté correcto para ellos.

<p align="center"><img width=100% src="./pictures/ecma02.png"></p>

Una alternativa a Visual Studio Code es Codi.link, un editor de código para escribir HTML, CSS y JavaScript; para visualizar el resultado a tiempo real.

## ¿Qué es el TC39?

**TC39** es un grupo de desarrolladores, académicos y hackers que están a cargo de revisar cada nueva propuesta o funcionalidad que cumpla con el estándar. El estándar es una serie de pasos que la nueva propuesta **sigue para publicarla en la alguna versión de ECMAScript a futuro**.

<h3>Etapas de una nueva propuesta para ECMAScript</h3>

Las etapas de una nueva propuesta para ECMAScript son:

* **Idea:** Una inquietud del desarrollador.
* **Propuesta**: Cómo y por qué la idea soluciona un problema.
* **Borrador**: Todo lo que implica la nueva funcionalidad detalladamente.
* **Candidato**: La funcionalidad es probada y desarrollada por el comité.
* **Preparada**: La funcionalidad está lista para ser publicada.

<p align="center"><img width=90% src="./pictures/es01.PNG"></p>


## Configurando Nuestras Herramientas

**Plugins importantes para este curso**:

* **Code Runner**. Permite ejecutar piezas de código seleccionadas y muestra el output directamente en nuestro editor de código. (Más de Code Runner)
* **Live Server**. La vamos a utilizar para ejecutar un servidor y ver los cambios efectuados en tu código. (Más de Live Server)
* **JavaScript (ES6)** code snippets. Autocompleta y brinda sugerencias al momento de escribir código. (Más de code snippets)

**Plugins recomendados para usar en tu día a día como frontend developer**

* **Auto Close Tag**. Ayuda a cerrar más rápido las etiquetas que vas abriendo.
* **Error Lens**. Muestra los errores visualizandolos de forma atractiva para que no pases ninguno por alto.
* **Guides**. Te ayudan a indentar tu código y ordenarlo de forma más eficiente.
* **Indent-rainbow.** Hace que la indentación sea más amigable con la ayuda de colores diferentes por nivel.
* **Palenight Theme.** Úsalo si quieres visualizar los mismos colores que se muestran en mi editor de código.

```bash 
npm init  # Se utiliza para inicializar el package.json
          # Si se pasa -y inicia las configuraciones por defecto así npm init -y
```
Es recomendable colocar una descripción del proyecto, en keywords por lo menos 3 palabras que permitan identificar para que sirve el proyecto, para definir autor o autores, se lo hace de la siguiente manera: Tu Nombre < tu@correo >

license: (ISC) MIT Es una licencia permitiva que se puede utilizar en opensource 

## ES6: let y const, y arrow functions

En ECMAScript 6 (ES6 o ES2015) fueron publicadas varias características nuevas que dotaron de gran poder al lenguaje, dos de estas son una nueva forma de declaración de variables con let y const, y funciones flechas.

<h3>La nueva forma para declarar variables con let y const</h3>

Hasta ahora aprendiste a declarar variables con var, sin embargo, a partir de la especificación de ES6 se agregaron nuevas formas para la declaración de variables.

Las nuevas palabras reservadas let y const resuelven varios problemas con var como el scope, hoisting, variables globales, re-declaración y re-asignación de variables.

<h4> Variables re-declaradas y re-asignadas</h4>

La re-declaración es volver a declarar una variable, y la re-asignación es volver a asignar un valor. Entonces cada palabra reservada tiene una forma diferente de manejar variables:

* Una variable declarada con **var** puede ser re-declarada y re-asignada.
* Una variable declarada con **let** puede ser re-asignada, pero no re-declarada.
* Una variable declarada con **const** no puede ser re-declarada, ni re-asignada. Su declaración y asignación debe ser en una línea, caso contrario habrá un error.

En conclusión, si intentas re-declarar una variable declarada con let y const habrá un error de “variable ya declarada”; por otro lado, si intentas re-asignar una variable declarada con const existirá un “error de tipo”.

En los demás casos, JavaScript lo aceptará como válidos, algo problemático con var, por eso deja de utilizarlo.

<h4>Ejemplo de declaración y asignación en diferentes líneas</h4>

```Javascript
// Declaración de variables
var nameVar 
let nameLet

// Asignación de variables
nameVar= "soy var"
nameLet = "soy let"
```
Aunque realmente lo que pasa si no asignas un valor en la declaración, JavaScript le asigna un valor undefined.

<h4>Ejemplo de declarar y asignar con const en diferentes líneas de código</h4>

```Javascript
const pi  // SyntaxError: Missing initializer in const declaration.
pi = 3.14
```

<h4>Ejemplo de re-declaración de variables</h4>

```javascript
var nameVar = "soy var"
let nameLet = "soy let"
const nameConst = "soy const"

// Re-declaración de variables
var nameVar = "var soy" 
console.log(nameVar) // 'var soy'

let nameLet = "let soy" // SyntaxError: Identifier 'nameLet' has already been declared.

const nameConst = "const soy" //SyntaxError: Identifier 'nameConst' has already been declared.
```

<h4>Ejemplo de re-asignación de variables</h4>

```javascript
var nameVar = "soy var"
let nameLet = "soy let"
const nameConst = "soy const"

// Re-asignación de variables
nameVar = "otro var"
console.log(nameVar) // 'otro var'

nameLet = "otro let"
console.log(nameVar) // otro let'

nameConst = "otro const" //TypeError: Assignment to constant variable.
```

Ten en cuenta que los errores pararán la ejecución de tu programa.

<h4>Scope</h4>

En el tema del scope, let y const tienen un scope de bloque y var no.

```javascript
{
var nameVar = "soy var"
let nameLet = "soy let"
}

console.log(nameVar) // 'soy var'
console.log(nameLet) // ReferenceError: nameLet is not defined
```

Todo el tema de Scope tiene su propio curso que deberías haber tomado: Curso de Closures y Scope en JavaScript

<h4>Objeto global</h4>

En variables globales, let y constno guardan sus variables en el objeto global (window, global o globalThis), mientras que var sí los guarda.

```javascript
var nameVar = "soy var"
let nameLet = "soy let"
const nameConst = "soy const"

globalThis.nameVar   // 'soy var'
globalThis.nameLet   // undefined
globalThis.nameConst  // undefined
```

Esto es importante para que no exista re-declaración de variables.

<h4>Funciones flecha</h4>

Las funciones flecha (arrow functions) consiste en una función anónima con la siguiente estructura:

```javascript
//Función tradicional
function nombre (parámetros) {
    return valorRetornado
}

//Función flecha
const nombre = (parámetros) => {
    return valorRetornado
}
```

Se denominan función flecha por el elemento => en su sintaxis.

<h5>Omitir paréntesis en las funciones flecha</h5>

Si existe un solo parámetro, puedes omitir los paréntesis.

```javascript
const porDos = num => {
    return num * 2
}
```
<h4>Retorno implícito</h4>

Las funciones flecha tienen un retorno implícito, es decir, se puede omitir la palabra reservada return, para que el código sea escrito en una sola línea.

```javascript
//Función tradicional
function suma (num1, num2) {
    return num1 + num2
}

//Función flecha
const suma = (num1, num2) => num1 + num2
```

Si el retorno requiere de más líneas y aún deseas utilizarlo de manera implícita, deberás envolver el cuerpo de la función entre paréntesis.

```javascript
const suma = (num1, num2) => (
    num1 + num2
)
```

## ES6: Strings

Las plantillas literales (template literals) consisten en crear cadenas de caracteres que puedan contener variables sin utilizar la concatenación. Esto mejora la legibilidad y la mantenibilidad del código.

<h3>Concatenación de caracteres</h3>

Antes de ES6, si querías crear una cadena larga o un mensaje elaborado, debías utilizar la concatenación. La concatenación de caracteres consiste en unir uno o varios caracteres, como si fuera una suma.

```javascript
var nombre = "Andres"
var edad = 23
var mensaje = "Mi nombre es " + nombre + " y tengo " + edad + " años."

console.log(mensaje)
// 'Mi nombre es Andres y tengo 23 años.'
```

Esto trae varios problemas en la legibilidad y mantenibilidad del código. Se convierte cada vez más complejo en mensajes más extensos o el estar pendiente de agregar espacios antes o después de cada variable concatenada.

<h3>Cómo utilizar las plantillas literales</h3>

Las plantillas literales añadidas en ES6, se emplea el caracter acento grave ```( ` )```, que no es una comilla simple ```( ’ )```, para envolver el mensaje. Para incluir las variables se utiliza la sintaxis ```${variable}```.

```javascript
var nombre = "Andres"
var edad = 23

var mensaje = `Mi nombre es ${nombre} y tengo ${edad} años.`

console.log(mensaje)
// 'Mi nombre es Andres y tengo 23 años.'
```

De esta manera el código es más legible y que pueda mantenerse.

<h3>Plantilla multilínea</h3>

La plantilla multilínea consiste en crear mensajes que contengan varias líneas separadas entre sí, utilizando las plantillas literales. Antes de ES6, la forma de crear una plantilla multilínea era agregar \n al string.

```javascript
var mensaje = "Línea 1 \n" + "línea 2"

console.log(mensaje)
// 'Línea 1
// línea 2'
```

Con ES6 solamente necesitas utilizar las plantillas literales.

``` javascript
const mensaje = `Línea 1
línea 2`

console.log(mensaje)
// 'Línea 1
// línea 2'
```

