function concatWithDefault(a: string, b: string = "default") {
  console.log(`a + b = ${ a + b }`);  
}

concatWithDefault("first", "second");
concatWithDefault("third");

// Explication: 

// Ici, nous avons défini une fonction nommée concatWithDefault qui possède deux paramètres, a et b, tous deux de type chaîne.
// Notez cependant la définition du paramètre nommé b. Nous attribuons la valeur « default » à ce paramètre dans la définition
// de la fonction. Cette affectation rendra automatiquement ce paramètre facultatif, et nous n'utilisons pas la syntaxe du point
// d'interrogation pour définir ce paramètre comme facultatif. Notez également que l'utilisation du type explicite pour le paramètre
// b, comme dans :string, est également facultative, car le compilateur déduira le type de la valeur par défaut, qui dans ce cas est
// le type chaîne. Nous appelons ensuite cette fonction avec deux arguments, puis avec un seul argument.
// Le résultat de ce code est le suivant :

// a + b = firstsecond
// a + b = thirddefault

// Ici, nous pouvons voir que lorsque nous fournissons deux arguments à la fonction concatWithDefault, la fonction concatène les 
// arguments comme prévu. Lorsque nous ne fournissons qu'un seul argument, le deuxième argument aura par défaut la valeur « default ».
