/*
 * TypeScript utilise ses règles de typage fortes pour garantir que si nous définissons une fonction qui nécessite
 * une fonction de rappel, nous pouvons garantir que cette fonction est fournie correctement. Afin de spécifier qu'un
 * paramètre de fonction doit être une signature de fonction, TypeScript introduit la syntaxe de flèche grasse, ou () =>,
 * pour indiquer une signature de fonction. Réécrivons notre code JavaScript précédent en utilisant cette syntaxe comme suit :*/
function myCallback(text) {
    console.log("myCallback called with ".concat(text));
}
function withCallbackArg(message, callbackFn) {
    console.log("withCallback called, message : ".concat(message));
    callbackFn("".concat(message, " from withCallback\""));
}
// Ici, nous avons défini une fonction fortement typée nommée myCallback qui a un seul paramètre nommé text, qui est de type string,
// et renvoie void. Nous avons ensuite défini une fonction fortement typée nommée withCallbackArg qui a également deux paramètres.
// Le premier paramètre est nommé message et est de type string, et le deuxième paramètre, nommé callbackFn, utilise la syntaxe de
// flèche grasse, comme suit :
// callbackFn: (text: string) => void
// Cette syntaxe définit le paramètre callbackFn comme étant une fonction qui accepte un seul paramètre de type string et renvoie void.
// Nous pouvons ensuite utiliser cette fonction withCallbackArg comme suit :
withCallbackArg("initial text", myCallback);
withCallbackArg("text", "this is not a function");
