/*
 * Il existe une relation très forte entre les classes et les interfaces, en particulier dans les modèles de conception orientés objet.
 * Une interface décrit un type personnalisé et peut inclure à la fois des propriétés et des fonctions. Une classe est la définition d'un objet,
 * incluant également ses propriétés et ses fonctions. Cela nous permet d'utiliser des interfaces pour décrire un comportement commun dans
 * un ensemble de classes et d'écrire du code qui fonctionnera avec cet ensemble de classes. À titre d'exemple, considérons les définitions
 * de classe suivantes:*/
var ClassA = /** @class */ (function () {
    function ClassA() {
    }
    ClassA.prototype.print = function () {
        console.log("ClassA.print() called.");
    };
    ;
    return ClassA;
}());
var ClassB = /** @class */ (function () {
    function ClassB() {
    }
    ClassB.prototype.print = function () {
        console.log("ClassB.print() called.");
    };
    ;
    return ClassB;
}());
function printClass(a) {
    a.print();
}
// Ici, nous avons défini une interface nommée iPrint qui contient une seule fonction nommée print() et renvoie void.
// Nous avons ensuite une fonction nommée PrintClass qui prend un seul paramètre nommé a, et est de type iPrint. 
// Nous utilisons l'interface iPrint dans cette définition de fonction pour décrire les attributs d'un objet qui peut
// être transmis en tant que paramètre. Nous pouvons maintenant mettre à jour nos définitions de classe et les marquer
// comme étant utilisables par la fonction printClass.
// Ici, nous utilisons le mot-clé TypeScript implément pour indiquer que ClassA et ClassB implémentent l'interface iPrint,
// et sont donc utilisables par notre fonction PrintClass. Nous pouvons maintenant utiliser cette fonction comme suit:
var classA = new ClassA();
var classB = new ClassB();
printClass(classA);
printClass(classB);
// Ici, nous avons créé une instance de chacune de nos classes et les avons affectées aux variables classA et classB. Nous passons
// ensuite ces variables dans notre fonction printClass en tant qu'arguments. Le résultat de ce code est le suivant :
// ClassA.print() called.
// ClassB.print() called.
// Les interfaces peuvent donc être considérées comme un type de contrat que les classes doivent implémenter, si elles sont censées fournir
// certaines propriétés et certains comportements. Notez que les règles de typage de canard de TypeScript garantissent qu'une classe particulière
// a la forme correcte lorsqu'elle est utilisée, même si elle n'implémente pas l'interface comme décrit. À titre d'exemple, considérons le code
// suivant :
var ClassC = /** @class */ (function () {
    function ClassC() {
    }
    ClassC.prototype.print = function () {
        console.log("ClassC.print() called.");
    };
    ;
    return ClassC;
}());
var classC = new ClassC();
printClass(classC);
