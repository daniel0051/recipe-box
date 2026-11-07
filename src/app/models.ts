export interface Ingredient {
  name: string;
  quantity: number;
  unit: string;
}

export interface RecipeModel {
  id: number;
  name: string;
  description: string;
  servings: number;
  imgUrl: string;
  ingredients: Ingredient[];
}
