import React, { useState } from 'react'
import RecipeForm from './RecipeForm'
import RecipeList from './RecipeList'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'
import photo1 from './images/photo-1.jpg'
import photo2 from './images/photo-2.jpg'


const Home = () => {

  const [recipes, setRecipes] = useState([])
  const {isAuthenticated, user } = useAuth0()

  if (!isAuthenticated) {
    return (
      <div className="lg:mb-8">
        <div className="text-md lg:text-lg my-1 py-1 bg-sky-900 text-white font-poppins">
          You are not logged in. Please log in to create recipes.
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-screen-lg lg:space-y-0 m-auto items-center px-4">
          <img
            src={photo1}
            alt="Baking ingredients"
            className="object-cover object-bottom md:object-bottom w-full h-[275px] lg:w-[640px] lg:h-[635px] rounded-xl "
          />
          <div className="flex justify-center items-center text-xl w-full m-auto p-4 lg:text-4xl lg:text-left lg:h-[635px] lg:w-[475px] bg-sky-900 text-white font-poppins dark:border-2 dark:border-white rounded-2xl">
            Note down your favourite recipes, foods, and ingredients.<br className="hidden lg:block" /> <br/> Never forget them again.
          </div>
          <img
            src={photo2}
            alt="More Baking ingredients"
            className="object-cover object-center md:object-right-bottom w-full h-[275px] lg:h-[600px] lg:col-span-2 rounded-xl"
          />
        </div>
      </div>
    );
  }

  const fetchRecipes = async() => {

    try {
       const { data } = await axios.get('https://postgres-recipe-maker.herokuapp.com/recipes')
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