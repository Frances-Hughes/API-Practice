import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TfiSearch } from 'react-icons/tfi'
import { getMeal, getRandomeMeal } from '../apiClient'

function Search() {
  const [randomMeal, setRandomMeal] = useState({})
  const [searchMeal, setSearchMeal] = useState('')
  const [searchResult, setSearchResult] = useState('')
  useEffect(() => {
    getRandomeMeal()
      .then((fetchedMeal) => {
        setRandomMeal(() => fetchedMeal.meals[0])
      })
      .catch((err) => console.error(err))
  }, [])

  async function handleClick() {
    console.log(searchMeal)
    await getMeal(searchMeal).then((result) => {
      setSearchResult(() => result.meals[0])
    })
  }

  return (
    <main className="h-screen flex flex-col bg-slate-100 text-black justify-center items-center">
      <div className="text-4xl mb-8">Find Best Recipe For Cooking</div>
      <div className="flex flex-row py-5">
        {/* search bar */}

        <div className="relative flex items-left inset-y-0 left-0 items-center pl-3 rounded-2xl border-l">
          <i className="text-2xl absolute h-5 w-10 text-green-700 pl-5">
            <TfiSearch />
          </i>
          <input
            className="mx-3 block w-full px-8 py-2 text-green-700 bg-white border rounded-3xl focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search Meal"
            value={searchMeal}
            onChange={(e) => setSearchMeal(e.target.value)}
          />
        </div>

        <button
          onClick={handleClick}
          className="px-4 text-white bg-green-600 border-l rounded-3xl"
        >
          SEARCH
        </button>
      </div>

      {searchResult != '' ? (
        <>
          <div className="my-2 text-xl">{searchResult.strMeal}</div>
          <Link to={`/details/${searchResult.idMeal}`}>
            <img
              src={searchResult.strMealThumb}
              className="p-1 bg-white border  max-w-sm rounded-3xl"
              alt="..."
            />
          </Link>
        </>
      ) : (
        <>
          <div className="text-2xl mb-3 mt-8">Random meal suggestion</div>
          <div className="my-5 text-xl">{randomMeal.strMeal}</div>
          <Link to={`/details/${randomMeal.idMeal}`}>
            <img
              src={randomMeal.strMealThumb}
              className="p-1 bg-white border  max-w-sm rounded-3xl"
              alt="..."
            />
          </Link>
        </>
      )}
    </main>
  )
}

{
  /* https://dribbble.com/shots/15921850-Recipe-App */
}
export default Search
