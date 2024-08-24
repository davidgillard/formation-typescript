/*
 * TypeScript nous permet d'effectuer une itération sur les propriétés d'un type et d'extraire les noms de ses propriétés
 * grâce au mot-clé keyof, que nous pouvons utiliser comme type de littéral de chaîne. Explorons ce concept et comment il
 * s'applique aux interfaces, comme suit :*/

interface IPerson {
  id: number;
  name: string;
  telephone: string; 
}

type PersonPropertyName = keyof IPerson;

// Ici, nous avons défini une interface nommée IPerson qui définit deux propriétés nommées id et name. Nous créons ensuite un type
// de littéral de chaîne pour les propriétés valides de cette interface nommée PersonPropertyName. Notez qu'ici, nous utilisons simplement
// le mot-clé keyof pour générer un type de littéral de chaîne pour les propriétés trouvées dans l'interface IPerson. Cela équivaut au
// littéral de chaîne suivant :

type PersonPropertyLiteral = "id" | "name" | "telephone";

function getProperty(key: PersonPropertyName, value: IPerson) {
  console.log(`${key} = ${value[key]}`);
}

getProperty("id",
  { id: 1, name: "firstName", telephone: "06xxxxxxxx" }
);
getProperty("name",
  { id: 2, name: "secondName", telephone: "07xxxxxxxx" }
);
getProperty("telephone",
  { id: 3, name: "thirdName", telephone: "09yywwxxbb" }
);

// Ici, nous avons défini une fonction nommée GetProperty qui a trois paramètres, nommés Key of Type PersonPropertyName, et la valeur de type iperson.
// Cette fonction utilise la chaîne PersonProperToPtyName de la chaîne qui a été construite à l'aide du mot-clé KEYOF. La fonction elle-même enregistre
// simplement le nom de la clé de propriété fournie et la valeur de la propriété correspondante, à la console. Nous invoquons ensuite la fonction trois
// fois. Le premier appel à la fonction GetProperty sortira la valeur de la propriété "ID", et le deuxième appel à la fonction GetProperty sortira la valeur
// de la propriété "Name" et enfin la fonction GetProperty sortira la valeur de la propriété "telephone".

// L'utilisation du mot-clé KEYOF générera un littéral de chaîne qui inclut automatiquement toutes les propriétés d'une interface. Cette technique est 
// évidemment préférable à avoir à maintenir manuellement les littéraux de cordes.

