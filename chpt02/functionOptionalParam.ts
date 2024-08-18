function concalValues(a :string, b?: string) {
  console.log(`a + b = ${a + b}`);
}

concalValues("first", "second");
concalValues("third");

// Explication: 

// Ici, nous pouvons voir que le premier appel à la fonction concatValues concatène les chaînes « first » et « second »,
// en enregistrant la valeur de « firstsecond » dans la console. Le deuxième appel à la fonction concatValues n'a fourni
// qu'une valeur pour le premier argument, car le deuxième argument était marqué comme facultatif. Ce deuxième appel à la
// fonction concatValues produit la sortie « thirdundefined »,car nous n'avons pas spécifié de valeur pour le deuxième argument.
// Cela signifie que l'argument b n'a pas été spécifié et est donc indéfini.

// a + b = firstsecond
// a + b = thirdundefined

// Notez que tous les paramètres facultatifs doivent être répertoriés en dernier dans la liste des paramètres de la définition
// de fonction. Vous pouvez avoir autant de paramètres facultatifs que vous le souhaitez, tant que les paramètres non facultatifs
// précèdent les paramètres facultatifs.
