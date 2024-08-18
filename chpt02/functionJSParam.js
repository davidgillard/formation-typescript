function testArguments() {
  for (var i = 0; i < arguments.length; i++) {
    console.log("argument[" + i + "] = " + arguments[i]);
  }
}

testArguments(1, 2);
testArguments("first", "second", "third");

// Explication : 
//
// Il est intéressant de noter que les paramètres spécifiés dans une fonction JavaScript sont tous facultatifs.
// Même si une fonction JavaScript spécifie des paramètres dans sa définition de fonction, nous n'avons pas besoin
// de les fournir lors de l'appel de la fonction. Dans une variante bizarre du langage, même si nous ne spécifions
// aucun paramètre dans une définition de fonction, nous pouvons toujours accéder aux valeurs qui ont été fournies
// lors de l'appel de la fonction. Considérez le code JavaScript ci-dessus :

// Ici, nous avons défini une fonction JavaScript nommée testArguments qui ne spécifie aucun paramètre. Nous créons
// ensuite une boucle for pour parcourir les valeurs d'un tableau nommé arguments. Si un élément de tableau est trouvé,
// nous enregistrons la valeur de l'élément de tableau dans la console. Toutes les fonctions JavaScript ont automatiquement
// accès à une variable spéciale, nommée arguments, qui peut être utilisée pour récupérer tous les arguments qui ont été 
// utilisés lorsque la fonction est invoquée. Nous invoquons ensuite la fonction testArguments deux fois, une fois avec 
// les arguments 1 et 2, et la deuxième fois avec les arguments "first", "second" et "third". La sortie de ce code est 
// la suivante :

// argument[0] = 1
// argument[1] = 2
// argument[0] = first
// argument[1] = second
// argument[2] = third

// Ici, nous pouvons voir un journal des arguments qui ont été utilisés pour invoquer la fonction testArguments. La première
// fois que nous avons invoqué la fonction, nous avons utilisé les arguments 1 et 2. La deuxième fois que nous avons invoqué
// cette fonction, nous avons utilisé les arguments "first", "second" et "third".
// Afin d'exprimer la définition de fonction équivalente dans TypeScript, nous devrons utiliser la syntaxe rest, comme suit :
