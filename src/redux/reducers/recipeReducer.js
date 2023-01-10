import { GET_RECIPES_FAIL, GET_RECIPES_SUCCESS, LOAD_RECIPES } from "../constants/recipesConst"


const initialState = {
    recipes: [],
    errors:null
}
export const recipeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_RECIPES:
            return { ...state }
        case GET_RECIPES_SUCCESS:
            return { ...state, recipes: payload }
            case GET_RECIPES_FAIL:
                return {...state,errors:payload}
        default:
            return state
    }
}