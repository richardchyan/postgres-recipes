import React, { Fragment, useEffect } from 'react'
import SingleRecipe from './SingleRecipe'

const RecipeList = ({ recipes, fetchRecipes }) => {

  useEffect(() => {

    fetchRecipes()

  },[])

  return (
    <Fragment>
     <h1 className="text-4xl uppercase tracking-wide my-2 dark:text-white">List of your recipes</h1>
     <div className="grid grid-cols-1 max-w-screen-md m-auto space-y-4">
      {recipes.map(recipe => (
         <SingleRecipe recipe={recipe} key={recipe.id} fetchRecipes={fetchRecipes} />
         ))}
     </div>
    
   </Fragment>
  )
}

export default RecipeList