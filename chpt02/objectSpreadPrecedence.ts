let objPrec1: object = { id:1, name: "Obj1 name"};
let objPrec2: object = { id:1001, desc: "Obj2 description"};

let objPrec3 = { ...objPrec1, objPrec2 };
console.log(`object3: ${JSON.stringify(objPrec3, null, 4)}`);

// Explication:

// Ici, nous pouvons voir que l'opérateur de propagation a combiné les propriétés des deux objets d'origine dans la variable
// objPrec3. Ce nouvel objet possède les trois propriétés, id, name et desc. Notez que la propriété id était commune aux deux
// objets d'origine et que la valeur 1001 a pris le pas dans ce cas, car elle a été extraite de l'objet spécifié en dernier.

// object3: {
//     "id": 1,
//     "name": "Obj1 name",
//     "object2": {
//         "id": 1001,
//         "desc": "Obj2 description"
//     }
// }
