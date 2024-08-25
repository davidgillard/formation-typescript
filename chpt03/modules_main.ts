import { Module1 as MyMod1 } from "./modules/Module1";
import { MultipleClass1, MultipleClass2 } from "./modules/MultipleExports";
import * as MultipleExports from "./modules/MultipleExports";
import DefaultAdd, { ModuleNonDefaultExport } from "./modules/DefaultExport";

let myRenameMod = new MyMod1();
myRenameMod.print();

let mc1 = new MultipleClass1;
let mc2 = new MultipleClass2;

let meMc1 = new MultipleExports.MultipleClass1();
let meMc2 = new MultipleExports.MultipleClass2();

let modDefault = DefaultAdd(1, 2);
let modNonDefault = new ModuleNonDefaultExport();
