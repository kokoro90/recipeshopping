import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  @Output() recipeForDetailEvent = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is simply a test', 'https://therecipecritic.com/wp-content/uploads/2019/10/turkey_recipe.jpg'),
    new Recipe('Test Recipe', 'This is simply a test', 'https://therecipecritic.com/wp-content/uploads/2019/10/turkey_recipe.jpg'),
    new Recipe('Test Recipe 3', 'This is simply another test', 'https://therecipecritic.com/wp-content/uploads/2019/10/turkey_recipe.jpg')
  ];

  onPassRecipeToDetails(recipe: Recipe) {
    this.recipeForDetailEvent.emit(recipe);
  }

  constructor() {}

  ngOnInit(): void {
      
  }

}
