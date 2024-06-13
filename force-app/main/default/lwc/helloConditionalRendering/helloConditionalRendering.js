import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    boolean = false ;
    name;

    handleClick(event){
        this.boolean = true;
    }
    handleInput(event){
    this.name = event.target.value;
    }
    get handleInputValue(){
        
     return this.name === "hello";
    }
    //new comments and true
}