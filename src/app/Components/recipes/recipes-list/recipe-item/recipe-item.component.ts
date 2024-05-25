import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
@Input()
item?:{recipeName:string , recipeDescription:string,recipeImg:string;};

@Output() recipeEvent =new EventEmitter();

sendData(){
this.recipeEvent.emit(this.item)
}

}
