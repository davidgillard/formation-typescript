var objectA = {
    nestedProperty: {
        name: "nestedPropertyName" // une première propriété
        // firstname: "nestedPropertyFirstName" // une seconde propriété
    }
};
function printNestedOptionalChain(obj) {
    var _a;
    if ((_a = obj === null || obj === void 0 ? void 0 : obj.nestedProperty) === null || _a === void 0 ? void 0 : _a.name) {
        console.log("name = ".concat(obj.nestedProperty.name));
    }
    else {
        console.log("name not found or undefined");
    }
}
printNestedOptionalChain(undefined);
printNestedOptionalChain({
    aProperty: "another property"
});
printNestedOptionalChain({
    nestedProperty: {
        name: null
    }
});
printNestedOptionalChain({
    nestedProperty: {
        name: "nestedPropertyName"
    }
});
// Il est recommandé de vérifier que les propriétés que vous vous attendez à trouver sont
// effectivement présentes, avant de tenter d'y accéder. Cela génère un code similaire à ce
// qui suit :
// name not found or undefined
// name not found or undefined
// name not found or undefined
// name = nestedPropertyName
// Ici, nous pouvons voir que la syntaxe de chaînage optionnelle renverra undefined si l'une
// des propriétés de la chaîne de propriétés est nulle ou indéfinie.
// Le chaînage optionnel est une fonctionnalité très attendue, et la
// syntaxe est une vue bienvenue pour les développeurs qui sont habitués à écrire
// de longues instructions if pour s'assurer que le code est robuste et
// n'échouera pas de manière inattendue.
