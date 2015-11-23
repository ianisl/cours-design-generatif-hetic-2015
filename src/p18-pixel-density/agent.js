function createAgent(position) {

    // Création du nouvel objet 'agent'
    var a = {};

    // Initialisation
    a.position = typeof position !== 'undefined' ? position : createVector(random(width), random(height)); // Si aucune position n'est fournie, initialisation avec une position aléatoire
    a.previousPosition = a.position.copy();
    a.angle = random(TWO_PI);
    a.stepSize = 1;
    a.isPositionResetWhenOutside = true;

    // Une méthode mettant à jour de la position de l'agent en fonction de son angle actuel
    a.updatePosition = function() {
        this.previousPosition = this.position.copy();
        this.position.x += cos(this.angle) * this.stepSize;
        this.position.y += sin(this.angle) * this.stepSize;
        if (this.isPositionResetWhenOutside && this.isOutsideSketch() > 0) {
            this.position = createVector(random(width), random(height));
            this.previousPosition = a.position.copy();
        }
    }

    // Une méthode permettant de vérifier si l'agent est sorti des limites de l'espace du sketch (+ marges)
    // La méthode renvoie les valeurs suivantes :
    // 0: l'agent n'est pas sorti des limites de l'espace du sketch
    // 1: l'agent est sorti par le haut
    // 2: l'agent est sorti par la droite
    // 3: l'agent est sorti par le bas
    // 4: l'agent est sorti par la gauche
    a.isOutsideSketch = function() {
        if (this.position.y < 0)
        {
            return 1;
        }
        else if (this.position.x > width)
        {
            return 2;
        }
        else if (this.position.y > height)
        {
            return 3;
        }
        else if (this.position.x < 0)
        {
            return 4;
        }
        else
        {
            return 0;
        }
    }

    // Retour de l'object 'agent'
    return a;

}