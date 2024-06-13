import { LightningElement ,track} from 'lwc';

export default class HelloWorld extends LightningElement {
     fullName = "Vinay Kherde";
    title = "Admin";
    profile = {
        name : "vinay",
        age: 22,
        city:"Nagpur"
    }

    member = ["a" , "b" , "c"]

    candi = [ "Raj" , "Vinay", "Krishna" , "Nikhil"]
    num1 = 10
    num2 = 30
    num3 = 0;

     getTheName(event){
        this.title = event.target.value;
        console.log(this.title);
    }
    trackHandler(event){
        this.profile = {...this.profile , "city":event.target.value}
    }

    get getNameOfCandidate(){
      
        return this.candi[this.num3];
    }
     numHandler1(event){
    
        if(event.target.name === "tec"){
           this.num1 = event.target.value;
        }
    
        if(event.target.name === "tech" ){
            this.num2 = event.target.value;
        }
        if(event.target.name === "tec1"){
            this.num3 = event.target.value;
        }
      
    }
    
    get multiplicationHandler(){
    
        return this.num1 * this.num2

        
    }
    
}