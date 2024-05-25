import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipeItem = {};
  recipes: Recipe[] = [
    new Recipe('recipe-one', 'the desc of the recipe one', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505'),
    new Recipe('recipe-two', 'the desc of the recipe two', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4uV_wLNOHFXvkxKpRF5yAV1pcbtZuAKHpON8mUBreKA&s'),
    new Recipe('recipe-three', 'the desc of the recipe three', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR33vXQtdZcAA5OBmIRyA5BH8UEEtgXfmubXsO6tt4QtA&s')]

  getData(e: any) {
    this.recipeItem = e;
    console.log("from recipe list item data is", e)
  }

  @Output() myNewEvent =new EventEmitter()
  
  sendDataToRecipesComponent(){
    this.myNewEvent.emit(this.recipeItem)
  }
  ngOnInit(): void {

  }


}
