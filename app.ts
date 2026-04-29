import { BasicExpense,BusinessExpense } from "./expense.js";   

let expense:(BasicExpense | BusinessExpense)[]=[
    new BasicExpense(1,100,"bus",["10.10.10","paid"]),
    new BusinessExpense(2,200,"car",["20.20.20","paid"],50)
]

function getTotal(expense:(BasicExpense | BusinessExpense)[]) : number{
    let total=0;
    for(let i=0;i<expense.length;i++){
        if(expense[i] instanceof BusinessExpense){
            total+=expense[i].amount+(expense[i] as BusinessExpense).gst; ;
        }
        else{
            total+=expense[i].amount
        }
    }
    return total;
}
for(let i=0;i<expense.length;i++){
console.log("\nsummary:"+expense[i].getSummary());}
console.log("\ntotal:"+getTotal(expense));
