function testArguments(...args: string[] | number[]) {
  for (let i in args) {
    console.log(`args[${i}] = ${args[i]}`);
  }
}

testArguments("1");
testArguments(10, 20);

// Explication: 

// Ici, nous avons défini une fonction nommée testArguments en utilisant la syntaxe REST, c'est-à-dire les trois
// points (...), pour spécifier que la fonction peut être appelée avec n'importe quel nombre de paramètres. Nous
// utilisons également ici une union de types pour indiquer que les paramètres de variable peuvent être de type
// chaîne ou de type nombre. Nous invoquons ensuite la fonction testArguments avec un argument, qui est la chaîne "1",
// puis l'invoquons avec deux nombres, à savoir 10 et 20. La sortie de ce code est la suivante :

// args[0] = 1
// args[0] = 10
// args[1] = 20

// Ici, nous pouvons voir que la fonction testArguments peut être appelée avec plusieurs arguments, et comme la définition
// de fonction permet à ces paramètres d'être de type chaîne ou de type nombre, nous sommes en mesure d'imiter la fonctionnalité
// de la fonction JavaScript précédente.
