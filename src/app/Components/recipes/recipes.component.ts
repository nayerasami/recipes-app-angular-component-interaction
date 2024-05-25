import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  itemInfo ?:{
    recipeDescription: string,
    recipeImg: string, 
    recipeName:string
  } 
  getDataFromRecipesList(e:any){
   this.itemInfo =e;
   console.log('recipe details from parent component',e )
  }



}
