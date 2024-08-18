/*
 * TypeScript fournit une alternative aux types d'union lors de la définition d'une fonction et permet à une signature
 * de fonction de fournir différents types de paramètres. Considérez le code suivant :*/

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any) {
  return a + b;
}

// Ici, nous avons défini une définition de fonction nommée add qui accepte deux paramètres, nommés a et b, qui sont tous 
// deux de type chaîne, et renvoie une chaîne. Nous avons ensuite défini une autre fonction du même nom, add, qui accepte
// deux paramètres nommés a et b qui sont de type nombre, qui renvoie un nombre. Notez qu'aucune de ces définitions de 
// fonction n'a d'implémentation de fonction réelle. Enfin, nous définissons une fonction, toujours avec le nom de add,
// qui accepte deux paramètres nommés a et b mais qui sont de type any. Cette définition de fonction fournit également une
// implémentation de fonction, qui renvoie simplement l'addition des arguments a et b. Cette technique est utilisée pour 
// fournir ce que l'on appelle des substitutions de fonction. Nous pouvons appeler cette fonction avec deux arguments de 
// type chaîne, ou deux arguments de type nombre, comme suit :

add("first", "second");
add(1, 2);
add(true, false);

// Ici, nous avons invoqué la fonction add avec trois types d'arguments. Tout d'abord, nous l'invoquons avec deux arguments
// de type chaîne. Nous l'invoquons ensuite avec deux arguments de type nombre. Enfin, nous invoquons la fonction add avec 
// deux arguments de type booléen. Cette dernière ligne de code va générer l'erreur suivante :

// No overload matches this call.
//   Overload 1 of 2, '(a: string, b: string): string', gave the following error.
//     Argument of type 'boolean' is not assignable to parameter of type 'string'.
//   Overload 2 of 2, '(a: number, b: number): number', gave the following error.
//     Argument of type 'boolean' is not assignable to parameter of type 'number'.

// 22 add(true, false);
//        ~~~~

//   functionOverrides.ts:7:10
//     7 function add(a: any, b: any) {
//                ~~~
//     The call would have succeeded against this implementation, but implementation signatures of overloads are not externally visible.


// Ici, nous pouvons voir que les seules signatures de fonction valides sont celles où les arguments
// a et b sont tous deux de type chaîne, ou celles où les arguments a et b sont tous deux de type nombre.
// Même si notre définition de fonction finale utilise le type any, cette définition de fonction n'est
// pas mise à disposition et est simplement utilisée pour l'implémentation de la fonction. Nous ne pouvons
// donc pas invoquer cette fonction avec deux arguments booléens, comme le montre l'erreur.
