let rotacion = 0;
let desplazamiento = 0;

function setup() {
 
  createCanvas(500, 500);
 
  colorMode(HSB, 90, 100, 100, 100);
 
  angleMode(DEGREES);
  
  colorBase = random(0,50); // cambio de colores
}

function draw() {

  // fondo
  background(colorBase + frameCount % 50, 80, 20);
  
  // variables en el tiempo
  rotacion = rotacion + 0.6;
  desplazamiento = desplazamiento + 3;
  
  //___________________________figuras_________________________________
  
 // circulo central
  fill(0, 0, 100);
  ellipse(width * 0.5, height/2, width * 0.3);
  
  // rectangulo rotando
  noStroke();
  fill(0, 90, 80);
  push();
  translate(width/2, height/2);
  rotate(rotacion);
  rectMode(CENTER);
  rect(0, 0, width, 20);
  pop();
  
  // triangulo
  push();
  let x = desplazamiento % (width + 100);
  
  fill(0);
  noStroke();
  
  triangle(
    x, height/2,
    x - 80, height/2 - 50,
    x - 80, height/2 + 50
  );
  pop();
  
    // circulo que sigue el mouse 
  fill(0, 0, 100);
  ellipse(mouseX, mouseY, 30 + sin(frameCount * 0.2) * 10);
  }
