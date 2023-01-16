import { GET_RECIPES_FAIL, GET_RECIPES_SUCCESS, GET_RECIPE_FAIL, GET_RECIPE_SUCCESS, LOAD_RECIPE, LOAD_RECIPES } from "../constants/recipesConst"
import axios from "axios";

export const getRecipes = (input, cuisine) => async (dispatch) => {

    dispatch({ type: LOAD_RECIPES, payload: "" })
    try {
        if (!cuisine) {
            const response = await axios.get(`https://api.edamam.com/api/recipes/v2?q=${input}&type=public&app_id=4fa2acd8&app_key=f77a53a8f4c08f5ae1a4331af65089b6`)
            dispatch({ type: GET_RECIPES_SUCCESS, payload: response.data.hits })

        }
        else {
            const response = await axios.get(`https://api.edamam.com/api/recipes/v2?q=${input}&cuisineType=${cuisine}&type=public&app_id=4fa2acd8&app_key=f77a53a8f4c08f5ae1a4331af65089b6`)
            dispatch({ type: GET_RECIPES_SUCCESS, payload: response.data.hits })

        }

    } catch (error) {
        console.log(error);
        dispatch({ type: GET_RECIPES_FAIL, payload: error.message })

    }
}

export const getOneRecipe = (id) => async (dispatch) => {

    dispatch({ type: LOAD_RECIPE, payload: "" })
    try {

        const response = await axios.get(`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=4fa2acd8&app_key=f77a53a8f4c08f5ae1a4331af65089b6`)
        dispatch({ type: GET_RECIPE_SUCCESS, payload: response.data })

    } catch (error) {
        console.log(error);
        dispatch({ type: GET_RECIPE_FAIL, payload: error.message })

    }
}