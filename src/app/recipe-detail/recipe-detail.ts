import { Component, computed, input, signal } from '@angular/core';
import { RecipeModel } from '../models';

@Component({
  imports: [],
  selector: 'app-recipe-detail',
  styleUrl: './recipe-detail.css',
  templateUrl: './recipe-detail.html',
})
export class RecipeDetail {
  readonly recipe = input.required<RecipeModel>();
  protected readonly servings = signal<number>(1);
  protected readonly adjustedIngredients = computed(() => {
    const recipe = this.recipe();
    const currentServings = this.servings();
    const baseServings = recipe.servings;
    const ratio = currentServings / baseServings;

    return recipe.ingredients.map((ing) => ({
      ...ing,
      quantity: ing.quantity * ratio,
    }));
  });

  protected increaseServings(): void {
    this.servings.update((s) => s + 1);
  }

  protected decreaseServings(): void {
    this.servings.update((s) => (s > 1 ? s - 1 : 1));
  }
}
