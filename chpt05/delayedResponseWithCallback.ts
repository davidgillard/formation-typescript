/*
 * Commençons par examiner les rappels, qui sont le mécanisme standard pour enregistrer une fonction à exécuter après qu'un événement asynchrone
 * s'est produit. Considérez l'exemple suivant :
 * */

function delayedResponseWithCallback(callback: () => void) {
  function executeAfterTimeout() {
    console.log(`5. executeAfterTimeout()`);
    callback();
  }
  console.log(`2. calling setTimeout`)
  setTimeout(executeAfterTimeout, 4000);
  console.log(`3. after calling setTimeout`)
}

// Ici, nous avons une fonction nommée delayedResponseWithCallback qui a un seul paramètre nommé callback, qui est une fonction sans argument qui renvoie void.
// Dans cette fonction, nous définissons une autre fonction nommée executeAfterTimeout, qui enregistrera un message sur la console, puis exécutera la fonction
// de rappel qui a été transmise en tant que paramètre nommé callback. Notez que chaque journal de console dans cet extrait commence par un numéro, qui indique
// l'ordre d'exécution des instructions. Nous verrons les journaux un peu plus tard avec les ordres 1, 4 et 6. Nous enregistrons ensuite un message sur la console
// pour indiquer que nous sommes sur le point d'appeler la fonction setTimeout. Après cela, nous appelons la fonction JavaScript setTimeout, en transmettant notre
// fonction executeAfterTimeout comme argument, ainsi que la durée de retard de cet appel. Cela ajoutera un délai de 4 secondes, ou 4 000 ms, après quoi notre
// fonction executeAfterTimeout sera déclenchée. Nous enregistrons ensuite un autre message sur la console pour indiquer que l'appel à la fonction setTimeout est
// terminé. Notez que dans ce code, nous avons en fait deux fonctions de rappel. Le premier est le paramètre nommé callback, et le second est la fonction nommée
// executeAfterTimeout. Nous transmettons la fonction executeAfterTimeout en tant que fonction de rappel dans la fonction setTimeout.

function callDelayedAndWait() {
  function afterWait() {
    console.log(`6. afterWait()`);

  }
  console.log(`1. calling delayedResponseWithCallback`);
  delayedResponseWithCallback(afterWait);
  console.log(`4. after calling delayedResponseWithCallback`)
}

callDelayedAndWait();

// Ici, nous avons défini une fonction nommée callDelayedAndWait. Dans cette fonction, nous avons défini une autre fonction de rappel nommée afterWait, qui enregistre
// simplement un message sur la console. Nous enregistrons ensuite un message sur la console pour indiquer que nous sommes sur le point d'appeler la fonction 
// delayedResponseWithCallback. Après avoir enregistré le message, nous invoquons la fonction delayedResponseWithCallback et passons la fonction afterWait comme seul argument.
// Enfin, nous enregistrons un message sur la console, indiquant que nous avons appelé la fonction delayedResponseWithCallback. La dernière ligne de cet extrait de code appelle
// en fait la fonction callDelayedAndWait pour démarrer notre petit programme. La sortie de ce code est la suivante :

// 1. calling delayedResponseWithCallback
// 2. calling setTimeout
// 3. after calling setTimeout
// 4. after calling delayedResponseWithCallback
// 5. executeAfterTimeout()
// 6. afterWait()

// Ici, nous pouvons voir que le premier message enregistré sur la console a été enregistré juste avant l'appel de la fonction delayedResponseWithCallback.
// Les deuxième et troisième messages ont été enregistrés à partir de la fonction delayedResponseWithCallback, juste avant et juste après l'appel de la fonction
// setTimeout. Le quatrième message enregistré sur la console a été enregistré après l'appel à la fonction delayedResponseWithCallback renvoyé. Si vous exécutez
// ce code, vous remarquerez que les quatre premiers messages sont immédiatement enregistrés sur la console. Il y a ensuite une pause de 4 secondes, avant que les
// cinquième et sixième messages ne soient enregistrés sur la console. Si nous examinons cette séquence d'événements d'un peu plus près, nous verrons que bien que
// nous utilisions deux fonctions de rappel, à savoir afterWait et executeAfterTimeout, il n'y a qu'un seul appel asynchrone dans cet exemple. Cet appel asynchrone
// est l'appel à la fonction setTimeout, qui provoque un délai de 4 secondes avant l'appel de la fonction de rappel fournie. Cela signifie que la fonction executeAfterTimeout
// est placée dans une file d'attente et que le runtime JavaScript appelle cette fonction de rappel à un moment ultérieur. Une fois appelée, la fonction executeAfterTimeout
// appelle ensuite la fonction afterWait, qui a été transmise en tant que fonction de rappel. Cette séquence d'événements montre clairement la nature du traitement
// asynchrone dans le runtime JavaScript. Le runtime traitera et exécutera chaque ligne de code qu'il rencontre. S'il trouve un bloc de code asynchrone, il placera
// ce bloc de code dans une file d'attente pour un traitement ultérieur. Une fois ce bloc de code dans la file d'attente, le runtime continuera à traiter notre base
// de code et répétera le processus s'il rencontre d'autres appels asynchrones. La numérotation des journaux de la console dans cet exemple illustre l'ordre d'exécution du code.


