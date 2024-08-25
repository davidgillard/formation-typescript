/*
 * Lors de l'utilisation de l'héritage, il est assez courant qu'une classe de base et une classe dérivée implémentent la même méthode. Cela se produit le plus souvent 
 * avec les constructeurs de classe. Si une classe dérivée possède un constructeur, ce constructeur doit appeler le constructeur de la classe de base à l'aide du mot-clé super,
 * sinon TypeScript génère une erreur, comme suit :
 * */

class BaseClassWithCtorSuper {
  private id: number;
  constructor(id: number) {
    this.id = id;
  }
}

class DerivedClassWithCtorSuper extends BaseClassWithCtorSuper {
  private name: string;
  constructor(id: number, name: string) {
    super(id);
    this.name = name;
  }
}

// Ici, nous avons défini une classe nommée BaseClassWithCtorSuper qui possède une seule propriété nommée id de type number, et définit également une fonction
// constructeur qui initialise cette propriété id. Nous définissons ensuite une classe nommée DerivedClassWithCtorSuper qui hérite de la classe BaseClassWithCtorSuper.
// Notez comment nous appelons le constructeur de la classe de base, BaseClassWithCtorSuper, dans le constructeur de la classe DerivedClassWithCtorSuper, en utilisant
// la fonction super. Cet appel super transmet également la valeur qu'il reçoit dans le paramètre id au constructeur de la classe de base.
