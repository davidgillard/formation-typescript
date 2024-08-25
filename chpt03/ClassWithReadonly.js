/*
 * En plus des modificateurs d'accès public et privé, nous pouvons également marquer une propriété de classe comme étant en lecture
 * seule. Cela est similaire au concept du mot-clé const et signifie qu'une fois qu'une valeur a été attribuée à une propriété en
 * lecture seule, elle n'est pas autorisée à être modifiée, comme suit :
 * */
var ClassWithReadonly = /** @class */ (function () {
    function ClassWithReadonly(_name) {
        this.name = _name;
    }
    ClassWithReadonly.prototype.setNameValue = function (_name) {
        this.name = _name;
    };
    return ClassWithReadonly;
}());
// Ici, nous avons une classe nommée ClassWithReadonly qui possède une seule propriété nommée name, de type string, qui a été marquée comme étant en lecture seule.
// Nous avons ensuite une fonction constructeur, qui accepte un seul paramètre nommé _name. Notez comment nous affectons la valeur du paramètre _name entrant à la
// propriété interne readonly name de notre classe. Les propriétés readonly ne peuvent être définies que dans la fonction constructeur. Nous avons ensuite une fonction
// nommée setNameValue qui tente de définir la valeur de la propriété interne name, mais qui n'est pas une fonction constructeur. Ce code génère l'erreur suivante :
