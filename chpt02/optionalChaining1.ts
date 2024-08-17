var objectA = {
  nestedProperty: { // propriété
    name: "nestedPropertyName" // une première propriété
    // firstname: "nestedPropertyFirstName" // une seconde propriété
  }
}

function printNestedOptionalChain(obj: any) {
  if (obj?.nestedProperty?.name) {
    console.log(`name = ${obj.nestedProperty.name}`)
  } else {
    console.log(`name not found or undefined`);
  }
}

printNestedOptionalChain(undefined);
printNestedOptionalChain({
  aProperty: "another property"
});
printNestedOptionalChain({
  nestedProperty: {
    name: null
  }
});
printNestedOptionalChain({
  nestedProperty: {
    name: "nestedPropertyName"
  }
});

// Il est recommandé de vérifier que les propriétés que vous vous attendez à trouver sont
// effectivement présentes, avant de tenter d'y accéder. Cela génère un code similaire à ce
// qui suit :

// name not found or undefined
// name not found or undefined
// name not found or undefined
// name = nestedPropertyName

// Ici, nous pouvons voir que la syntaxe de chaînage optionnelle renverra undefined si l'une
// des propriétés de la chaîne de propriétés est nulle ou indéfinie.

// Le chaînage optionnel est une fonctionnalité très attendue, et la
// syntaxe est une vue bienvenue pour les développeurs qui sont habitués à écrire
// de longues instructions if pour s'assurer que le code est robuste et
// n'échouera pas de manière inattendue.
