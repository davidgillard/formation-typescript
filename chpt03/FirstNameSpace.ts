/*
 * Lorsque vous travaillez sur de grands projets, et en particulier avec un grand nombre de bibliothèques externes, il peut arriver
 * que deux classes ou interfaces partagent le même nom. TypeScript utilise ce que l'on appelle des espaces de noms pour répondre à
 * ces situations, comme suit :
 * */

namespace FirstNameSpace {
  export class NameSpaceClass {}
  class NotExported {}
}

// Ici, nous avons utilisé le mot-clé namespace pour créer un espace de noms nommé FirstNameSpace. Cet espace de noms couvre toutes les
// définitions de classe ou d'interface qui se trouvent dans son bloc de code. Dans le bloc de code FirstNameSpace, nous définissons deux
// classes, nommées NameSpaceClass et NotExported. Notez comment nous avons utilisé le mot-clé export pour NameSpaceClass. Le mot-clé 
// export rendra cette classe disponible en dehors de l'espace de noms lui-même. À titre d'exemple, considérez le code suivant :

let nameSpaceClass = new FirstNameSpace.NameSpaceClass();
let notExported = new FirstNameSpace.NotExported();

// Ici, nous avons créé deux variables, nommées nameSpaceClass et notExported. Nous créons ensuite des instances des classes contenues dans
// l'espace de noms FirstNameSpace. Notez que nous devons préfixer le nom de la classe que nous essayons d'instancier avec le nom de l'espace de noms lui-même, c'est-à-dire 
// FirstNameSpace.NameSpaceClass. Ce code, cependant, génère l'erreur suivante :

// error TS2339: Property 'NotExported' does not exist on type 'typeof FirstNameSpace'

// Cette erreur nous indique clairement que la classe NotExported n'est pas disponible pour une utilisation en dehors de l'espace de noms, car elle n'a pas été marquée avec
// le mot-clé export.

