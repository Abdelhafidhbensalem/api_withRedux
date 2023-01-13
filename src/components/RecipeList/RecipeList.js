import React from 'react'
import{useSelector} from 'react-redux'
import RecipeCard from "../RecipeCard/RecipeCard"
const RecipeList = () => {
    const recipes=useSelector((state)=>state.recipes )
  return (
    <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap",gap:"10px"}}>{recipes.map((el)=><RecipeCard 
    key={el.recipe.uri.slice(51)}
    el={el.recipe}
    />)}</div>
  )
}

export default RecipeList