interface IIdName {
  id: number;
  name: string;
}

interface IDescrValue {
  descr: string;
  value: number;
}

// explication:

// Ici, nous avons deux interfaces. La première s'appelle IIdName et contient une propriété id de type number et une
// propriété name de type string. La seconde interface s'appelle IDescrValue et contient une propriété descr de type 
// string et une propriété value de type number. Notez que ces interfaces décrivent des objets complètement différents
// et n'ont aucune propriété en commun. Nous pouvons maintenant écrire une fonction qui fera la distinction entre ces 
// deux interfaces en utilisant l'opérateur in comme suit :


function printNameOrValue(
  obj: IIdName | IDescrValue): void {
  if ('id' in obj) {
    console.log(`obj.name : ${obj.name}`);
  }
  if ('descr' in obj) {
    console.log(`obj.value : ${obj.value}`);
  }
}

// Ici, nous avons une fonction nommée printNameOrValue qui a un seul paramètre nommé obj, qui peut être soit du type IIdName, soit du type
// IDescrValue. Notez comment nous utilisons ensuite une instruction if pour créer une protection de type qui vérifie la propriété id à l'aide
// de l'opérateur in. En d'autres termes, si l'objet a une propriété nommée id, entrez le bloc if. Dans ce bloc if, l'objet sera traité comme
// implémentant l'interface IIdName, et ce bloc de code agit comme une protection de type. Nous enregistrons ensuite la valeur de la propriété
// obj.name, qui fait également partie de l'interface IIdName, sur la console. La deuxième instruction if de cette fonction utilise à nouveau 
// l'opérateur in, mais cette fois-ci en utilisant la propriété descr pour détecter si l'objet implémente l'interface IDescrValue. S'il implémente
// cette interface, nous enregistrons ensuite la valeur de la propriété obj.value, qui fait partie de l'interface IDescrValue, sur la console. 
// Nous pouvons maintenant utiliser cette fonction comme suit :

printNameOrValue({
  id: 1,
  name: "nameValue"
});

printNameOrValue({
  descr: "description",
  value: 2
});

// Ici, nous appelons la fonction printNameOrValue avec deux objets différents. La structure du premier objet 
// est conforme à l'interface IIdName et la structure du second objet est conforme à l'interface IDescrValue. 
// Le compilateur nous fera savoir si nous appelons cette fonction avec quelque chose qui ne correspond à aucune
// de ces interfaces. La sortie de ce code est la suivante :

// obj.name : nameValue
// obj.value : 2

// Ici, nous pouvons voir que la fonction printNameOrValue détecte les propriétés de chacun de ces objets à l'aide de
// l'opérateur in et entre dans le bloc de code de protection de type en fonction des propriétés qu'elle trouve. Notez
// que si un objet implémente les deux interfaces ou possède des propriétés qui correspondent à ces deux interfaces, 
// alors les deux protections de type seront exécutées, car nous avons deux instructions if, et non une instruction if else.
