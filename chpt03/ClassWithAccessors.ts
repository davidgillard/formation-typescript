/*
 * ECMAScript 5 a introduit le concept d'accesseurs de propriété, ou fonctions get et set. Un accesseur de propriété est simplement
 * une fonction qui est appelée lorsqu'un utilisateur de notre classe obtient la valeur d'une propriété ou définit sa valeur. En 
 * utilisant une fonction au lieu d'une simple propriété, nous pouvons détecter quand quelqu'un modifie ou accède à une propriété,
 * ce que nous pouvons utiliser pour déclencher une autre logique. Considérez l'exemple suivant :
 * */

class  ClassWithAccessors {
  private _id: number = 0;
  get id(): number {
    console.log(`get id property`);
    return this._id;
  }
  set id(value: number) {
    console.log(`set id property`);
    this._id = value;
  }
}

// Ici, nous avons défini une classe nommée ClassWithAccessors qui possède une seule propriété privée nommée _id, de type number. Nous définissons ensuite
// une fonction nommée id, qui enregistre un message sur la console, puis renvoie la valeur de la propriété _id. Notez que cette fonction a été marquée comme
// une fonction get, en utilisant le mot-clé get. Nous définissons ensuite une fonction set, également avec le nom id, qui définira la valeur de la propriété
// interne _id. Notez que la fonction get et la fonction set sont toutes deux nommées id. Nous pouvons maintenant utiliser cette classe comme suit :

let classWithAccessors = new ClassWithAccessors();
classWithAccessors.id = 10;
console.log(`classWithAccessors.id = ${classWithAccessors.id}`);

// Ici, nous avons créé une variable nommée classWithAccessors, qui contient une instance de la classe ClassWithAccessors. Cette instance de classe expose ce qui
// ressemble à une propriété normale nommée id. Nous définissons la valeur de cette propriété sur 10, puis affichons la valeur de la propriété sur la console. 
// Les fonctions get et set exposent donc ce qui ressemble à une propriété au monde extérieur, nommée id, mais en interne dans la classe, ce sont en fait des fonctions
// et non des propriétés. La sortie de ce code est la suivante :

// set id property
// get id property
// classWithAccessors.id = 10

// Ici, nous pouvons en effet voir que les fonctions get et set ont été invoquées, même si, pour les utilisateurs de cette classe, cela ressemble à une seule propriété id.
