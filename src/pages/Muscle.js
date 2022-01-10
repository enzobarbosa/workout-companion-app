 import React from 'react'
 import { useParams } from 'react-router-dom'
 import { useEffect, useState } from 'react/cjs/react.development'
 import ExercicesList from '../composants/ExercicesList'
 import { getExercicesByMuscle } from '../services/api'
 
 function Muscle () {
   const [exercices, setExercices] = useState([])
   const { id } = useParams()
 
   const getData = async () => {
     // Appel de la fonction de api.js
     // setExercices(data de l'api)
     const exercices = await getExercicesByMuscle(id)
     setExercices(exercices)
   }
 
   useEffect(() => {
     getData()
   }, [])
 
   return (
     <div>
       <h1>MUSCLE: {id}</h1>
       <ExercicesList exercices={exercices} />
     </div>
   )
 }
 
 export default Muscle
 