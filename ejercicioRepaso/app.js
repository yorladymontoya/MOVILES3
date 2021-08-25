//document.querySelector('h1').style.color="blue";
//let h1rojo = document.querySelector("h1");

//h1rojo.addEventListener('mouseover',function(){ alert('Click en el h1')});
//h1rojo.onclick(alert('Click en el h1')});

document.addEventListener('DOMContentLoaded', function(){
    
    const images = [
        { 'name': 'Cascada',
          'img' : 'imagenes/Cascada.jpeg'},
          { 'name': 'Jacuzzi',
          'img' : 'imagenes/Jacuzzi.jpg'},
          {'name': 'Laguna',
          'img' : 'imagenes/Laguna.jpeg'},
          {'name': 'Mirador',
          'img' : 'imagenes/Mirador.jpeg'},
          {'name': 'PlayaHotel',
          'img' : 'imagenes/PlayaHotel.jpeg'},
          {'name': 'signo',
          'img' : 'imagenes/signo.jpg'},
    ]
    let tarjetas = document.querySelector('.tarjetas');
    let imgElegida = [];
    let imgElegidaId=[];
  

    function crearCuadros() {
        for (let i = 0; i < images.length; i++) {
           const img = document.createElement('img');
           img.setAttribute('src', 'imagenes/signo.jpg');
           img.setAttribute('data-id' , i);
           img.setAttribute('style', 'width:300px');
            tarjetas.appendChild(img);
        }
    }
    function comparar() {
        let imgId= this.getAttribute('data-id');

    }

})

