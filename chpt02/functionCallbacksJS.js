/* 
 * L'une des fonctionnalités les plus puissantes de JavaScript, et en fait la technologie sur laquelle NodeJS a été construit,
 * est le concept de fonctions de rappel. Une fonction de rappel est une fonction qui est transmise en tant qu'argument à une
 * autre fonction, et qui est ensuite généralement invoquée dans la fonction d'origine. En d'autres termes, nous appelons une
 * fonction et lui disons d'aller faire ce qu'elle doit faire, et quand elle a terminé, d'appeler la fonction que nous avons
 * fournie. Tout comme nous pouvons transmettre une valeur à une fonction, nous pouvons également transmettre une fonction à
 * une fonction comme l'un de ses arguments. Cela est mieux illustré en examinant un peu de code JavaScript, comme suit :
 * */

var myCallback = function (text) {
  console.log("myCallback call with " + text);
}

function withCallbackArg(message, callbackFn) {
  console.log("withCallback called, message : " + message);
  callbackFn(message + " from withCallback");
}

withCallbackArg("initial text", myCallback);

// Explication: 

// Ici, nous commençons avec une fonction nommée myCallback qui accepte un seul paramètre nommé text. Elle enregistre simplement
// la valeur de l'argument text dans la console. Nous définissons ensuite une fonction nommée withCallbackArg, qui possède deux
// paramètres, nommés message et callbackFn. Cette fonction enregistre un message dans la console à l'aide de l'argument message,
// puis appelle la fonction transmise en tant que paramètre callbackFn. Lors de l'appel de la fonction transmise, elle l'appelle
// avec du texte indiquant qu'elle a été appelée dans la fonction withCallback. Enfin, nous invoquons la fonction withCallbackArg
// avec deux arguments. Le premier argument est la chaîne de texte de "texte initial", et le deuxième argument est la fonction 
// myCallback elle-même. La sortie de ce code est la suivante :

// *********************************************************
// withCallback called, message : initial text
// myCallback call with initial text from withCallbackArg
// **********************************************************

// Comme nous pouvons le voir sur cette sortie, la fonction withCallbackArg est invoquée et enregistre le message « withCallback 
// appelé, message : texte initial » sur la console. Elle appelle ensuite la fonction que nous lui avons transmise en tant que 
// fonction de rappel, qui est la fonction myCallback. Malheureusement, JavaScript ne peut pas dire jusqu'à ce qu'il exécute ce
// code si le deuxième argument passé dans la fonction withCallbackArg est réellement une fonction. Testons cette théorie en 
// transmettant une chaîne pour le paramètre callbackFn, au lieu d'une fonction réelle, comme suit :

withCallbackArg("text", "this is not a function");

