/*
 * Il existe une relation très forte entre les classes et les interfaces, en particulier dans les modèles de conception orientés objet.
 * Une interface décrit un type personnalisé et peut inclure à la fois des propriétés et des fonctions. Une classe est la définition d'un objet,
 * incluant également ses propriétés et ses fonctions. Cela nous permet d'utiliser des interfaces pour décrire un comportement commun dans
 * un ensemble de classes et d'écrire du code qui fonctionnera avec cet ensemble de classes. À titre d'exemple, considérons les définitions
 * de classe suivantes:*/

class ClassA implements IPrint {
  print(): void {
    console.log(`ClassA.print() called.`)
  };
}

class ClassB implements IPrint {
  print(): void {
    console.log(`ClassB.print() called.`)
  };
}

// Ici, nous avons des définitions de classe pour deux classes, nommées classA et classB. Ces deux classes ont une
// fonction d'impression. Supposons maintenant que nous voulons écrire un code qui ne se souciait pas vraiment du 
// type de classe que nous avons utilisé, il ne lui importait pas de savoir si la classe a implémenté une fonction
// d'impression. Nous pouvons facilement créer une interface décrivant le comportement dont nous avons besoin,
// comme suit:

interface IPrint {
  print(): void;
}

function printClass(a: IPrint) {
  a.print();
}

// Ici, nous avons défini une interface nommée iPrint qui contient une seule fonction nommée print() et renvoie void.
// Nous avons ensuite une fonction nommée PrintClass qui prend un seul paramètre nommé a, et est de type iPrint. 
// Nous utilisons l'interface iPrint dans cette définition de fonction pour décrire les attributs d'un objet qui peut
// être transmis en tant que paramètre. Nous pouvons maintenant mettre à jour nos définitions de classe et les marquer
// comme étant utilisables par la fonction printClass.

// Ici, nous utilisons le mot-clé TypeScript implément pour indiquer que ClassA et ClassB implémentent l'interface iPrint,
// et sont donc utilisables par notre fonction PrintClass. Nous pouvons maintenant utiliser cette fonction comme suit:

let classA = new ClassA();
let classB = new ClassB();

printClass(classA);
printClass(classB);

// Ici, nous avons créé une instance de chacune de nos classes et les avons affectées aux variables classA et classB. Nous passons
// ensuite ces variables dans notre fonction printClass en tant qu'arguments. Le résultat de ce code est le suivant :

// ClassA.print() called.
// ClassB.print() called.

// Les interfaces peuvent donc être considérées comme un type de contrat que les classes doivent implémenter, si elles sont censées fournir
// certaines propriétés et certains comportements. Notez que les règles de typage de canard de TypeScript garantissent qu'une classe particulière
// a la forme correcte lorsqu'elle est utilisée, même si elle n'implémente pas l'interface comme décrit. À titre d'exemple, considérons le code
// suivant :

class ClassC {
  print(): void {
    console.log(`ClassC.print() called.`)
  };
}

let classC = new ClassC();
printClass(classC);

// Ici, nous avons défini une classe nommée ClassC qui possède la fonction d'impression requise par l'interface IPrint,
// mais elle n'indique pas explicitement qu'elle implémente l'interface IPrint. Notez que nous manquons du code implémentant
// IPrint. Nous pouvons néanmoins utiliser l'instance de cette classe, nommée classC, dans un appel à la fonction printClass,
// sur la dernière ligne de cet extrait. Il s'agit d'un autre exemple des règles de typage de canard de TypeScript, qui 
// garantissent que la forme du type utilisé est correcte pour un appel à la fonction printClass. Cependant, la définition 
// d'interfaces et leur utilisation dans notre code garantissent que lorsque des modifications sont apportées aux définitions
// de classe ou d'interface, nous sommes en mesure de détecter rapidement toute erreur éventuelle.
