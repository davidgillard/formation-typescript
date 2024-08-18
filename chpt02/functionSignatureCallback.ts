/*
 * TypeScript utilise ses règles de typage fortes pour garantir que si nous définissons une fonction qui nécessite
 * une fonction de rappel, nous pouvons garantir que cette fonction est fournie correctement. Afin de spécifier qu'un
 * paramètre de fonction doit être une signature de fonction, TypeScript introduit la syntaxe de flèche grasse, ou () =>,
 * pour indiquer une signature de fonction. Réécrivons notre code JavaScript précédent en utilisant cette syntaxe comme suit :*/


function myCallback(text: string): void {
  console.log(`myCallback called with ${text}`);
}

function withCallbackArg(
  message: string,
  callbackFn: (text: string) => void 
) {
  console.log(`withCallback called, message : ${message}`);
  callbackFn(`${message} from withCallback"`)
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

// Ici, nous avons invoqué la fonction withCallbackArg deux fois : une fois légitimement, en fournissant une chaîne et une fonction comme
// arguments, et une fois par erreur, en fournissant deux chaînes comme arguments. Ce code produira l'erreur suivante :

// error TS2345: Argument of type 'string' is not assignable to parameter of type '(text: string) => void'.
// 31 withCallbackArg("text", "this is not a function");

// Ici, nous pouvons clairement voir que le compilateur ne nous permettra pas d'invoquer la fonction withCallbackArg si nous ne fournissons
// pas le deuxième argument sous forme de fonction avec une signature qui correspond à notre définition de fonction. Il s'agit d'une 
// fonctionnalité très puissante de TypeScript. Grâce à ses règles de typage strictes, elle nous empêche de fournir des fonctions de rappel
// qui ne sont pas conformes à la signature de fonction correcte. Encore une fois, cela permet de détecter les erreurs au moment de la compilation,
// et non plus tard, lorsque le code doit être réellement exécuté et testé.
