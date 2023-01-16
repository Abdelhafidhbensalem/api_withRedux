import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOneRecipe } from '../../redux/actions/recipesActions'
import './recipe.css'

const RecipeDetails = () => {
  const {id}=useParams()
  const oneRecipe=useSelector(state=>state.oneRecipe.recipe)
  const dispatch=useDispatch()
  useEffect(() => {
dispatch(getOneRecipe(id))  
   
  }, [])
  
  return (
    <div>
      
      <div id="container">
      <header id="toggle">
      <div className="header"  style={{backgroundImage: `url(${oneRecipe && oneRecipe.image})`}}></div>
      <div className="title">{oneRecipe && oneRecipe.label}</div>
      </header>
      <article>
      
        <ul className="ingredients">
        {oneRecipe && oneRecipe.ingredients.map(el=>
          <li>
            <div className="amount">{el.quantity} {el.measure}</div>
            <div className="ingredient">{el.food}</div>
          </li>)}
        </ul>
        <div className="preperation">
         Calories: {oneRecipe && Math.ceil(oneRecipe.calories)}
        </div>
      </article>
    </div></div>
  )
}

export default RecipeDetails