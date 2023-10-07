#! /usr/bin/env node

import inquirer from "inquirer";

const userInput = await inquirer.prompt([
    {
        type : "number",
        name : "userID",
        message : "Please Enter Your User ID"
    },
    {
        type: "number",
        name: "userPin",
        message: "Please Enter Your Pin"
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Please Select Your Account Type"
    },
    {
        type: "list",
        name: "transectionType",
        choices: ["Fast Cash", "Custom Transection"],
        message: "Please Select Your Transection Type",
        when (userInput) {
            return userInput.accountType;
        }
    },
    {
        type: "list",
        name: "withdrawalAmount",
        choices: ["1000", "3000", "5000", "10000"],
        message: "Please Select Your Fast Cash Amount",
        when (userInput) {
            return userInput.transectionType === "Fast Cash";
        }
    },
    {
        type: "number",
        name: "withdrawalAmount",
        message: "Please Cash Amount",
        when (userInput) {
            return userInput.transectionType === "Custom Transection";
        }
    },

])

if (userInput.userID && userInput.userPin) {
    const balance = Math.floor(Math.random()*10000)
    console.log(`Your Previous Balance: ${balance}`)
    const enteredAmount = userInput.withdrawalAmount
    if (balance >= enteredAmount) {
        const remaning = balance - enteredAmount
        console.log(`Your Current Balance: ${remaning}`)
    } else {
        console.log("Insufficient Balance")
    }
}