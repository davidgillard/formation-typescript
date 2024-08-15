let array = ["123", "456", "789"];
delete array[0];

for (let i=0; i < array.length; i++) {
  checkAndPrintElement(array[i]);
}

function checkAndPrintElement(arrayElement: string | undefined) {
  if (arrayElement === undefined)
    console.log(`invalid array arrayElement`)
  else
    console.log(`valid array element : ${arrayElement}`)
}

// explication:

// Ici, nous parcourons notre tableau et appelons une fonction nommée checkAndPrintElement.
// Cette fonction a un seul paramètre nommé arrayElement, et est définie comme lui permettant 
// d'être de type string ou undefined. Dans la fonction elle-même, nous vérifions si l'élément
// du tableau est, undefined, nous affichons un message d'avertissement sur la console. 
// Si le paramètre n'est pas undefined, nous affichons simplement sa valeur sur la console. 
// La sortie de ce code est la suivante :

// invalid array arrayElement
// valid array element : 456
// valid array element : 789

// Le type undefined nous permet donc d'indiquer explicitement quand nous nous attendons à ce
// qu'une variable soit undefined. Nous indiquons essentiellement au compilateur que nous sommes
// conscients qu'une variable n'a peut-être pas encore été définie comme valeur, et nous écrirons
// notre code en conséquence.
