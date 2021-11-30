import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MealItem from '../../components/MealItem'
import { updateCurrentMeal } from '../../features/meal/mealSlice'
import { mealServies } from '../../services/MealServices'
import styles from './styles.module.scss'
export default function Home() {

    const dispatch = useDispatch()
    const currentMeal = useSelector(state => state.meal.currentMeal)
    useEffect(() => {
        dispatch(updateCurrentMeal())
    },[])

    console.log(`currentMeal`, currentMeal)
    return (
        <div className='container'>
            <h1 className={styles.home}>This is home page</h1>
            <button onClick={()=>dispatch(updateCurrentMeal())} className="btn btn-primary my-5">Random mealk</button>
            <div className="row justify-content-center">
                <MealItem meal={currentMeal}/>
            </div>
        </div>
    )
}
