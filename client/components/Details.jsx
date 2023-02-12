import React, { useState, useEffect } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate, useParams } from 'react-router-dom'
import { getDetails } from '../apiClient'

function Details() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [meal, setMeal] = useState({})
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    getDetails(id)
      .then((fetchedMeal) => {
        setMeal(() => fetchedMeal.meals[0])
        setIngredients([
          [
            fetchedMeal.meals[0].strIngredient1,
            fetchedMeal.meals[0].strMeasure1,
          ],
          [
            fetchedMeal.meals[0].strIngredient2,
            fetchedMeal.meals[0].strMeasure2,
          ],
          [
            fetchedMeal.meals[0].strIngredient3,
            fetchedMeal.meals[0].strMeasure3,
          ],
          [
            fetchedMeal.meals[0].strIngredient4,
            fetchedMeal.meals[0].strMeasure4,
          ],
          [
            fetchedMeal.meals[0].strIngredient5,
            fetchedMeal.meals[0].strMeasure5,
          ],
          [
            fetchedMeal.meals[0].strIngredient6,
            fetchedMeal.meals[0].strMeasure6,
          ],
          [
            fetchedMeal.meals[0].strIngredient7,
            fetchedMeal.meals[0].strMeasure7,
          ],
          [
            fetchedMeal.meals[0].strIngredient8,
            fetchedMeal.meals[0].strMeasure8,
          ],
          [
            fetchedMeal.meals[0].strIngredient9,
            fetchedMeal.meals[0].strMeasure9,
          ],
          [
            fetchedMeal.meals[0].strIngredient10,
            fetchedMeal.meals[0].strMeasure10,
          ],
          [
            fetchedMeal.meals[0].strIngredient11,
            fetchedMeal.meals[0].strMeasure11,
          ],
          [
            fetchedMeal.meals[0].strIngredient12,
            fetchedMeal.meals[0].strMeasure12,
          ],
          [
            fetchedMeal.meals[0].strIngredient13,
            fetchedMeal.meals[0].strMeasure13,
          ],
          [
            fetchedMeal.meals[0].strIngredient14,
            fetchedMeal.meals[0].strMeasure14,
          ],
          [
            fetchedMeal.meals[0].strIngredient15,
            fetchedMeal.meals[0].strMeasure15,
          ],
          [
            fetchedMeal.meals[0].strIngredient16,
            fetchedMeal.meals[0].strMeasure16,
          ],
          [
            fetchedMeal.meals[0].strIngredient17,
            fetchedMeal.meals[0].strMeasure17,
          ],
          [
            fetchedMeal.meals[0].strIngredient18,
            fetchedMeal.meals[0].strMeasure18,
          ],
          [
            fetchedMeal.meals[0].strIngredient19,
            fetchedMeal.meals[0].strMeasure19,
          ],
          [
            fetchedMeal.meals[0].strIngredient20,
            fetchedMeal.meals[0].strMeasure20,
          ],
        ])
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <main className="h-full bg-slate-100 text-black flex flex-col justify-center items-center">
      <div className="flex flex-row justify-between items-center">
        <i
          className="text-2xl bg-white rounded-full p-2 hover:bg-blue-300"
          onClick={() => navigate(-1)}
        >
          <BiArrowBack />
        </i>
        <div className="text-3xl mx-10 my-22">{meal.strMeal}</div>
      </div>
      <img
        src={meal.strMealThumb}
        className=" bg-white border rounded max-w-sm rounded-3xl object-scale-down h-72 w-72 mx-10 my-10"
        alt="..."
      />
      <div className="my-5 text-2xl">
        <div className="ml-12">Instructions</div>
        <p className="px-12 py-10 text-base">{meal.strInstructions}</p>

        <div className="text-2xl ml-12">Ingredients</div>

        <div className=" flex-row">
          {ingredients.map((ingredient) => {
            return ingredient[0] != '' || null ? (
              <div
                key={ingredient[0]}
                className="border hover:bg-blue-200 flex text-base flex-row justify-around"
              >
                <div className="mr-5">{ingredient[1]}</div>
                <div>{ingredient[0]}</div>
              </div>
            ) : (
              <></>
            )
          })}
        </div>
      </div>
    </main>
  )
}
{
  /* https://dribbble.com/shots/15921850-Recipe-App */
}
export default Details
