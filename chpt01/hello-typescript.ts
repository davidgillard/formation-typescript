"use strict";
var version = `es6`;
console.log(`hello ${version} TypeScript`);


// géneration d'une erreur pour comprendre le typage fort

// var myString: string = `this is a string`;

// myString = 1;
// lors de la compilation le compilateur vous reponds ceci
// hello-typescript.ts:9:1 - error TS2322: Type 'number' is not assignable to type 'string'.
// clairement il n'est pas possible de changer le type de la variable une fois cette dernière définit
