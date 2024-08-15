let array = ["123", "456", "789"];

delete array[0];

for (let i = 0; i < array.length; i++) {
  console.log(`array[${i}] = ${array[i]}`);
}

// Ici, nous commençons par déclarer une variable qui contient un tableau de chaînes nommé array.
// Nous supprimons ensuite le premier élément de ce tableau. Enfin, nous utilisons une simple boucle
// for pour parcourir les éléments de ce tableau et imprimer la valeur de l'élément du tableau sur
// la console. La sortie de ce code est la suivante :

// array[0] = undefined
// array[1] = 456
// array[2] = 789

// Comme nous pouvons le voir, le tableau comporte toujours trois éléments, mais le premier élément
// a été défini sur undefined, ce qui est le résultat de la suppression de cet élément du tableau.
