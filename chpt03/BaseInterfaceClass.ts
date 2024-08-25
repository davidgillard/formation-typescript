/*
 * Pour terminer, concernant les définitions d'interface et de classe, notez qu'une interface peut dériver d'une définition de classe,
 * comme on peut le voir dans l'exemple suivant :
 * */

class BaseInterfaceClass {
  id: number = 0;
  print() {
    console.log(`this.id = ${this.id}`);
  }
}

interface IBaseInterfaceClassExt
  extends BaseInterfaceClass {
  setId(id: number): void;
}

// Ici, nous avons une définition de classe pour une classe nommée BaseInterfaceClass qui possède une seule propriété nommée id et une
// fonction nommée print. Nous définissons ensuite une interface nommée IBaseInterfaceClassExt qui dérive de la BaseInterfaceClass à 
// l'aide du mot-clé extends. Cette interface définit ensuite une fonction nommée setId qui prend un seul paramètre nommé id de type number.
// Nous avons donc dérivé une interface directement d'une définition de classe et ajouté une définition de fonction. Notez que nous pouvons
// ensuite utiliser cette interface de la même manière que nous utilisons tout autre type d'interface, comme suit :

class ImplementsExt extends BaseInterfaceClass
  implements IBaseInterfaceClassExt {
  setId(id: number): void {
      this.id = id;
  }
}

// Ici, nous avons une classe nommée ImplementsExt qui dérive de la classe de base nommée BaseInterfaceClass et implémente
// également l'interface IBaseInterfaceClassExt. Cette classe doit donc fournir une implémentation de la fonction setId qui
// a été définie par l'interface IBaseInterfaceClassExt.
