let imgs = []
let basquiat, warhol, kusama, haring;

function preload() {
  basquiat = loadImage('basquiat.jpg');
  warhol = loadImage('warhol.jpg');
  kusama = loadImage('kusama.jpg');
  haring = loadImage('haring.jpg');
}

function setup() {
  frameRate(3)
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  background(50);
  imgs.push(basquiat);
  imgs.push(warhol);
  imgs.push(kusama);
  imgs.push(haring);
}

function draw() {
  background(50);  
  
  let A = random(imgs);
  artist(A,100,100);

  filter(POSTERIZE,random, 6);
  BLUR (random(100,100),random(200,200),random(200,150),random(150,200));
  artist(imgs[0,30],random(100,200));
  artist(imgs[0,20],random(100,200));
  artist(imgs[0,10],random(100,200)); 

}
