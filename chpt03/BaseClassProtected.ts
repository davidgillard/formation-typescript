/*
 * Les classes peuvent marquer à la fois les propriétés et les fonctions avec le mot-clé protected. Si une propriété est marquée comme protégée,
 * elle n'est alors pas accessible en dehors de la classe elle-même, de manière similaire au comportement du mot-clé private. Elle est cependant
 * accessible aux classes dérivées, ce qui est différent des variables privées qui ne sont pas accessibles aux classes dérivées, comme on peut le
 * voir dans l'exemple suivant :
 * /

class BaseClassProtected {
  protected id: number;
  private name: string = "";
  constructor(id: number) {
    this.id = id;
  }
}

class AccessProtected extends BaseClassProtected {
  constructor(id: number) {
    super(id);
    console.log(`base.id = ${this.id}`);
    console.log(`base.name = ${this.name}`)
  }
}

// Ici, nous avons défini une classe nommée BaseClassProtected qui possède une propriété protégée nommée id de type number, et une propriété privée
// nommée name de type string. Nous définissons la valeur de la propriété id protégée dans le constructeur. Nous définissons ensuite une classe nommée
// AccessProtected qui dérive de la classe BaseClassProtected. Cette classe possède une fonction constructeur qui transmet l'argument id au constructeur
// de la classe de base. Ce code produira l'erreur suivante :

// error TS2341: Property 'name' is private and only accessible within
// class 'BaseClassProtected'

// Ici, nous pouvons voir que dans la fonction constructeur de la classe AccessProtected, nous essayons d'accéder à la propriété id protégée de la classe de base,
// puis nous essayons d'accéder à la propriété nom privée de la classe de base. L'accès à la propriété protégée est autorisé, mais l'accès à la propriété nom privée
// ne l'est pas. Testons également cette théorie en dehors des classes elles-mêmes, comme suit :

let accessProtected = new AccessProtected(1);
accessProtected.id = 1;
accessProtected.name = "test";

// Ici, nous avons une variable nommée accessProtected qui contient une instance de la classe AccessProtected. Nous essayons ensuite d'attribuer des valeurs à la propriété
// id et à la propriété nom de cette classe. Ce code génère les erreurs suivantes :

// error TS2445: Property 'id' is protected and only accessible within
// class 'BaseClassProtected' and its subclasses
// error TS2341: Property 'name' is private and only accessible within
// class 'BaseClassProtected'

// Ces messages d'erreur nous indiquent clairement que la propriété id est protégée et donc accessible uniquement dans la classe BaseClassProtected et toute classe qui en
// est dérivée. La propriété name est cependant privée et n'est donc accessible qu'au sein de la classe BaseClassProtected elle-même. Gardez à l'esprit que ces modificateurs
// d'accès sont des constructions TypeScript et qu'ils seront « compilés » dans le JavaScript généré.
