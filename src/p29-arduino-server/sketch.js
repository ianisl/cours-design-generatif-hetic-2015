// Paramètres
var fieldIntensity = 10;
var fieldScale = 300;
var agentCount = 200;
var agentSize = 1.5;
var agentAlpha = 90;
var backgroundAlpha = 15;
var webPort = 8080;
/////////////

var field;
var agents;
var socket;

function setup() {
    createCanvas(600, 600);
    field = createPerlinField(fieldIntensity, fieldScale);
    agents = [];
    var a;
    for (var i = agentCount - 1; i >= 0; i--) {
        a = createAgent();
        agents.push(a);
    };
    socket = io.connect('http://localhost:' + webPort);
    socket.on('input', function(data) {
        field.fieldScale = map(data, 0, 1023, 1, 500); // La valeur lue sur le potentiomètre est dans la plage 0-1023
    });
    background(255);
}

function draw() {
    background(255, backgroundAlpha);
    agents.forEach(function(a) {
        a.angle = field.getFieldValue(a.position);
        a.updatePosition();
        stroke(0, agentAlpha);
        strokeWeight(agentSize);
        line(a.previousPosition.x, a.previousPosition.y, a.position.x, a.position.y);
    });
}

function refreshBackground() {
    background(255);
}