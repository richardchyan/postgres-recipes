import React, { useState } from 'react'
import RecipeForm from './RecipeForm'
import RecipeList from './RecipeList'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'

const Home = () => {

  const [recipes, setRecipes] = useState([])
  const {isAuthenticated, user } = useAuth0()

  if (!isAuthenticated) {
    return (
      <div className="text-4xl h-screen mt-10 dark:bg-gray-800 dark:text-white">
        You are not logged in. Please log in to create recipes
      </div>
    );
  }

  const fetchRecipes = async() => {

    try {
       const { data } = await axios.get('/recipes')
       const authorizedData = data.filter(recipe => user.sub === recipe.created_by)
       setRecipes(authorizedData)
    } catch (error) {
       console.log(error.message)
    }
 }

  if (recipes) {
    return (
      <div className="py-4 px-2">
        <RecipeForm fetchRecipes={fetchRecipes} user={user} />
        <RecipeList recipes={recipes} fetchRecipes={fetchRecipes} />
      </div>
    );
  }
}

export default Home