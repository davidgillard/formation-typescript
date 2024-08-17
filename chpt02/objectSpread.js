var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var firstObj = { id: 1, name: "firstObj" };
var secondObj = __assign({}, firstObj);
console.log("secondObj : ".concat(JSON.stringify(secondObj)));
// Explication
//
// Lorsque nous travaillons avec des objets JavaScript de base, nous devons souvent copier les propriétés
// d'un objet vers un autre, ou effectuer un mélange et une correspondance de propriétés de divers objets.
// Dans TypeScript, nous pouvons utiliser une technique ES7 connue sous le nom de propagation d'objets pour
// y parvenir. Dans le code ci-dessus :
// Ici, nous avons défini une variable nommée firstObj qui est de type objet et possède une propriété
// id et une propriété name. Nous définissons ensuite une variable nommée secondObj et utilisons la syntaxe
// de propagation d'objets de trois points ( ... ) pour lui attribuer une valeur. La valeur que nous attribuons
// est un objet composé de la variable firstObj, c'est-à-dire { ...firstObj }.
// Le résultat de ce code est le suivant :
// secondObj : {"id":1,"name":"firstObj"}
//
// Ici, nous pouvons voir que les propriétés et valeurs id et name ont été copiées dans la nouvelle variable secondObj.
// Nous pouvons également utiliser cette technique pour combiner plusieurs objets ensemble. Considérez le code suivant :
var nameObj = { name: "nameObj name" };
var idObj = { id: 1 };
var obj3 = __assign(__assign({}, nameObj), idObj);
console.log("obj3 = ".concat(JSON.stringify(obj3)));
