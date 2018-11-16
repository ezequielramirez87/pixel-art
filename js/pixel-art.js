var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];
// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
let colorActual;
colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    indicador.style.backgroundColor=colorActual;
    // Completar para que cambie el indicador-de-color al colorActual
  })
);
//Variables que nesesito
let grillaPixes=document.getElementById("grilla-pixeles")
let paleta=document.getElementById("paleta");
let indicador=document.getElementById("indicador-de-color");
indicador.style.background="white";
let seleccionado;
let colorPaleta
let mouse;
//Funciones para crear paleta y grilla
function crearPaleta(){
  for(let i=0;i<nombreColores.length;i++){
    let color=document.createElement("div");
    color.style.backgroundColor=nombreColores[i];
    color.className="colorPaleta";
    paleta.appendChild(color);
  }
};
function crearGrilla(){
  for(let i=0;i<1749;i++){
    let pixel=document.createElement("div");
    pixel.className="pixel";
    grillaPixes.appendChild(pixel);
  }
};
crearGrilla();
crearPaleta();
//funciones para seleccionar color
colorPaleta=document.getElementsByClassName("colorPaleta");
for (let i=0; i<colorPaleta.length; i++){
colorPaleta[i].addEventListener( "click" , seleccionarColor)
}
function seleccionarColor(){
  seleccionado=this.style.backgroundColor;
  indicador=document.getElementById("indicador-de-color");
  indicador.style.backgroundColor=seleccionado;
};
//funcion para saber si el mouse esta apretado o no.
grillaPixes.addEventListener("click",pintar);
grillaPixes.addEventListener("mousemove",pintarDeCorrido);
mouse = false;
$(document).mousedown(function() {
    mouse = true;
}).mouseup(function() {
    mouse = false;
});
//funcion para pintar.
function pintar(e){
e.target.style.backgroundColor = $("#indicador-de-color").css("background-color");
};
function pintarDeCorrido(e){
if(mouse===true){
  pintar(e);
}};
 let apretado = false;
$(document).mousedown(function() {
  apretado = true;
}).mouseup(function() {
  apretado = false;
});
//Funcion para borrar
$("#borrar").click( function(){
$("#grilla-pixeles div").animate({"background-color": "white"}, 1000);
})
//cargar super heroes
$("#batman").click(function(){
cargarSuperheroe(batman)
})
$("#wonder").click(function(){
cargarSuperheroe(wonder)
})
$("#flash").click(function(){
cargarSuperheroe(flash)
})
$("#invisible").click(function(){
cargarSuperheroe(invisible)
})
//Funcion para guardar
$("#guardar").click(function(){
guardarPixelArt()
})
//funcion balde de pintura
let $balde=$("#balde")
let $pintarBalde=$(".pixel")
$balde.click(function(){
  let colorBalde=indicador.style.backgroundColor;
  for(let i=0; i<$pintarBalde.length;i++){
    $pintarBalde[i].style.backgroundColor=colorBalde;
  }
})
