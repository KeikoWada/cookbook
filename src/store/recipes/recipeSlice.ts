import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface Recipe{
    id?:number,
    dishName: string,
    category: string
}

const initialState = { id: 1, dishName: 'steak', category: 'meal' }

const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
      getRecipes(state) {
        console.log('==== state ====', state)
        state = state
      },
    },
  })

export default recipeSlice.reducer
export const { getRecipes } = recipeSlice.actions