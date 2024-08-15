function addWithTypeGuard(arg1, arg2) {
    if (typeof arg1 === "string") {
        // arg1 est considéré comme une chaine de caractère
        console.log("arg1 is of type string");
        return arg1 + arg2;
    }
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        // les deux arguments sont des numbers
        console.log("arg1 et arg2 sont des numbers");
        return arg1 + arg2;
    }
    console.log("default return treat both as strings");
    return arg1.toString() + arg2.toString();
}
console.log(" \"1\", \"2\" = ".concat(addWithTypeGuard("1", "2")));
console.log(" 1 , 2 = ".concat(addWithTypeGuard(1, 2)));
console.log(" 1 , \"2\" = ".concat(addWithTypeGuard(1, "2")));
/* Ici, nous appelons la fonction addWithTypeGuard trois fois : une fois avec les deux arguments de type chaîne, une fois avec les deux arguments de type nombre et la troisième fois avec un nombre et une chaîne.
 * La sortie de ce code est la suivante :

Ici, nous pouvons voir que notre premier appel à la fonction addWithTypeGuard utilise deux arguments
qui sont des chaînes. Le code identifie le premier argument comme étant de type chaîne et entre
donc dans le premier bloc d'instructions if. La concaténation de la chaîne « 1 » avec la chaîne « 2 »
donne la chaîne « 12 ». Le deuxième appel à la fonction addWithTypeGuard utilise deux nombres comme
arguments, et notre code identifie donc les deux arguments comme des nombres, et ajoute ainsi
la valeur 1 et la valeur 2, ce qui donne 3. Le troisième appel à la fonction addWithTypeGuard utilise
un nombre comme premier argument et une chaîne comme deuxième. Le code revient donc à notre
code par défaut et traite les deux arguments comme des chaînes */
