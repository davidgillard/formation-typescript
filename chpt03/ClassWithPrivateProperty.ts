class ClassWithPrivateProperty {
  private id: number;
  constructor(id: number) {
    this.id = id;
  }
}

let privateAccess = new ClassWithPrivateProperty(10);
privateAccess.id = 20;

// Ici, nous avons défini une classe nommée ClassWithPrivateProperty qui possède une seule propriété nommée id, qui a été marquée comme privée.
// Cette classe possède également une fonction constructeur, qui définira la valeur de la propriété id interne sur la valeur de l'argument id 
// qui a été transmis. Nous créons ensuite une instance de cette classe et tentons d'attribuer la valeur 20 à la propriété id privée. Ce code
// génère l'erreur suivante :

// error TS2341: Property 'id' is private and only accessible within class 'ClassWithPrivateProperty'.
// privateAccess.id = 20;

// Ici, nous pouvons voir que, comme nous avons marqué la propriété id comme privée, nous ne pouvons pas y accéder en dehors de la classe elle-même.
// Notez cependant que dans la fonction constructeur, qui se trouve à l'intérieur de la classe elle-même, nous pouvons définir la valeur de la propriété
// id privée.


