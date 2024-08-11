// autres exemples 
var obj1 = { id: 1, print: function () { } };
var obj2 = { id: 2, print: function () { }, select: function () { } };
obj1 = obj2;
obj2 = obj1;
// Ici, nous avons deux objets, nommés obj1 et obj2, qui sont identiques, sauf que obj2 a une fonction
// select supplémentaire. Nous attribuons ensuite la valeur de obj2 à obj1. Cela ne générera
// pas d'erreur, car le type d'obj2 possède toutes les propriétés du type d'obj1. Cela signifie
// que la méthode de typage duck vérifie si obj2 possède au moins les propriétés d'obj1, ce qu'elle fait.
// La dernière ligne de cet extrait de code, où nous attribuons la valeur d'obj1 à obj2, générera
// une erreur comme suit :
//  error TS2741: Property 'select' is missing in type '{ id: number; print(): void; }' but requi10:45:10 [10/100]
// : number; print(): void; select(): void; }'.
// Ici, nous pouvons voir que le compilateur a correctement identifié que le type d'obj1 n'a pas
// au moins toutes les propriétés d'obj2, car il manque la fonction select. N'oubliez pas que 
// les exemples de typage duck utilisés ici utilisent également le typage inféré, de sorte que 
// le type d'un objet est déduit à partir du moment où il est attribué pour la première fois.
