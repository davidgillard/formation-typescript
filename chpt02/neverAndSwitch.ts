enum AnEnum {
  FIRST,
  SECOND
}

function getEnumValue(enumValue: AnEnum): string {
  switch (enumValue) {
    case AnEnum.FIRST: return "First Case"
    case AnEnum.SECOND: return "Second Case"
    }
    let returnValue: never = enumValue;
    return returnValue;
}

console.log(`getEnumValue: ${getEnumValue(AnEnum.SECOND)}`);

// en sortie: 

// getEnumValue: Second Case

// Explication:
// Le compilateur TypeScript examine alors notre code et détermine qu'il manque une instruction case pour la valeur
// AnEnum.SECOND. Dans ce cas, la logique passe par l'instruction switch, puis tente d'assigner la valeur AnEnum.SECOND
// à une variable de type never, d'où l'erreur.

// Ici, nous avons simplement ajouté l'instruction case manquante pour gérer la valeur AnEnum.SECOND.
// Avec cela en place, l'erreur est résolue. Bien que cela puisse être assez facile à repérer dans un exemple
// simple comme celui-ci, ce type d'erreur est courant lorsque l'on travaille avec de grandes bases de code.
// Au fil du temps, les développeurs ajoutent souvent des valeurs à une énumération pour que leurs tests unitaires
// fonctionnent, mais peuvent facilement manquer ces instructions case manquantes. L'utilisation du type never
// ici protège notre code afin que nous puissions détecter ces erreurs plus tôt.
