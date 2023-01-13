import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import { getRecipes } from './redux/actions/recipesActions';
import {useDispatch} from "react-redux"
import RecipeList from "./components/RecipeList/RecipeList"
import RecipeDetails from "./components/RecipeDetails/RecipeDetails"
import {Routes,Route} from "react-router-dom"

function App() {
const dispatch =useDispatch()
const [input, setInput] = useState("")
const [query, setQuery] = useState("pizza")

  useEffect(() => {
  dispatch(getRecipes(query))
  }, [query])
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    setQuery(input)

  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<> <form onSubmit={handleSubmit}>
      <input placeholder="search..." onChange={(e)=>setInput(e.target.value)}/>
      </form>
      <RecipeList/></>} />
      <Route path="/details/:id" element={<RecipeDetails/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
