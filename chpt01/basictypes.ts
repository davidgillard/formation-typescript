var myBoolean: boolean = true;
var myNumber: number = 1234;
var myStringArray: string[] = [`first`, `second`, `third`];

// ici je décide de changer le typage de mes variables et du coup c'est le drame

// myBoolean = myNumber;
// myStringArray = myNumber;
// myNumber = myStringArray[0];

// error TS2322: Type 'number' is not assignable to type 'boolean'.
// error TS2322: Type 'number' is not assignable to type 'string[]'.
// error TS2322: Type 'string' is not assignable to type 'number'.

// maintenant essayons de corriger ceci

myBoolean = myNumber === 456;
myStringArray = [myNumber.toString(), `5678`];
myNumber = myStringArray.length;

console.log(`myBoolean = ${myBoolean}`);
console.log(`myStringArray = ${myStringArray}`);
console.log(`myNumber = ${myNumber}`);

// Ici, nous affectons la valeur de l'instruction myNumber === 456 à la variable myBoolean. 
// Le type de l'expression equals est booléen, car elle donnera soit vrai, soit faux. Ainsi, 
// dans ce cas, le côté droit de l'affectation est du même type que le côté gauche de l'affectation, 
// et est donc un TypeScript valide. De la même manière, nous convertissons ensuite la variable 
// myNumber en chaîne à l'aide de la fonction .toString(), et créons un tableau à partir de celle-ci, 
// avec la valeur "5678" en enfermant les deux entre deux crochets [ et ]. Enfin, nous affectons 
// la propriété length du tableau myStringArray à la variable myNumber. Là encore, 
// cela est autorisé, car la propriété length d'un tableau est de type number
//
//
// ###############################
//    myBoolean = false
//    myStringArray = 1234,5678
//    myNumber = 2
// ###############################

// Ici, nous pouvons voir que les instructions console.log produisent les résultats attendus. 
// La variable myNumber n'est pas égale à la valeur 456, donc la variable myBoolean est définie 
// sur false. La valeur de la variable myStringArray est maintenant 1234 et 5678, et la
// valeur de la variable myNumber est la longueur du tableau myStringArray, qui est 2.
