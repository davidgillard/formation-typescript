/*
 * TypeScript introduit également une version abrégée des modificateurs d'accès qui peuvent être appliqués aux paramètres d'une fonction constructeur.
 * À titre d'exemple, considérons le code suivant :
 * */
var ClassWithCtorMods = /** @class */ (function () {
    function ClassWithCtorMods(id, name) {
        this.id = id;
        this.name = name;
    }
    return ClassWithCtorMods;
}());
var myClassMod = new ClassWithCtorMods(1, "test");
console.log("myClassMod.id = ".concat(myClassMod.id));
console.log("myClassMod.name = ".concat(myClassMod.name));
// Ici, nous avons défini une classe nommée ClassWithCtorMods qui possède une seule fonction constructeur. Cette fonction
// constructeur possède deux paramètres. Le premier est nommé id et est de type number, et le second est nommé name et est
// de type string. Notez cependant que nous avons marqué la propriété id comme publique dans la définition de la fonction
// constructeur et que nous avons marqué la propriété name comme privée. Ce raccourci crée automatiquement une propriété 
// id interne et une propriété name sur la classe elle-même, qui peuvent être utilisées comme propriétés standard. Nous 
// créons ensuite une instance de cette classe et l'assignons à une variable nommée myClassMod. Nous enregistrons ensuite 
// la valeur de la propriété id et de la propriété name sur la console. Ce code, cependant, génère l'erreur suivante :
