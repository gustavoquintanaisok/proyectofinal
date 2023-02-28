console.log('hello world!')

const { createApp } = Vue
createApp({
 data() {
 return {
 mensaje: 'click en refrescar cambia la imagen  ',

 claseCSS: 'nuevaClase',
 url: 'file:///C:/Users/54113/Desktop/cv/multimedia.html',
 src:'https://source.unsplash.com/random/800x600',
ClaseCSS2:'nuevaClase2',
 }
 }
}).mount('#app')
