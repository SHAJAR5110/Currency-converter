#!/usr/bin/env node
import inquirer from "inquirer"
import inquirere from "inquirer"
let keepgoing=true;
const currency:any={
 USD:1, //Base Currency
EUR:0.91,
 GBP:0.76,
 INR:74.57,
 PKR:280
};
while(keepgoing){
let userAnswer=await inquirer.prompt([
    {
        name:"From",
        message:"Convert From: ",
        type:"list",
        choices:['USD','EUR','GBP','PKR','INR']
    },
    {
        name:"To",
        message:"Convert To: ",
        type:"list",
        choices:['USD','EUR','GBP','PKR','INR']
    },
    {
        name:"Amount",
        message:"Enter Amount: ",
        type:"number",
    }
]);

let Amountfrom = currency[userAnswer.From];
let Amountto = currency[userAnswer.To];
let userAmount=userAnswer.Amount;
let base =userAmount/Amountfrom;
let Converted=base*Amountto;
console.log(`Total Amount is: ${Converted}`);


let runAgain=await inquirer.prompt({
    name:"run",
    message:"Do you want to Run again: ",
    type:"confirm"
});
keepgoing=runAgain.run;
}