var inferredString = "this is a string";
var inferredNumber = 1;
// dans la suite de ce code on essaye de stocker une variable de type String dans une 
// variable de type number et là c'est pas bien accepté par la compilateur 
// inferenceType.ts:4:1 - error TS2322: Type 'string' is not assignable to type 'number'.
inferredNumber = inferredString;
// L'inférence de type est une technique utilisée par les langages à typage statique, 
// où les types de variables peuvent être déduits du contexte par le compilateur. 
// Les langages varient dans leur utilisation et leur interprétation de l'inférence de type
