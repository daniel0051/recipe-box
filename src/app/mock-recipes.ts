import { RecipeModel } from './models';

export const MOCK_RECIPES: RecipeModel[] = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    description: 'Um clássico italiano cremoso e saboroso.',
    servings: 2,
    imgUrl: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600',
    isFavorite: true,
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
    imgUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600',
    isFavorite: false,
    ingredients: [
      { name: 'Tomates', quantity: 2, unit: 'unid' },
      { name: 'Mussarela de Búfala', quantity: 150, unit: 'g' },
      { name: 'Manjericão fresco', quantity: 1, unit: 'ramo' },
      { name: 'Azeite de oliva', quantity: 15, unit: 'ml' },
    ],
  },
];
