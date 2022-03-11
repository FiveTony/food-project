import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { filterByCategory } from '../api'

import { Preloader } from '../components/Preloader'
import { MealList } from '../components/MealList'


function Category() {
   const { name } = useParams()
   const [meals, setMeals] = useState([])
   const navigate = useNavigate()


   useEffect(() => {
      filterByCategory(name).then((data) => { setMeals(data.meals) })

   }, [name])


   return <>
      {/* <span className='btn' onClick={() => { navigate("/") }} >Go back</span> */}
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
   </>
}
export { Category }