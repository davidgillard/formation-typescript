interface IOptional {
  id: number;
  name?: string;
}

let optionalId: IOptional = {
  id: 1
}

let optionalIdName: IOptional = {
  id: 2,
  name: "optional name"
}

// explication: 

// comme vu dans les fonctions, le caractère optionnel ""?"" permet d'utiliser ou pas l'ensemble des propriétés 
