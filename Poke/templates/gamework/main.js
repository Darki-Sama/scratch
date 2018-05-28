Game = {

// Propiedades que definen el tamaño de la celda  
anchoCelda : 32,
altoCelda : 32,
   
start:function(){
  
// Definimos la matriz del mapa
  var mapa = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
              [1, 0, 2, 2, 0, 2, 0, 2, 2, 1],
              [1, 0, 0, 2, 0, 2, 0, 0, 0, 1],
              [1, 2, 0, 2, 0, 2, 2, 2, 0, 1],
              [1, 2, 0, 0, 0, 0, 0, 2, 0, 1],
              [1, 2, 2, 2, 0, 2, 0, 2, 0, 1],
              [1, 0, 0, 0, 0, 2, 0, 2, 0, 1],
              [1, 0, 2, 2, 0, 2, 0, 2, 0, 1],
              [1, 0, 2, 2, 0, 2, 0 ,0 ,0, 1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];

// Definimos el tamaño del canvas o tapiz.
  var anchoCanvas = mapa[0].length * Game.anchoCelda;
  var largoCanvas = mapa.length * Game.altoCelda;

  Crafty.init(anchoCanvas, largoCanvas);
  Crafty.background('rgb(249, 223, 125)');

// Recorremos la matriz del mapa como si las x fueran las horizontales y las y las verticales
  for (var x = 0; x < mapa[0].length; x++) {
    for (var y = 0; y < mapa.length; y++) {
              
      if (mapa[y][x]==1) {     // Fijaos en el cambio de x por y
          // Colocamos una entidad muro exterior
          Crafty.e('2D, Canvas, Color')
            .attr({
              x: x * Game.anchoCelda,
              y: y * Game.altoCelda,
              w: Game.anchoCelda,
              h: Game.altoCelda,
            })
            .color('black');
      }
      
      if (mapa[y][x]==2) {
          // Colocamos una entidad muro interior
          Crafty.e('2D, Canvas, Color')
            .attr({
              x: x * Game.anchoCelda,
              y: y * Game.altoCelda,
              w: Game.anchoCelda,
              h: Game.altoCelda,
            })
            .color('brown');
      }
    }
  }
}
}