import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeModel } from './models';
import { MOCK_RECIPES } from './mock-recipes';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Recipe Box');
  protected readonly recipes = MOCK_RECIPES;
  protected readonly selectedRecipe = signal<RecipeModel>(MOCK_RECIPES[0]);
  protected readonly servings = signal<number>(MOCK_RECIPES[0].servings);

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
