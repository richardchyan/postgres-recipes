import React, { useState, useContext } from 'react'
import axios from 'axios'
import Modal from './Modal'
import RecipeForm from './RecipeForm'
import { ThemeContext } from './context/ThemeContext';

const SingleRecipe = ({ recipe, fetchRecipes }) => {

  const [showModal, setShowModal] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const { color, mode } = useContext(ThemeContext)

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    fetchRecipes()
    setIsEdit(false)
  }

  const handleEdit = async(id) => {
    setIsEdit(true)
    openModal()
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/recipes/${id}`)
      fetchRecipes()
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="text-xl w-full m-auto border-2 rounded py-2 border-gray-300 shadow-md bg-blue-100 dark:text-white dark:bg-gray-800 duration-300" >
      {/* <h1 className="uppercase tracking-wide">Recipe # - {recipe.id}</h1> */}
      <p className="text-3xl uppercase tracking-wider font-medium underline decoration-double mb-3">{recipe.recipe_name}</p>
      <div className="text-left px-10">
         <p><span className="uppercase tracking-wider font-medium">Ingredients </span> : {recipe.ingredients}</p>
         <p><span className="uppercase tracking-wider font-medium">Cooking Method </span> : {recipe.cook_method}</p>
         <p><span className="uppercase tracking-wider font-medium">Cook Time </span> : {recipe.cook_time} mins</p>
      </div>
      <div className="space-x-4 mt-4">
        <button className="text-xl py-2 px-4 rounded-lg bg-orange-400" onClick={() => handleEdit(recipe.id)}>Edit</button>
        <button className="text-xl py-2 px-4 rounded-lg bg-red-800 text-white" onClick={() => handleDelete(recipe.id)}>Delete</button>
      </div>
      {showModal && 
      <Modal closeModal={closeModal}>
        <RecipeForm isEdit={isEdit} closeModal={closeModal} recipe={recipe}/>
      </Modal>}
    </div>
  )
}

export default SingleRecipe