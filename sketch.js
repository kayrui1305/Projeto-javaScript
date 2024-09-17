let cor;

let circuloX;
let circuloY;
function setup() {
  createCanvas(400, 400);
  cor=color(random (0,255),random (0,255),random (0,255), random (0,100));
  
circuloX=[0, 0];
circuloY=[random(0,200), random(0,200)];
}

function draw() {
fill(cor);
for(let contador in circuloX){
circle(circuloX[contador],circuloY[contador],30);
  circuloX[contador]+=random(0,3);
  circuloY[contador]+=random(-3,3);
  ir(circuloX)
}
  if(mouseIsPressed){
    cor = color(random(0,255), random(0,255),random(0,255), random(0,100));


}
}
