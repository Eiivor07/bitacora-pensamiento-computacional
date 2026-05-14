let balon;
let dinho;

let velocidad = 5;

//let posX = 0;
let posY = 0;

let colorFiltro;

//varaible direccion
//let dirX = 1;
//let dirY = -1;

function setup() {
  createCanvas(400, 400);
  balon = loadImage("./balon.jpg")
  dinho = loadImage("./ronalfinhofulbo.jpg")
  colorFiltro = color(255);
}

function draw() {
  tint(colorFiltro);
  background(dinho);
  image(balon, width*0.2/5, posY, 100, 100);
  
  //movimiento del balón
  //dir es hacia la derecha si es 1
  //hacia la izquierda si es -1
  //posX = posX + 1 * dirX;
  
   posY = posY + velocidad;
  
  //si el balón baja demasiado (toca la línea de 380)
  if (posY > 280) { 
    velocidad = random(-5, -10); //velocidad al azar hacia ARRIBA
    colorFiltro = color(random(255), random(255), random(255));
  }

  //si el balón sube demasiado (toca la línea de 20)
  if (posY < 20) {
    velocidad = random(5, 10); //velocidad al azar hacia ABAJO
    colorFiltro = color(random(255), random(255), random(255));
  }
  //lineas
  //hrizontales
  line(1, 20, 400, 20)
  line(1, 380, 400, 380)
  //verticales
  line(width*0.2/5, 0, width*0.2/5, height);
  line(width*4.8/5, 0, width*4.8/5, height);
}