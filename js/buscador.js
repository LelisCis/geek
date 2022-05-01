const productos = [

{nombre: 'Taza Stormtrooper', valor: 60},
{nombre: 'Sujetalibros Darth Vader', valor: 60},
{nombre: 'Yoda', valor: 60},
{nombre: 'Stormtrooper', valor: 60},
{nombre: 'Baby Yoda', valor: 60},
{nombre: 'Kylo Ren', valor: 60},
{nombre: 'Joystick inalámbrico', valor: 60},
{nombre: 'Consolas y control', valor: 60},
{nombre: 'Nintendo', valor: 60},
{nombre: 'Set de joystick', valor: 60},
{nombre: 'Consola XYZ', valor: 60},
{nombre: 'Game boy color', valor: 60},
{nombre: 'Camisa atari', valor: 60},
{nombre: 'Camisa SNES', valor: 60},
{nombre: 'Objeto decorativo', valor: 60},
{nombre: 'Radio reloj vintage', valor: 60},
{nombre: 'Lente de realidad virtual', valor: 60},
{nombre: 'Pikachu', valor: 60},

]

const buscador = document.querySelector("#buscador");
const boton = document.querySelector("#boton-buscador");
const resultado = document.querySelector("#resultado");

const filtrar = ()=>{
resultado.innerHTML = '';

const texto = buscador.value.toLowerCase(); 
for(let producto of productos){
    let nombre = producto.nombre.toLowerCase();   
    if(nombre.indexOf(texto) !== -1){ 
        resultado.innerHTML += ` 
        <li class="lista-buscador" style="border:solid 1px #2A7AE4;">${producto.nombre} - Valor: ${producto.valor}</li>
        `

    }
    }
    if(resultado.innerHTML === ''){     
        resultado.innerHTML += ` 
        <li class="lista-buscador" style="border:solid 1px #2A7AE4;">Producto no encontrado...</li>
        `
    }

}
    
boton.addEventListener('click', filtrar);
// buscador.addEventListener('keyup', filtrar);



