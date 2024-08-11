// Le duck typing ?
// En programmation informatique, le duck typing (traduction : typage canard) est un style de 
// typage dynamique de certains langages de programmation orientés objet. En duck typing, 
// la sémantique d’un objet, c’est-à-dire son type dans le contexte où il est utilisé, est déterminée
// par l’ensemble de ses méthodes et de ses attributs, et non, comme il l’est habituellement, 
// par un type défini et nommé explicitement par le programmeur dans les systèmes à typage nominatif.
// C’est l’équivalent du typage structurel pour les langages à typage statique, comme OCaml
//
// plus simplement si il ressemble à un canard et qu'il cancanne c'est probablement un canard

var nameIdObject = { name: "MyName", id: 1, print() { } };
nameIdObject = { id: 2, name: "anotherName", print() {} };

// lors d'une première compilation tout ce passe bien jusqu'ici mais essayons de changer quelque chose

// ici je tentes d'assigner un objet nameIdObject qui n'a pas les propriétés requises, typeScript va généré une 
// erreur qui me specifie que la propriété print est manquante.


nameIdObject = { id: 3, name: "thirdName" };

// error TS2741: Property 'print' is missing in type '{ id: number; name: string; }' but required10:32:51 [10/70]
// : string; id: number; print(): void; }'.

// typeScript utilise le duck typing pour garantir la sécurité du type
