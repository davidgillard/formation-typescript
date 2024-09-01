"use strict";
/*
 * La nature asynchrone de JavaScript prend un certain temps à s'habituer. Chaque fois que nous devons attendre une ressource ou une saisie utilisateur,
 * nous devons implémenter un mécanisme de rappel pour gérer cela correctement. Malheureusement, à mesure que la base de code se développe, nous constatons
 * que nous devons de plus en plus compter sur les rappels. Cela peut facilement conduire à ce que l'on appelle l'enfer des rappels, où nous avons tellement
 * de rappels imbriqués dans d'autres rappels que le code devient de plus en plus difficile à lire et à maintenir. À titre d'exemple, considérons un code
 * qui doit lire trois fichiers l'un après l'autre et imprimer leur contenu, comme suit :
 * */
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
fs.readFile("./test1.txt", function (err, data) {
    if (err) {
        console.log("an error occurred: ".concat(err));
    }
    else {
        console.log("test1.txt contents: ".concat(data));
        fs.readFile("./test2.txt", function (err, data) {
            if (err) {
                console.log("an error occurred : ".concat(err));
            }
            else {
                console.log("test2.txt contents : ".concat(data));
                fs.readFile("./test3.txt", function (err, data) {
                    if (err) {
                        console.log("an error occurred: ".concat(err));
                    }
                    else {
                        console.log("test3.txt contents : ".concat(data));
                    }
                });
            }
        });
    }
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
