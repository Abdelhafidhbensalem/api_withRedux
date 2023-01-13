import { GET_RECIPES_FAIL, GET_RECIPES_SUCCESS, LOAD_RECIPES } from "../constants/recipesConst"
import axios from "axios";

export const getRecipes = (input) => async (dispatch) => {

    dispatch({ type: LOAD_RECIPES, payload: "" })
    try {
        const response = await axios.get(`https://api.edamam.com/api/recipes/v2?q=${input}&type=public&app_id=4fa2acd8&app_key=f77a53a8f4c08f5ae1a4331af65089b6`)
        dispatch({ type: GET_RECIPES_SUCCESS, payload: response.data.hits })

    } catch (error) {
        console.log(error);
        dispatch({ type: GET_RECIPES_FAIL, payload: error.message })

    }
}