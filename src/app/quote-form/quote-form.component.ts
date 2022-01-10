import { Component, OnInit, Output, EventEmitter } from'@angular/core'
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote(0,"","",new Date());
@Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
  this.addQuote.emit(this.newQuote);
  }
  
  constructor() { }

  ngOnInit() {
  }
  list:any[]=[];
  addItem(item:string)
  {
    console.warn(item);
    this.list.push({id:this.list.length,name:item})
   
  }
  removeTask(id:number)
  {
    this.list=this.list.filter(item=>item.id!==id);
  }
}


