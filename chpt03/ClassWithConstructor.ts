/*
 * Les constructeurs de classe peuvent accepter des arguments lors de leur construction initiale. Cela nous permet de combiner
 * la création d'une classe et la définition de ses paramètres en une seule ligne de code. Considérez la définition de classe
 * suivante :
 *
*/

class ClassWithConstructor {
  id: number;
  constructor(id: number) {
    this.id = id;
  }
}

// Ici, nous avons défini une classe nommée ClassWithConstructor qui possède une seule propriété nommée id de type number.
// Nous avons ensuite une définition de fonction pour une fonction nommée constructor, avec un seul paramètre nommé _id 
// de type number. Dans cette fonction constructeur, nous définissons la valeur de la propriété id interne sur la valeur
// du paramètre _id qui a été passé. Notez la définition de la propriété id dans cette classe. Auparavant, nous devions 
// définir une propriété comme étant de type number | undefined. Ici, cependant, comme nous initialisons la propriété via
// le constructeur, elle sera toujours définie lorsqu'une instance de la classe est initialisée. Nous pouvons construire 
// une instance de cette classe comme suit :

let classWithConstructor = new ClassWithConstructor(10);
console.log(`classWithConstructor =
  ${JSON.stringify(classWithConstructor)}`);

// Ici, nous avons créé une instance de la classe ClassWithConstructor et passé l'argument 10 au constructeur.
// Nous enregistrons ensuite simplement la valeur de cette instance de classe dans la console. La sortie de ce
// code est la suivante :

// classWithConstructor =
//   {"id":10}

// Ici, nous avons la même définition de classe que celle utilisée précédemment, avec une différence subtile. 
// Notez que la fonction constructeur accepte désormais un paramètre nommé id, au lieu de _id, comme nous l'avons
// utilisé précédemment. Cela est possible, car la portée du paramètre id, tel que passé dans la fonction constructeur,
// est différente de la portée de la propriété d'instance de classe nommée id. L'utilisation de this.id pour accéder
// à la propriété d'instance de classe la distingue clairement du paramètre de fonction id.
