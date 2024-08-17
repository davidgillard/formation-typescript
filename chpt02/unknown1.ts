let u: unknown = "an unknown";
u = 1;
let aNumber2: number;
aNumber2 = <number>u;

console.log(`u: ${u}`);
console.log(`aNumber2: ${aNumber2}`);


// Explication: 
//
// L'utilisation du type inconnu nous oblige à prendre une décision consciente lorsque nous utilisons ces valeurs.
// En substance, nous faisons savoir au compilateur que nous savons de quel type cette valeur doit être lorsque 
// nous voulons réellement l'utiliser. C'est pourquoi elle est considérée comme une version de type sûr de any,
// car nous devons utiliser un casting explicite pour convertir un type inconnu en un type connu avant de l'utiliser.
