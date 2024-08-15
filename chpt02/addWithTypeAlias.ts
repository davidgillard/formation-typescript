type StringOrNumber = string | number;

function addWithTypeAlias(
  arg1 : StringOrNumber,
  arg2 : StringOrNumber
) {
  return arg1.toString() + arg2.toString();
}
console.log(` "mon", "test" = ${addWithTypeAlias("mon", "test" )}` );
console.log(` "5", "test" = ${addWithTypeAlias(5, "test" )}` );
console.log(` "mon", "5" = ${addWithTypeAlias("mon", 5 )}` );


// explications: 

//
// Ici, nous avons défini un alias de type nommé StringOrNumber en utilisant le mot-clé type et
// en lui attribuant une union de type chaîne ou nombre. Nous utilisons ensuite ce type
// StringOrNumber dans notre définition de fonction pour la fonction addWithTypeAlias. Notez que
// les arguments arg1 et arg2 sont tous deux de type StringOrNumber, ce qui nous permettra d'appeler
// cette fonction avec des chaînes ou des nombres. Les alias de type sont un moyen pratique de 
// spécifier une union de type et de lui donner un nom, et sont particulièrement utiles lorsque 
// l'union de type est utilisée à plusieurs reprises.
