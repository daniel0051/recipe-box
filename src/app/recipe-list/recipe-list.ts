import { Component, computed, signal } from '@angular/core';
import { RecipeModel } from '../models';
import { MOCK_RECIPES } from '../mock-recipes';
import { RecipeDetail } from '../recipe-detail/recipe-detail';

@Component({
  imports: [RecipeDetail],
  selector: 'app-recipe-list',
  styleUrl: './recipe-list.css',
  templateUrl: './recipe-list.html',
})
export class RecipeList {
  protected readonly recipes = MOCK_RECIPES;
  protected readonly selectedRecipe = signal<RecipeModel>(MOCK_RECIPES[0]);

  protected selectRecipe(recipe: RecipeModel): void {
    this.selectedRecipe.set(recipe);
  }
}
