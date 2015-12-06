// Serveur permettant de transmettre à un serveur Web les valeurs d'un potentiomètre connecté une carte Arduino
// Schéma de câblage du potentiomètre : http://johnny-five.io/examples/potentiometer/

// Paramètres
var webPort = 8080; // Port utilisé pour la communication avec le navigateur
/////////////

var server = require('http').createServer(handler),
    io = require('socket.io')(server),
    five = require("johnny-five");

var board = new five.Board({'repl': false}); // Initialisation de la connexion avec la carte Arduino (avec désactivation du REPL fourni par Johnny Five)
board.on('ready', function() {
    // Démarrage du serveur Web
    server.listen(webPort);
    io.sockets.on('connection', function(socket) {
        console.log('Connection established');
        // Création d'un objet représentant un potentiomètre
        potentiometer = new five.Sensor({
            pin: "A0", // Broche sur laquelle est branché le potentiomètre
            freq: 50 // Fréquence de lecture du potentiomètre
        });
        potentiometer.on('data', function() {
            socket.emit('input', this.value); // Émission d'un évènement 'input' pour envoyer les données au navigateur
        });
    });
});

function handler(req, res) {
    // Il n'est pas nécessaire de spécifier un handler si l'application client est ouverte localement
}