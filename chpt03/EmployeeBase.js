/*
 * Une classe abstraite est une classe qui ne peut pas être instanciée. En d'autres termes, il s'agit d'une classe conçue pour être dérivée.
 * Le but des classes abstraites est généralement de fournir un ensemble de propriétés ou de fonctions de base partagées par un groupe de classes
 * similaires. Les classes abstraites sont marquées par le mot-clé abstract. Examinons l'utilisation d'une classe abstraite, comme suit :
 * */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// abstract class EmployeeBase {
//   public id: number;
//   public name: string;
//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//   }
var EmployeeBase = /** @class */ (function () {
    function EmployeeBase(id, name) {
        this.id = id;
        this.name = name;
    }
    return EmployeeBase;
}());
// class OfficeWorker extends EmployeeBase {}
var OfficeWorker = /** @class */ (function (_super) {
    __extends(OfficeWorker, _super);
    function OfficeWorker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OfficeWorker.prototype.doWork = function () {
        console.log("".concat(this.name, " : doing work"));
    };
    return OfficeWorker;
}(EmployeeBase));
// class OfficeManager extends OfficeWorker {
//   public employees: OfficeWorker[] = [];    
// }
var OfficeManager = /** @class */ (function (_super) {
    __extends(OfficeManager, _super);
    function OfficeManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.employees = [];
        return _this;
    }
    OfficeManager.prototype.manageEmployees = function () {
        _super.prototype.doWork.call(this);
        for (var _i = 0, _a = this.employees; _i < _a.length; _i++) {
            var employee = _a[_i];
            employee.doWork();
        }
    };
    return OfficeManager;
}(OfficeWorker));
// Ici, nous avons défini une classe abstraite nommée EmployeeBase qui possède une propriété id de type number et une propriété name de type string.
// La classe EmployeeBase possède une fonction constructeur qui initialise ces propriétés. Nous avons ensuite défini une classe nommée OfficeWorker
// qui dérive de la classe abstraite EmployeeBase. Enfin, nous avons une classe nommée OfficeManager qui dérive de la classe OfficeWorker et possède
// une propriété interne nommée employee qui est un tableau de type OfficeWorker. Nous pouvons construire des instances de ces classes comme suit :
var joeBlogg = new OfficeWorker(1, "Joe");
var jillBlogg = new OfficeWorker(2, "Jill");
var jackManager = new OfficeManager(3, "Jack");
// Ici, nous avons créé deux variables nommées joeBlogg et jillBlogg qui sont de type OfficeWorker. Nous avons également créé une variable nommée jackManager
// de type OfficeManager. Notez que nous devons fournir deux arguments lors de la construction de ces objets. En effet, la classe OfficeWorker et la classe
// OfficeManager héritent toutes deux de la classe de base abstraite EmployeeBase. La classe de base abstraite EmployeeBase requiert à la fois un argument
// id et un argument name dans son constructeur.
/*
 * Une méthode de classe abstraite est similaire à une classe abstraite, dans la mesure où elle est conçue pour être remplacée. En d'autres termes,
 * déclarer une méthode de classe comme abstraite signifie qu'une classe dérivée doit fournir une implémentation de cette méthode. Pour cette raison,
 * les méthodes de classe abstraites ne sont pas autorisées à fournir une implémentation de fonction. À titre d'exemple, mettons à jour notre classe
 * EmployeeBaseMethods comme suit :
 * */
// Ici, nous avons ajouté une méthode de classe nommée doWork qui a été marquée comme abstraite. Cela signifie que nous devrons
// fournir une implémentation de cette méthode dans toute classe dérivée, comme suit :
// Ici, nous avons mis à jour la classe OfficeWorker, qui dérive de la classe EmployeeBase, et fourni une implémentation de la méthode
// abstraite doWork. Cette fonction enregistre simplement un message dans la console. Mettons maintenant à jour notre classe OfficeManager,
// comme suit :
// Ici, nous avons ajouté une méthode nommée manageEmployees à la classe OfficeManager. Cette méthode appelle la méthode doWork, qui est définie sur la classe
// de base OfficeWorker, et nous devons donc utiliser le mot-clé super pour y accéder. Il parcourt ensuite chacun des éléments du tableau des employés et appelle
// la méthode doWork sur chacune de ces classes. Nous pouvons utiliser ces classes mises à jour comme suit :
jackManager.employees.push(joeBlogg);
jackManager.employees.push(jillBlogg);
jackManager.manageEmployees();
// Ici, nous avons ajouté les instances joeBlogg et jillBlogg de la classe OfficeWorker au tableau des employés sur l'instance jackManager de la classe OfficeManager.
// Nous appelons ensuite la fonction manageEmployees sur l'instance jackManager. Ce code produira la sortie suivante :
