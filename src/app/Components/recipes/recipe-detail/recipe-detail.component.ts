import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() recipeDetailsInfo?: {
    recipeDescription: string,
    recipeImg: string, 
    recipeName:string
  };

  // {

  //   recipeDescription:"RECIPE INFO",
  //   recipeImg: "https://www.recipe-eg.com/uploads/1653908229-22.png", 
  //   recipeName:"RECIPE"
  // }
}
