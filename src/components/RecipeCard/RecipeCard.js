import {useState} from 'react'
import './recipe.css'
import {Link} from "react-router-dom"

const RecipeCard = ({el}) => {
  return (
    <div><div className="closed" id="container">
    <header id="toggle">
     <Link to={`/details/${el.uri.slice(51)}`}> <div className="header"  style={{backgroundImage: `url(${el.image})`}}></div></Link>
      <div className="title">{el.label}</div>
    </header>
    <article>
      <ul className="ingredients">
        <li> 
          <div className="amount">50ml</div>
          <div className="ingredient">Rum</div>
        </li>
        <li> 
          <div className="amount">2tsp</div>
          <div className="ingredient">Sugar</div>
        </li>
        <li> 
          <div className="amount">4 sprigs</div>
          <div className="ingredient">Mint</div>
        </li>
        <li> 
          <div className="amount">dash</div>
          <div className="ingredient">Soda water (optional)</div>
        </li>
      </ul>
      <div className="preperation"> 
        <div>Add the mint sprigs, caster sugar and a couple of tablespoons of crushed ice. </div>
        <div>Begin 'massaging' the mix together with a spoon. The caster sugar helps to bring out the flavour of the mint. Breaking or crushing the mint makes the taste sour, hence the need to gently fold and stir. </div>
        <div>Add 25ml of rum, more crushed ice and continue 'massaging'. Fill with ice, pour in the second 25ml shot of rum and add a dash of soda, if desired.</div>
      </div>
    </article>
  </div></div>
  )
}

export default RecipeCard