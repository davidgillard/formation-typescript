/*
 * Lors de l'utilisation de l'héritage, il est assez courant qu'une classe de base et une classe dérivée implémentent la même méthode.
 * Cela se produit le plus souvent avec les constructeurs de classe. Si une classe dérivée possède un constructeur, ce constructeur doit
 * appeler le constructeur de la classe de base à l'aide du mot-clé super, sinon TypeScript génère une erreur, comme suit :
 * */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseClassWithFn = /** @class */ (function () {
    function BaseClassWithFn() {
    }
    BaseClassWithFn.prototype.print = function (text) {
        console.log("BaseClassWithFn.print() : ".concat(text));
    };
    return BaseClassWithFn;
}());
var DerivedClassFnOverride = /** @class */ (function (_super) {
    __extends(DerivedClassFnOverride, _super);
    function DerivedClassFnOverride() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DerivedClassFnOverride.prototype.print = function (text) {
        console.log("DerivedClassFnOverride.print(".concat(text, ")"));
    };
    return DerivedClassFnOverride;
}(BaseClassWithFn));
// Ici, nous avons défini une classe nommée BaseClassWithFn qui a une seule fonction d'impression, avec un seul paramètre nommé text de type string.
// Nous définissons ensuite une classe nommée DerivedClassFnOverride qui hérite de la classe BaseClassWithFn, et qui a également une seule fonction
// d'impression avec les mêmes paramètres et types. L'implémentation de la fonction d'impression de la classe dérivée remplace l'implémentation de
// la fonction d'impression de la classe de base, comme le montre le comportement du code suivant :
var derivedClassFnOverride = new DerivedClassFnOverride();
derivedClassFnOverride.print("test");
// Ici, nous avons créé une nouvelle instance de la classe DerivedClassFnOverride et appelé sa fonction d'impression avec l'argument "test". La sortie
// de ce code est la suivante :
// DerivedClassFnOverride.print(test)
// Comme nous pouvons le voir à partir de cette sortie, l'implémentation de la fonction print de la classe dérivée est appelée et remplace l'implémentation
// de la classe de base. Nous pouvons cependant toujours appeler l'implémentation de la fonction de la classe de base à l'aide du mot-clé super, comme suit :
var DerivedClassFnCallthrough = /** @class */ (function (_super) {
    __extends(DerivedClassFnCallthrough, _super);
    function DerivedClassFnCallthrough() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DerivedClassFnCallthrough.prototype.print = function (text) {
        _super.prototype.print.call(this, "from DerivedClassFnCallthrough : ".concat(text));
    };
    return DerivedClassFnCallthrough;
}(BaseClassWithFn));
var derivedCallthrough = new DerivedClassFnCallthrough();
derivedCallthrough.print("text");
// Ici, nous avons défini une classe nommée DerivedClassFnCallthrough qui hérite de la classe BaseClassWithFn et qui possède également une substitution
// de fonction pour la fonction d'impression. L'implémentation de cette fonction d'impression appelle cependant l'implémentation de la classe de base à
// l'aide du mot-clé super, c'est-à-dire super.print. Pour tester que cela fonctionne, nous avons créé une instance de la classe DerivedClassFnCallthrough
// nommée derivedCallThrough et appelé la fonction d'impression. La sortie de ce code est la suivante :
// DerivedClassFnOverride.print(test)
// BaseClassWithFn.print() : from DerivedClassFnCallthrough : text
// Ici, nous pouvons clairement voir que la fonction d'impression de la classe de base a été invoquée par la fonction d'impression de la classe dérivée,
// grâce à l'utilisation du mot-clé super.
