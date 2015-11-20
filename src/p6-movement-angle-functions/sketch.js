// Paramètres
var agentSize = 10;
var stepSize = 2;
// ----------

var agentPosition;
var agentAngle;

function setup() {
    createCanvas(600, 600);
    initPosition();
    agentAngle = random(0, TWO_PI);
    background(255);
}

function draw() {
    // Mise à jour de la position
    updatePosition();
    // Conditions aux limites
    if (agentPosition.x < 0 || agentPosition.x > width || agentPosition.y < 0 || agentPosition.y > height) {
        initPosition();
    }
    // Dessin
    background(255);
    noStroke();
    fill(0);
    ellipse(agentPosition.x, agentPosition.y, agentSize, agentSize);
}

function initPosition() {
    agentPosition = createVector(random(width), random(height));
}

function updatePosition() {
    agentPosition.x += cos(agentAngle) * stepSize;
    agentPosition.y += sin(agentAngle) * stepSize;
}