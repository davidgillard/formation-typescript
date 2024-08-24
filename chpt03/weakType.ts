interface IWeakType {
  id?: number,
  name?: string
}

let weakTypeNoOverlap: IWeakType = {
  description: "a description"
}

// explication: 

// les types faibles ne sont selon moi pas une solution a adopter
// la propriété description n'etant pas définit dans l'interface nous obtenons une erreur à la compilation
