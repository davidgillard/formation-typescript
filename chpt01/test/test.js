"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer = require("inquirer");
inquirer.prompt([
    {
        name: "first_name",
        message: "what is your name ?"
    }
]).then(function (answers) {
    console.log("you answered : ".concat(answers.first_name));
});
