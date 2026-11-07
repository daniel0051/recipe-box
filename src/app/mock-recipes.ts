import { RecipeModel } from './models';

export const MOCK_RECIPES: RecipeModel[] = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    description: 'Um clássico italiano cremoso e saboroso.',
    servings: 2,
    ingredients: [
      { name: 'Espaguete', quantity: 200, unit: 'g' },
      { name: 'Bacon/Guanciale', quantity: 100, unit: 'g' },
      { name: 'Gemas de ovo', quantity: 4, unit: 'unid' },
      { name: 'Queijo Parmesão', quantity: 50, unit: 'g' },
    ],
  },
  {
    id: 2,
    name: 'Salada Caprese',
    description: 'Salada fresca italiana com tomate e manjericão.',
    servings: 1,
    ingredients: [
      { name: 'Tomates', quantity: 2, unit: 'unid' },
      { name: 'Mussarela de Búfala', quantity: 150, unit: 'g' },
      { name: 'Manjericão fresco', quantity: 1, unit: 'ramo' },
      { name: 'Azeite de oliva', quantity: 15, unit: 'ml' },
    ],
  },
];
