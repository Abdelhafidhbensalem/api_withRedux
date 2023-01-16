import { GET_RECIPES_FAIL, GET_RECIPES_SUCCESS, GET_RECIPE_FAIL, GET_RECIPE_SUCCESS, LOAD_RECIPES } from "../constants/recipesConst"


const initialState = {
    recipes: [],
    errors: null,
    loading: false,
    oneRecipe: {}
}
export const recipeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_RECIPES:
            return { ...state, loading: true }
        case GET_RECIPES_SUCCESS:
            return { ...state, recipes: payload, loading: false }
        case GET_RECIPES_FAIL:
            return { ...state, errors: payload, loading: false }
        case GET_RECIPE_SUCCESS:
            return { ...state, oneRecipe: payload }
        case GET_RECIPE_FAIL:
            return { ...state, errors: payload, loading: false }
        default:
            return state
    }
}