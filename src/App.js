import React, {useEffect, useState} from 'react'; 
import Recipe from './Recipe';
import './App.css';

const App = () =>{

  const APP_ID = "f5516ed2";
  const APP_KEY ="07379ad9f57c7001fcb781f6fb0f71f0";

  const [recipes, setRecipes] =useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] =useState("chicken");

  useEffect(() => {
    getRecipes()
  }, [query]);

  const getRecipes = async () =>{
    const response =await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits)
  }

  const updateSearch = e =>{
    setSearch(e.target.value)
  }

  const getSearch =e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }

  return(
    
    <div className="App">
     <h1 className='h1'>My Recipes</h1>
      <form onSubmit={getSearch} className='search-form'>
        <input 
          className='search-bar' 
          type="text" 
          value={search}
          onChange={updateSearch}
        />
        <button className='search-btn' type="submit">Search</button>
      </form> 
      <div className='recipes'>
      {recipes.map(recipe =>(
        <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  )
}

export default App;
