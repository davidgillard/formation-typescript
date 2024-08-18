/*
 * TypeScript fournit une alternative aux types d'union lors de la définition d'une fonction et permet à une signature
 * de fonction de fournir différents types de paramètres. Considérez le code suivant :*/
function add(a, b) {
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
