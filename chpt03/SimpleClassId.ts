/*
 * Comme nous l'avons vu, une définition de classe spécifie à la fois les propriétés d'une classe et les fonctions qu'il implémente.
 * Au sein de la classe, si nous devons accéder à une propriété de l'instance de classe, nous devons utiliser ce mot-clé, comme suit:
 *
*/

class SimpleClassId {
  id: number | undefined;
  print(): void {
    console.log(`SimpleClassId = ${this.id}`);
  }
}

// Ici, nous avons modifié la fonction d'affichage pour imprimer la valeur de la propriété ID à la console, 
// dans la chaîne de modèle, $ {this.id}. Notez comment nous devons préfixer la propriété ID avec le mot clé 
// pour y accéder dans une classe. Nous pouvons maintenant tester ce code comme suit:

let mySimpleClassId = new SimpleClassId();
mySimpleClassId.id = 2024;
mySimpleClassId.print();

// Ici, nous avons modifié notre échantillon de code précédent et attribué la valeur de 2024 à la propriété ID de
// la variable MySimpleclassId. Nous appelons ensuite la fonction d'impression de cette classe, qui nous donnera 
// la sortie suivante:


