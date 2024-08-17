var globalString!: string;

setGlobalString("this string is set");

console.log(`globalString = ${globalString}`);

function setGlobalString(value: string) {
  globalString = value;
}

// Le seul endroit où l'auteur a trouvé qu'il est logique d'utiliser l'affectation définie est lors de l'écriture
// de tests unitaires. Dans un scénario de test unitaire, nous pouvons tester les limites d'un chemin de code 
// spécifique et contourner délibérément les règles de TypeScript afin d'écrire un test particulier. Tous les
// autres cas d'utilisation d'une affectation définie devraient vraiment justifier une révision du code pour voir
// s'il peut être structuré d'une manière différente.
