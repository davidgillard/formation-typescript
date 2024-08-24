/*
 * Une classe est la définition d'un objet, quelles données il contient et quelles opérations il peut effectuer.
 * Les classes et les interfaces forment la pierre angulaire de la programmation orientée objet. Jetons un coup d'œil
 * à une définition de classe simple, comme suit:
*/
var SimpleClass = /** @class */ (function () {
    function SimpleClass() {
    }
    SimpleClass.prototype.print = function () {
        console.log("SimpleClass.print() called.");
    };
    return SimpleClass;
}());
// Ici, nous avons défini une classe, en utilisant le mot-clé de classe, qui est nommé Simpleclass, et a une propriété ID
// du numéro de type, et une fonction d'impression, qui enregistre simplement un message à la console. Remarquez quelque chose
// qui ne va pas avec ce code? Eh bien, le compilateur générera un message d'erreur comme suit
// Ce que cette erreur indique, c'est que si nous créons une instance de cette classe, la classe nouvellement créée ne verra pas
// la propriété ID initialisée, et elle ne sera donc pas définie. Si notre code s'attend à ce que la propriété ID ait une valeur,
// nous pourrions être surpris lorsqu'il retourne non défini, et le compilateur nous avertit de cette erreur potentielle. Il existe
// deux façons de corriger cette erreur du compilateur. Nous pourrions le définir sur une valeur par défaut telle que 0, ou nous 
// pourrions simplement faire de la propriété ID une union de type, comme suit: 
// id: number | undefined;
// Ici, nous avons spécifié que la propriété ID pourrait être un nombre, ou elle pourrait être indéfinie. Nous prenons donc une décision
// consciente au sein de notre code que nous sommes préparés à ce que cette valeur ne soit pas définie. Afin d'utiliser notre définition
// de classe Simpleclass, nous devrons créer une instance de cette classe comme suit:
var mySimpleClass = new SimpleClass();
mySimpleClass.print();
// Ici, nous avons défini une variable nommée MySimpleclass et la définissons sur une nouvelle instance de la classe SimpleClass en utilisant
// le nouveau mot-clé. Une fois l'instance de cette classe créée, nous appelons la fonction print(). La sortie de ce code est la suivante:
// SimpleClass.print() called.
