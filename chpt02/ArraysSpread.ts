let firstArray = [1, 2, 3];
let secondArray = [3, 4, 5];
let thirdArray = [ ...firstArray, ...secondArray];

console.log(`third array = ${thirdArray}`);

let objArray1 = [
  { id:1, name: "first element" },
]

let objArray2 = [
  { id:2, name: "second element" },
]

let objArray3 = [
  ...objArray1,
  { id:3, name: "third element" },
  ...objArray2
]

console.log(`objArray3 = ${JSON.stringify(objArray3, null, 4)}`);


// Explication:

// Ici, nous avons défini deux tableaux nommés objArray1 et objArray2, chacun avec un seul élément de tableau, qui possède à la fois
// une propriété id et une propriété name. Nous créons ensuite une troisième variable nommée objArray3, qui utilise la propagation
// d'objets pour créer un troisième tableau. Notez que nous construisons le tableau objArray3 à partir du tableau objArray1, puis que
// nous ajoutons un élément, puis que nous incluons le contenu du tableau ojbArray2. La sortie de ce code est la suivante :

// third array = 1,2,3,3,4,5
// objArray3 = [
//     {
//         "id": 1,
//         "name": "first element"
//     },
//     {
//         "id": 3,
//         "name": "third element"
//     },
//     {
//         "id": 2,
//         "name": "second element"
//     }
// ]

// Ici, nous pouvons voir que la variable objArray3 contient tous les éléments des tableaux objArray1 et objArray2,
// ainsi que l'élément avec id : 3 et name : "third element" que nous avons injecté au milieu du tableau en utilisant
// la syntaxe spread.
