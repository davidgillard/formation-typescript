/*
 * La nature asynchrone de JavaScript prend un certain temps à s'habituer. Chaque fois que nous devons attendre une ressource ou une saisie utilisateur,
 * nous devons implémenter un mécanisme de rappel pour gérer cela correctement. Malheureusement, à mesure que la base de code se développe, nous constatons
 * que nous devons de plus en plus compter sur les rappels. Cela peut facilement conduire à ce que l'on appelle l'enfer des rappels, où nous avons tellement
 * de rappels imbriqués dans d'autres rappels que le code devient de plus en plus difficile à lire et à maintenir. À titre d'exemple, considérons un code 
 * qui doit lire trois fichiers l'un après l'autre et imprimer leur contenu, comme suit :
 * */

import * as fs from "fs";

fs.promises.readFile("./test1.txt") .then((value) => {
    console.log(`ps test1.txt read : ${value}`);
    return fs.promises.readFile("./test2.txt");
  }.then((value) => {
    console.log(`ps test2.txt read: ${value}`);
    return fs.promises.readFile("./test3.txt");
  }).then((value) => {
    console.log(`ps test3.txt read: ${value}`);
  })
  .catch((error) => {
    console.log(`an error occurred : ${error}`);
  });

// Ici, nous importons la bibliothèque de système de fichiers Node nommée fs, en utilisant notre syntaxe de module standard. Nous appelons ensuite la fonction 
// readFile de la bibliothèque fs afin de lire un fichier à partir du disque. Cette fonction readFile prend deux paramètres. Le premier paramètre est le nom du
// fichier lui-même, qui est "./test1.txt", et le deuxième paramètre est une fonction de rappel qui doit être invoquée une fois que le fichier a été lu à partir
// du disque. Cette fonction de rappel a deux paramètres, nommés err et data. Dans cette fonction de rappel, nous vérifions si la fonction readFile a renvoyé une
// erreur, en vérifiant l'argument err. Si elle n'a pas renvoyé d'erreur, nous pouvons alors procéder à l'enregistrement du contenu du fichier sur la console et
// lire le deuxième fichier nommé "./test2.txt". Ce deuxième appel à la fonction readFile doit à nouveau fournir une fonction de rappel, et dans cette fonction de
// rappel, vérifier si une erreur s'est produite. Le modèle est répété pour le troisième fichier. Comme on peut le voir dans cet extrait de code, en faisant les
// choses les unes après les autres à l'aide de rappels, notre code devient une série de fonctions imbriquées dans des fonctions imbriquées, et chaque fonction
// imbriquée répète le même ensemble d'étapes. Chaque fonction imbriquée, par exemple, doit vérifier la condition d'erreur dans le rappel avant de continuer. La
// nature imbriquée des appels asynchrones, chacun devant fournir une fonction de rappel du même type, et qui fait le même genre de chose, est ce qui contribue à
// l'enfer des rappels. Pour simplifier le code asynchrone et éliminer l'enfer des rappels, de nombreuses bibliothèques JavaScript différentes ont implémenté des
// modèles de conception similaires pour faciliter l'utilisation de la syntaxe des rappels. Finalement, ces modèles de conception ont convergé vers une proposition
// pour le langage JavaScript, appelée Promises. Jetons un œil au même code, mais en utilisant Promises comme suit :

// Ici, nous utilisons l'espace de noms promises de la bibliothèque fs pour appeler une fonction readFile, qui est une version basée sur Promise du même appel de fonction
// readFile que nous avons utilisé précédemment. Cette version basée sur Promise de la fonction readFile prend un seul argument, qui est le nom du fichier. Nous pouvons
// ensuite appeler une fonction then, qui est mise à disposition de toutes les fonctions qui renvoient des promesses, telles que la fonction readFile. Cette fonction then
// sera appelée lorsque la fonction asynchrone sera renvoyée, et elle fournit un seul paramètre qui contiendra les résultats de l'appel asynchrone. La fonction readFile
// rendra donc le contenu du fichier lu sur le disque disponible via ce paramètre, qui est nommé value dans notre première fonction then. Dans cette fonction then, dont
// nous savons qu'elle sera appelée après la lecture du fichier sur le disque, nous enregistrons un message sur la console, qui contient le contenu du fichier. Nous renvoyons
// ensuite les résultats d'un autre appel à la fonction readFile avec le nom du prochain fichier à lire. Nous répétons également ce modèle pour le troisième fichier. Cette
// technique de renvoi d'une Promise dans une fonction then nous permet d'enchaîner une série de fonctions then les unes après les autres. Cette technique est connue sous
// le nom de syntaxe fluide et simplifie énormément notre code. Il n'y a pas de fonctions imbriquées dans des fonctions imbriquées ; nous avons juste une série de fonctions
// then qui se suivent. Notez qu'après toutes les fonctions then, nous pouvons également ajouter une fonction catch à la chaîne d'appel. Cette fonction catch unique gérera
// toutes les erreurs qui peuvent se produire si nous rencontrons une erreur lors de la lecture de l'un des trois fichiers. Le fait d'avoir une seule fonction catch simplifie
// encore plus notre code et nous n'avons pas à vérifier à plusieurs reprises les erreurs après la lecture de chaque fichier. De plus, si une erreur se produit lors de la lecture
// du premier fichier, le bloc catch sera exécuté immédiatement et aucune autre fonction then ne sera exécutée. Cette syntaxe basée sur Promise est une manière beaucoup plus propre
// et plus simple d'écrire une série d'appels asynchrones qui doivent être exécutés les uns après les autres. Elle garantit également que toute erreur mettra fin à l'exécution de
// la chaîne d'appels Promise et que notre chemin d'exécution de code passera par notre clause catch.
