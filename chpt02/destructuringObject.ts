let complexObject = {
  aNum: 1,
  bStr: "name",
  cBool: true
}

let { aNum, bStr, cBool } = complexObject;

console.log(`aNum : ${aNum}`);
console.log(`bStr : ${bStr}`);
console.log(`cBool : ${cBool}`);

let { aNum: objId, bStr: objName, cBool: isValid } = complexObject;

console.log(`objId : ${objId}`);
console.log(`objName : ${objName}`);
console.log(`isValid : ${isValid}`);

// Explication:

// Comme nous pouvons le voir à partir de cette sortie, nous sommes capables de déstructurer des objets
// simples en une série de variables, ce qui nous permet d'accéder à la valeur de ces propriétés via notre
// syntaxe de dénomination de variable standard.

// aNum : 1
// bStr : name
// cBool : true
// objId : 1
// objName : name
// isValid : true

// Ici, nous déstructurons le complexObject en une série de variables. Notez l'utilisation des deux points (:) dans cet exemple.
// Nous utilisons les deux points pour renommer la propriété aNum en variable objId, en utilisant la syntaxe aNum:objId. De même,
// la propriété bStr est renommée en une variable nommée objName, et la propriété cBool est renommée en une variable nommée isValid.
// Le symbole deux points (:) tel qu'il est utilisé ici ne spécifie pas un type comme il le ferait normalement, mais est plutôt utilisé
// pour renommer le nom de la variable utilisée dans la déstructuration.
