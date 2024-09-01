/*
 * Les exemples de code que nous avons vus jusqu'à présent ont utilisé des promesses fournies par une bibliothèque tierce, telles que les versions basées
 * sur Promise de l'accès au système de fichiers disponibles via l'espace de noms Node fs.promise. Alors, comment écrivons-nous nos propres promesses ?
 * Une promesse est une instance d'une nouvelle classe Promise dont le constructeur nécessite une signature de fonction qui accepte deux fonctions de rappel,
 * généralement nommées resolve et reject. Considérez la définition de fonction suivante :
 * */

function fnDelayedPromise(
  resolve: () => void,
  reject: () => void) {
  function afterTimeout() {
  resolve()
  }
  setTimeout(afterTimeout, 4000);
}

// Ici, nous avons une fonction nommée fnDelayedPromise qui accepte deux fonctions comme paramètres, nommées resolve et reject, toutes deux renvoyant void.
// Dans le corps de cette fonction, nous définissons une fonction de rappel nommée afterTimeout, qui invoquera le rappel esolve qui a été transmis comme premier
// argument. Elle appelle ensuite la fonction setTimeout, qui provoquera un délai de 4 secondes avant d'exécuter la fonction afterTimeout. Nous pouvons maintenant
// utiliser cette fonction pour construire un objet Promise, comme suit :

function delayedResponsePromise(): Promise<void> {
  return new Promise<void>(fnDelayedPromise);
}

// Ici, nous avons défini une fonction nommée delayedResponsePromise qui renvoie un objet Promise et utilise une syntaxe générique pour indiquer que le type
// renvoyé par l'objet Promise est de type void. Dans cette fonction, nous créons simplement une nouvelle instance d'un objet Promise et passons la fonction
// nommée fnDelayedPromise comme argument de constructeur unique. Notez qu'en pratique générale, ces deux définitions de fonction sont combinées en un seul
// bloc de code. Le but des deux extraits précédents a été de mettre en évidence deux concepts importants lors de la création de promesses. Tout d'abord, pour
// utiliser une promesse, vous devez renvoyer un nouvel objet Promise. Deuxièmement, un objet Promise est construit avec une fonction qui prend deux arguments
// de rappel, généralement nommés resolve et reject.Voyons comment ces deux étapes sont combinées en pratique générale, comme suit :

function delayedPromise(): Promise<void> {
  // return new Promise objet
  return new Promise<void>
  ( // start constructor
    (
    resolve: () => void, // resolve function
    reject: () => void, // reject function
    ) => {
    // start of function definition
    function afterTimeout() {
      resolve();
    }
    setTimeout(afterTimeout, 4000)
    // end of function definition
    }
    ); // end constructor
}

// Ici, nous avons une fonction nommée delayedPromise qui renvoie une promesse de type void. Dans cette fonction, nous construisons simplement puis renvoyons un
// nouvel objet Promise. La fonction constructeur de l'objet Promise accepte un seul argument, qui est une fonction qui a deux arguments, nommés resolve et reject.
// Les arguments resolve et reject sont également des fonctions qui renvoient void. Dans la définition de fonction, nous configurons une fonction de rappel afterTimeout,
// puis appelons la fonction setTimeout pour faire une pause d'une seconde avant d'exécuter la fonction afterTimeout. Lorsque la fonction afterTimeout est invoquée, elle
// appelle la fonction de rappel resolve. Notez que cet extrait de code inclut des commentaires qui indiquent où le constructeur du nouvel objet Promise commence et se termine,
// ainsi que où la définition de fonction réelle commence et se termine. Nous pouvons maintenant utiliser cette fonction delayedPromise comme suit :

delayedPromise().then(() => {
console.log(`delayed promise returned`);
});

// Ici, nous appelons la fonction delayedPromise et attachons une fonction then, qui sera exécutée une fois la promesse renvoyée
