/*
 * Une interface peut constituer l'interface de base pour une ou plusieurs autres interfaces. À titre d'exemple, considérons le code suivant :
 * */
var IdNameClass = /** @class */ (function () {
    function IdNameClass() {
        this.id = 0;
        this.name = "nameString";
    }
    return IdNameClass;
}());
var multipleObject = {
    id: 1,
    name: "myName",
    description: "myDescription"
};
// Ici, nous avons défini une interface nommée IMultiple, qui dérive à la fois des interfaces IDerivedFromBase et IDerivedFromBaseNumber,
// à l'aide d'une liste séparée par des virgules. Elle définit également une propriété nommée description de type chaîne. Nous définissons
// ensuite un objet nommé multipleObject qui implémente cette interface. Selon nos règles d'héritage, cette interface IMultiple possède donc
// trois propriétés : une propriété id de type number provenant de l'interface IDerivedFromBaseNumber, une propriété name provenant de l'interface
// IDerivedFromBase, ainsi que la propriété description. Cet objet multipleObject doit donc fournir une propriété pour chacune des propriétés
// trouvées dans l'interface.
