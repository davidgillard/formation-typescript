/*
 * Lors de l'utilisation de l'héritage, il est assez courant qu'une classe de base et une classe dérivée implémentent la même méthode.
 * Cela se produit le plus souvent avec les constructeurs de classe. Si une classe dérivée possède un constructeur, ce constructeur doit
 * appeler le constructeur de la classe de base à l'aide du mot-clé super, sinon TypeScript génère une erreur, comme suit :
 * */

class BaseClassWithFn {
  print(text: string){
    console.log(`BaseClassWithFn.print() : ${text}`)
  }
}

class DerivedClassFnOverride extends
  BaseClassWithFn {
  print(text: string) {
    console.log(`DerivedClassFnOverride.print(${text})`);
  }
}

// Ici, nous avons défini une classe nommée BaseClassWithFn qui a une seule fonction d'impression, avec un seul paramètre nommé text de type string.
// Nous définissons ensuite une classe nommée DerivedClassFnOverride qui hérite de la classe BaseClassWithFn, et qui a également une seule fonction
// d'impression avec les mêmes paramètres et types. L'implémentation de la fonction d'impression de la classe dérivée remplace l'implémentation de
// la fonction d'impression de la classe de base, comme le montre le comportement du code suivant :

let derivedClassFnOverride = new DerivedClassFnOverride();
derivedClassFnOverride.print("test");

// Ici, nous avons créé une nouvelle instance de la classe DerivedClassFnOverride et appelé sa fonction d'impression avec l'argument "test". La sortie
// de ce code est la suivante :

// DerivedClassFnOverride.print(test)

// Comme nous pouvons le voir à partir de cette sortie, l'implémentation de la fonction print de la classe dérivée est appelée et remplace l'implémentation
// de la classe de base. Nous pouvons cependant toujours appeler l'implémentation de la fonction de la classe de base à l'aide du mot-clé super, comme suit :


class DerivedClassFnCallthrough extends
  BaseClassWithFn
{
  print(text: string): void {
    super.print(`from DerivedClassFnCallthrough : ${text}`);  
  }
}

let derivedCallthrough = new DerivedClassFnCallthrough();
derivedCallthrough.print("text");

// Ici, nous avons défini une classe nommée DerivedClassFnCallthrough qui hérite de la classe BaseClassWithFn et qui possède également une substitution
// de fonction pour la fonction d'impression. L'implémentation de cette fonction d'impression appelle cependant l'implémentation de la classe de base à
// l'aide du mot-clé super, c'est-à-dire super.print. Pour tester que cela fonctionne, nous avons créé une instance de la classe DerivedClassFnCallthrough
// nommée derivedCallThrough et appelé la fonction d'impression. La sortie de ce code est la suivante :

// DerivedClassFnOverride.print(test)
// BaseClassWithFn.print() : from DerivedClassFnCallthrough : text

// Ici, nous pouvons clairement voir que la fonction d'impression de la classe de base a été invoquée par la fonction d'impression de la classe dérivée,
// grâce à l'utilisation du mot-clé super.
