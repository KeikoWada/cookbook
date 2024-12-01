import { useState, useEffect } from 'react'

interface Recipe {
  id: string
  img: string
  title: string
  category: string
}

export interface RecipetList {
    items: Recipe[]
}

const sampleData: Recipe[] = [
  {
    id: '1',
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    category: 'Breakfast'
  },
  {
    id: '2',
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    category: 'Lunch'
  },
  {
    id: '3',
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    category: 'not food'
  },
  {
    id: '4',
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    category: 'drinks'
  },
  {
    id: '5',
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    category: 'not food'
  },
  {
    id: '6',
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    category: 'ingredient'
  },
  {
    id: '7',
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    category: 'not food'
  },
  {
    id: '8',
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    category: 'not food'
  },
  {
    id: '9',
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    category: 'vegetable'
  },
  {
    id: '10',
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    category: 'vegetable'
  },
  {
    id: '11',
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    category: 'dinner'
  },
  {
    id: '12',
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    category: 'not food'
  },
  {
    id: '13',
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    category: 'not food'
  }
]

export function useRecipeList() {
    const getAllItems = () => {
        return sampleData
    }
    const onClick = (): void => {
        console.log('clicked');
    }

    return {
        onClick,
        items: getAllItems()
    }
}










// // Hook for managing the list of recipes
// export function useRecipeList(searchTerm: string): Recipe[] {
//   const [recipes, setRecipes] = useState<Recipe[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   // Function to fetch recipes from an API or local data
//   const fetchRecipes = async () => {
//     try {
//       // Simulate fetching data from an API
//       setLoading(true);
//       setError(null);
      
//       // Uncomment the next line if you have an actual API to fetch data from
//       // const response = await fetch('https://api.example.com/recipes');
//       // const data = await response.json();

//       // Fallback to sample data
//       const data = sampleData;

//       // Update state with fetched data
//       setRecipes(data);
//     } catch (err) {
//       setError('Failed to load recipes.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Filter recipes based on the search term
//   const filteredRecipes = recipes.filter((recipe) =>
//     recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Effect hook to fetch data on mount
//   useEffect(() => {
//     fetchRecipes();
//   }, []); // Empty dependency array ensures this runs once on mount

//   return {
//     recipes: filteredRecipes,
//     loading,
//     error,
//   };
// }

// // Helper function to handle any additional logic like sorting or pagination
// export function sortRecipes(recipes: Recipe[], sortBy: 'title' | 'author'): Recipe[] {
//   return recipes.sort((a, b) => {
//     if (a[sortBy] < b[sortBy]) return -1;
//     if (a[sortBy] > b[sortBy]) return 1;
//     return 0;
//   });
// }

// // Example function to simulate adding a new recipe
// export function addRecipe(newRecipe: Recipe) {
//   // Normally you would make an API call here to save the recipe to the server
//   console.log('New recipe added:', newRecipe);
// }

// // Example function to simulate deleting a recipe
// export function deleteRecipe(recipeId: string) {
//   // Normally you would make an API call to delete the recipe
//   console.log('Recipe deleted:', recipeId);
// }