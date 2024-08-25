/*
 * Une interface peut constituer l'interface de base pour une ou plusieurs autres interfaces. À titre d'exemple, considérons le code suivant :
 * */

interface IBase {
  id: number;
}

interface IDerivedFromBase extends IBase {
  name: string;
}

class IdNameClass implements IDerivedFromBase {
  id: number = 0;
  name: string = "nameString";
}

// Ici, nous avons défini une interface nommée IBase qui possède une seule propriété, nommée id de type number.
// Nous définissons ensuite une deuxième interface nommée IDerivedFromBase qui utilise le mot-clé extends pour
// hériter d'IBase. Nous définissons ensuite une classe nommée IdNameClass qui implémente l'interface IDerivedFromBase
// et possède une seule propriété nommée name de type string. Notez que ce code génère l'erreur suivante :

// error TS2420: Class 'IdNameClass' incorrectly implements interface 'IDerivedFromBase'.
// Property 'id' is missing in type 'IdNameClass' but required in type 'IDerivedFromBase'.

// Ici, nous pouvons voir que le compilateur nous indique que l'interface DerivedFromBase possède à la fois une propriété
// name et une propriété id, car elle hérite de la propriété id de l'interface IBase. Comme nous n'avons pas défini la 
// propriété id dans notre définition de classe, la classe n'implémente pas correctement l'interface, d'où l'erreur. 
// Nous pouvons corriger cette définition de classe comme suit :

// Ici, nous avons ajouté la propriété id sur la définition de classe pour IdNameClass et implémentons donc correctement 
// l'interface IDerivedFromBase. Lorsque nous utilisons l'héritage d'interface, nous pouvons également restreindre un type
// sur une interface dérivée. Considérez les deux interfaces suivantes :

interface IBaseStringOrNumber {
  id: string | number;
}

interface IDerivedFromBaseNumber
  extends IBaseStringOrNumber {
  id: number;
}

// Ici, nous avons une interface nommée IBaseStringOrNumber, qui possède une seule propriété nommée id qui est de type chaîne ou nombre.
// Nous définissons ensuite une deuxième interface qui en dérive nommée DerivedFromBaseNumber, qui possède une seule propriété nommée id
// qui est de type nombre. Ainsi, en substance, nous avons réduit le type de la propriété id de chaîne ou nombre à simplement nombre dans
// notre interface dérivée. Les interfaces prennent également en charge l'héritage multiple. Considérez le code suivant :

interface IMultiple extends
  IDerivedFromBase,
  IDerivedFromBaseNumber
{
  description: string;
}

let multipleObject: IMultiple = {
  id: 1,
  name: "myName",
  description: "myDescription"
};

// Ici, nous avons défini une interface nommée IMultiple, qui dérive à la fois des interfaces IDerivedFromBase et IDerivedFromBaseNumber,
// à l'aide d'une liste séparée par des virgules. Elle définit également une propriété nommée description de type chaîne. Nous définissons
// ensuite un objet nommé multipleObject qui implémente cette interface. Selon nos règles d'héritage, cette interface IMultiple possède donc
// trois propriétés : une propriété id de type number provenant de l'interface IDerivedFromBaseNumber, une propriété name provenant de l'interface
// IDerivedFromBase, ainsi que la propriété description. Cet objet multipleObject doit donc fournir une propriété pour chacune des propriétés
// trouvées dans l'interface.
