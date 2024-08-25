/*
 * JavaScript fournit l'opérateur instanceof pour tester si le nom de fonction donné apparaît dans le prototype d'un objet. 
 * En termes TypeScript, l'utilisation de ce mot-clé nous permet de détecter si un objet est une instance d'une classe ou 
 * s'il est dérivé d'une classe particulière. Ceci est mieux illustré par un exemple, comme suit : 
 * */
class A { } 
class BfromA extends A { }
class CfromA extends A { }
class DfromC extends CfromA { }

// Ici, nous avons défini quatre classes dans une hiérarchie de classes, en commençant par une classe simple nommée A. Nous définissons
// ensuite deux classes qui dérivent de la classe A, nommées BfromA et CfromA. Nous définissons ensuite une classe finale qui dérive de
// CfromA, nommée DfromA, ce qui signifie qu'elle dérive également de A indirectement. Testons comment cette hiérarchie est interprétée
// par l'opérateur instanceof, comme suit :

console.log(`A instanceof A: ${new A() instanceof A}`);
console.log(`BfromA instanceof A: ${new BfromA() instanceof A}`);
console.log(`BfromA instanceof BfromA: ${new BfromA() instanceof BfromA}`);

// Ici, nous commençons par le cas le plus simple, en testant si une nouvelle instance de la classe A sera interprétée correctement par l'opérateur
// instanceof. Nous testons ensuite si une instance de la classe BfromA sera également vue comme une instance de la classe A, et enfin si une instance
// de la classe BfromA sera vue comme une instance de la classe BfromA. Le résultat de ce code est le suivant :

// A instanceof A: true
// BfromA instanceof A: true
// BfromA instanceof BfromA: true

// Ici, nous pouvons voir que l'opérateur instanceof renvoie true pour tous ces cas. Cela correspond à la hiérarchie de classes que nous avons définie.
// Testons maintenant un cas négatif, comme suit :

console.log(`CfromA instanceof BfromA: ${new CfromA() instanceof BfromA}`);

// Ici, nous vérifions si la classe CfromA est une instance de la classe BfromA. Les deux classes sont dérivées de A, mais CfromA n'est pas liée à la classe
// BfromA et produira la sortie suivante :

// CfromA instanceof BfromA: false

// Ici, nous pouvons voir que la classe CfromA n'est pas dérivée de la classe BfromA. Vérifions maintenant les résultats de l'héritage d'une classe qui hérite
// d'une autre classe, comme suit :

console.log(`DfromC instanceof CfromA: ${new DfromC() instanceof CfromA}`);
console.log(`DfromC instanceof A: ${new DfromC() instanceof A}`);

// Ici, nous vérifions si la classe DfromC peut être considérée comme une instance de la classe CfromA, puis nous vérifions si la classe DfromC peut être considérée
// comme une instance de la classe A. Le résultat de ce code est le suivant :

// DfromC instanceof CfromA: true
// DfromC instanceof A: true

// Ici, nous pouvons voir que la classe DfromC hérite de la classe CfromA. Comme la classe CfromA hérite de la classe A, la classe DfromC hérite également de la classe A.
