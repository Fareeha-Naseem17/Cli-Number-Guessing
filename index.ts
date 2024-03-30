#! /usr/bin/env node

import inquirer from "inquirer";

console.log("\n\tWELCOME TO CLI NUMBER GUESSING GAME\n");

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
    },
]);

if(answers.userGuessedNumber === randomNumber){
    console.log("Congratulations! You Guessed the Right Number.");
} else {
    console.log("You Guessed the Wrong number.");
}