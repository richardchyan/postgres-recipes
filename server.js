import express, { json } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import pool from './config.js'

const app = express()
app.use(cors())
app.use(json({ extended: true}))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {

   console.log(`App running on port ${PORT}`)

})

// Routes

const getRecipes = async (req,res) => {

   try {
      const results = await pool.query(
         'SELECT * FROM recipes ORDER BY id DESC'
      )
      res.status(200).json(results.rows)
   } catch (error) {
      console.log(error.message)     
   }
}

const addRecipe = async(req,res) => {

   try {
      const {name, ingredients, cookMethod, cookTime, user} = req.body
      await pool.query(
         'INSERT INTO recipes (recipe_name, ingredients, cook_method, cook_time, created_by) VALUES ($1, $2, $3, $4, $5)', [name, ingredients, cookMethod, cookTime, user]
      )
      res.status(201).json({status: 'success', message: 'recipe added'})
   } catch (error) {
      console.log(error.message)
   }

}

const editRecipe = async(req, res) => {

   try {
      const { id } = req.params
      const {name, ingredients, cookMethod, cookTime } = req.body

      await pool.query(
         `UPDATE recipes SET recipe_name = $1, ingredients = $2, cook_method = $3, cook_time = $4, updated_at = NOW() WHERE id = $5`, [name, ingredients, cookMethod, cookTime, id]
      )
      res.status(200).send(`song with id ${id} udpated`)

   } catch (error) {
      console.log(error.message)
   }

}

const deleteRecipe = async(req, res) => {

   try {
      const { id } = req.params 
      
      await pool.query(
         `DELETE FROM recipes WHERE id = $1`, [id]
      )
      res.status(200).send(`User with id ${id} is deleted`)
   } catch (error) {
      console.log(error.message)
   }
}

app.get('/recipes', getRecipes)
app.post('/recipes', addRecipe)
app.put('/recipes/:id', editRecipe)
app.delete('/recipes/:id', deleteRecipe)

// Catch all error route

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

