(function() {

    var faders = []; // Stockage dans une fermeture de la liste de tous les faders actifs dans notre sketch

    p5.prototype.createColorFader = function(x, y, z, xStep, yStep, zStep) {
        var f = {};
        f.x = x; // 'x' : 'red' ou 'hue'
        f.y = y; // 'y' : 'green' ou 'saturation'
        f.z = z; // 'x' : 'blue' ou 'brightness'
        f.xStep = xStep;
        f.yStep = yStep;
        f.zStep = zStep;
        f.update = function() {
            f.x += xStep;
            f.y += yStep;
            f.z += zStep;
        };
        faders.push(f); // Ajout du fader nouvellement créé à la liste
        return f;
    };

    // Méthode de mise à jour de tous les faders
    p5.prototype.updateColorFaders = function() {
        faders.forEach(function(f) {
            f.update();
        });
    };

    // Mise en place de l'appel automatique de 'p5.prototype.updateColorFaders' au début de chaque boucle draw de notre sketch
    p5.prototype.registerMethod('pre', p5.prototype.updateColorFaders);

}());
