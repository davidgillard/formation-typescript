let firstObj: object = { id: 1, name: "firstObj"};
let secondObj: object = { ...firstObj };

console.log(`secondObj : ${JSON.stringify(secondObj)}`);

// Explication
//
// Lorsque nous travaillons avec des objets JavaScript de base, nous devons souvent copier les propriétés
// d'un objet vers un autre, ou effectuer un mélange et une correspondance de propriétés de divers objets.
// Dans TypeScript, nous pouvons utiliser une technique ES7 connue sous le nom de propagation d'objets pour
// y parvenir. Dans le code ci-dessus :

// Ici, nous avons défini une variable nommée firstObj qui est de type objet et possède une propriété
// id et une propriété name. Nous définissons ensuite une variable nommée secondObj et utilisons la syntaxe
// de propagation d'objets de trois points ( ... ) pour lui attribuer une valeur. La valeur que nous attribuons
// est un objet composé de la variable firstObj, c'est-à-dire { ...firstObj }.

// Le résultat de ce code est le suivant :

// secondObj : {"id":1,"name":"firstObj"}
//
// Ici, nous pouvons voir que les propriétés et valeurs id et name ont été copiées dans la nouvelle variable secondObj.
// Nous pouvons également utiliser cette technique pour combiner plusieurs objets ensemble. Considérez le code suivant :

let nameObj: object = {name: "nameObj name"};
let idObj: object = { id: 1};

let obj3 = { ...nameObj, ...idObj };

console.log(`obj3 = ${JSON.stringify(obj3)}`);

// explication: 

// Ici, nous avons défini une variable nommée nameObj qui possède une seule propriété appelée name. Nous avons ensuite une variable
// nommée idObj qui possède une seule propriété appelée id. Notez comment nous utilisons la syntaxe de propagation pour créer une 
// variable nommée obj3 qui est le résultat de la combinaison des propriétés de nameObj et des propriétés des variables idObj. 
// La sortie de ce code est la suivante :

// obj3 = {"name":"nameObj name","id":1}

// Cette sortie nous montre que les propriétés des deux objets ont été fusionnées dans la variable obj3, en utilisant la syntaxe de
// propagation d'objet.

