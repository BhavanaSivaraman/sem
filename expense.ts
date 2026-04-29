/*Create a IExpense interface with id ,amount, category and a tuple with transaction date and description both should follow as only string a 
class basic expense which implements interface IExpense and has a get summary method which return formatted string with all details 
and another class business expenses extends basic expense class which has additional parameter gst and override get summary method
 and array which stores instances of both class and a 
 function which returns total of all the expenses
  there should be two files ExpenseModule.ts which export interface tuple class and
 app.ts which is used for object creation and array and total function*/

 export interface IExpense{
      id:number;
      amount:number;
      category:string;
      detail: [date:string,desc:string];
 }

 export class BasicExpense implements IExpense{
    id:number;
      amount:number;
      category:string;
      detail: [date:string,desc:string];

      constructor(id:number,amount:number,category:string,detail: [date:string,desc:string]) {
        this.id=id;
        this.amount=amount;
        this.category=category;
        this.detail=detail
      }

      getSummary() : string{
        const r="\nID:"+this.id+"\nAMOUNT:"+this.amount+"\nCATEGORY:"+this.category+"\nDETAILS:\nDATE:"+this.detail[0]+"\nDESC:"+this.detail[1];
        return r;
      }
 }

 export class BusinessExpense extends BasicExpense{

        gst:number;
      constructor(id:number,amount:number,category:string,detail: [date:string,desc:string],gst:number) {
        super(id, amount,category,detail);
        this.gst=gst;

 }
 getSummary(): string {
     const r="\nID:"+this.id+"\nAMOUNT:"+this.amount+"\nCATEGORY:"+this.category+"\nDETAILS:\nDATE:"+this.detail[0]+"\nDESC:"+this.detail[1]+"\nGST:"+this.gst;
        return r;
 }
}