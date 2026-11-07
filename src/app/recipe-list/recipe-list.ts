import { Component, computed, signal } from '@angular/core';
import { RecipeModel } from '../models';
import { MOCK_RECIPES } from '../mock-recipes';

@Component({
  imports: [],
  selector: 'app-recipe-list',
  styleUrl: './recipe-list.css',
  templateUrl: './recipe-list.html',
})
export class RecipeList {
  protected readonly title = signal('Recipe Box');
  protected readonly recipes = MOCK_RECIPES;
  protected readonly selectedRecipe = signal<RecipeModel>(MOCK_RECIPES[0]);
  protected readonly servings = signal<number>(MOCK_RECIPES[0].servings);
  protected readonly adjustedIngredients = computed(() => {
    const recipe = this.selectedRecipe();
    const currentServings = this.servings();
    const baseServings = recipe.servings;
    const ratio = currentServings / baseServings;

    return recipe.ingredients.map((ing) => ({
      ...ing,
      quantity: ing.quantity * ratio,
    }));
  });

  protected selectRecipe(recipe: RecipeModel): void {
    this.selectedRecipe.set(recipe);
    this.servings.set(recipe.servings);
  }

  protected increaseServings(): void {
    this.servings.update((s) => s + 1);
  }

  protected decreaseServings(): void {
    this.servings.update((s) => (s > 1 ? s - 1 : 1));
  }
}
