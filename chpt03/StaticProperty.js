/*
 * De la même manière que les fonctions statiques, les classes peuvent également avoir des propriétés statiques. Si une propriété de classe
 * a été marquée comme statique, il n'y aura qu'une seule instance de cette propriété dans toute la base de code. Considérez le code suivant :
 * */
var StaticProperty = /** @class */ (function () {
    function StaticProperty() {
    }
    StaticProperty.prototype.updateCount = function () {
        StaticProperty.count++;
    };
    StaticProperty.count = 0;
    return StaticProperty;
}());
// Ici, nous avons défini une classe nommée StaticProperty qui possède une seule propriété nommée count qui a été marquée
// comme statique. Nous avons ensuite défini une fonction nommée updateCount qui augmentera la valeur de la propriété statique
// count d'une unité à chaque fois qu'elle est appelée. Considérez comment cette classe est utilisée, comme suit :
var firstInstance = new StaticProperty();
var secondInstance = new StaticProperty();
firstInstance.updateCount();
console.log("StaticProperty.count = ".concat(StaticProperty.count));
secondInstance.updateCount();
console.log("StaticProperty.count = ".concat(StaticProperty.count));
// Ici, nous avons créé deux variables nommées firstInstance et secondInstance qui contiennent des instances de la classe StaticProperty.
// Nous appelons ensuite la fonction updateCount sur la variable firstInstance et enregistrons la valeur de la propriété count de la classe
// StaticProperty dans la console. Nous utilisons ensuite la variable secondInstance pour appeler à nouveau la fonction updateCount, cette
// fois sur une autre instance de la classe StaticProperty. La sortie de ce code est la suivante :
// StaticProperty.count = 1
// StaticProperty.count = 2
// Ici, nous pouvons voir que les deux appels à la fonction updateCount, qu'ils proviennent de la variable firstInstance ou de la variable 
// secondInstance, ont mis à jour la valeur de la propriété statique count. Cela montre que si une propriété de classe a été marquée comme statique,
// il n'y aura qu'une seule instance de cette propriété dans toute la base de code.
