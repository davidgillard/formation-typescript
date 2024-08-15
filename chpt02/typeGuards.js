function addWithUnion(arg1, arg2) {
    return arg1 + arg2;
}
// à la compilation ce code nous remonte ici, c'est qu'il ne peut pas dire quel type il doit
// utiliser lorsqu'il tente d'ajouter arg1 à arg2. Est-il censé ajouter une chaîne à un nombre,
// ou une chaîne à une chaîne ? Comme nous l'avons vu dans le chapitre 1, Mise en route rapide,
// les effets de l'ajout d'une chaîne et d'un nombre en JavaScript peuvent conduire à des résultats
// indésirables.
//
// et pour palier à cette situation Un garde de type est une expression
// qui effectue une vérification sur notre type, puis garantit ce type dans sa portée.
