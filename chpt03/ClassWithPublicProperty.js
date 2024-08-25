/*
 * TypeScript introduit les modificateurs d'accès public et private pour indiquer si une variable ou une fonction de classe
 * est accessible depuis l'extérieur de la classe elle-même. De plus, nous pouvons également utiliser le modificateur d'accès
 * protected, dont nous parlerons un peu plus tard. Une propriété publique est accessible par n'importe quel code appelant,
 * comme suit :
 * */
var ClassWithPublicProperty = /** @class */ (function () {
    function ClassWithPublicProperty() {
    }
    return ClassWithPublicProperty;
}());
var publicAccess = new ClassWithPublicProperty();
publicAccess.id = 10;
// Ici, nous avons défini une classe nommée ClassWithPublicProperty, qui possède une seule propriété nommée id qui a été marquée
// comme publique. Cela signifie que nous sommes en mesure de définir la valeur de la propriété id une fois que nous avons créé
// une instance de cette classe, qui dans ce cas a été définie sur la valeur 10.
