/*
 * TypeScript nous permet d'effectuer une itération sur les propriétés d'un type et d'extraire les noms de ses propriétés
 * grâce au mot-clé keyof, que nous pouvons utiliser comme type de littéral de chaîne. Explorons ce concept et comment il
 * s'applique aux interfaces, comme suit :*/
function getProperty(key, value) {
    console.log("".concat(key, " = ").concat(value[key]));
}
getProperty("id", { id: 1, name: "firstName", telephone: "06xxxxxxxx" });
getProperty("name", { id: 2, name: "secondName", telephone: "07xxxxxxxx" });
getProperty("telephone", { id: 3, name: "thirdName", telephone: "09yywwxxbb" });
