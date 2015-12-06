// Une fonction 'usine' fabriquant un champ de force basé sur un bruit de Perlin.è

function createPerlinField(fieldIntensity, fieldScale) {

    // Création du nouvel objet 'Perlin Field'
    var f = {};

    // Initialisation
    f.fieldIntensity = fieldIntensity;
    f.fieldScale = fieldScale;

    // Une méthode permettant d'obtenir la valeur du champ de force à une position donnée
    f.getFieldValue = function(position) {
        return noise(position.x / this.fieldScale, position.y / this.fieldScale) * this.fieldIntensity;
    };

    // Retour de l'object 'Perlin Field'
    return f;

}