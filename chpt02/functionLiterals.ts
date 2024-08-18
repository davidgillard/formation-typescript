/*
 * TypeScript nous permet également d'utiliser ce que l'on appelle des littéraux, qui sont presque un hybride d'énumérations et d'alias
 * de type. Un littéral limitera les valeurs autorisées à un ensemble de valeurs spécifiées. Un littéral peut être constitué de valeurs
 * de chaîne, de nombre ou de valeurs booléennes. Considérez le code suivant :*/

type AllowedStringValues = "one" | "two" | "three";
type AllowedNumericValues = 1 | 20 | 65535;

function withLiteral(input: AllowedStringValues | AllowedNumericValues) {
  console.log(`called with : ${input}`);
}

// Ici, nous avons défini un littéral nommé AllowedStringValues, ainsi qu'un littéral nommé AllowedNumericValues.
// La syntaxe utilisée pour les littéraux est très similaire à la syntaxe d'un alias de type, où nous utilisons 
// le mot-clé type suivi d'un ensemble de valeurs autorisées. Contrairement aux alias de type, cependant, nous ne
// spécifions pas un ensemble de types différents. Nous spécifions un ensemble de valeurs autorisées, dont le concept
// est similaire à celui d'une énumération. Nous avons alors une fonction nommée withLiteral qui accepte un seul paramètre
// de type AllowedStringValues, ou de type AllowedNumericValues. Cette fonction enregistre simplement la valeur de l'argument
// d'entrée dans la console. Nous pouvons maintenant utiliser cette fonction comme suit :

withLiteral("one")
withLiteral("two");
withLiteral("three");
withLiteral(65535);
withLiteral("four");
withLiteral(2);

// Ici, nous invoquons la fonction withLiteral avec six valeurs, à savoir « un », « deux », « trois », 65 535, « quatre » et 2.
// Nos littéraux, cependant, n'autoriseront que les valeurs « un », « deux », « trois », 1, 20 et 65 535. Ainsi, les deux dernières
// lignes de ce code généreront les erreurs suivantes :

// Ces messages d'erreur sont générés parce que nos littéraux n'autorisent pas l'utilisation de la valeur « quatre » ou de la valeur 2.

// Les littéraux nous fournissent un autre outil que nous pouvons utiliser lorsque nous devons définir une fonction qui accepte une chaîne,
// un nombre ou un booléen standard, mais où nous devons limiter les valeurs fournies à un ensemble défini de valeurs.
