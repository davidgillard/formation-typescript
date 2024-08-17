var u = "an unknown";
u = 1;
var aNumber2;
aNumber2 = u;
console.log("u: ".concat(u));
console.log("aNumber2: ".concat(aNumber2));
// Explication: 
//
// L'utilisation du type inconnu nous oblige à prendre une décision consciente lorsque nous utilisons ces valeurs.
// En substance, nous faisons savoir au compilateur que nous savons de quel type cette valeur doit être lorsque 
// nous voulons réellement l'utiliser. C'est pourquoi elle est considérée comme une version de type sûr de any,
// car nous devons utiliser un casting explicite pour convertir un type inconnu en un type connu avant de l'utiliser.
