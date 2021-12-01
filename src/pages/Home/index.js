import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ListMeam from '../../features/meal/components/ListMeal'
import MealItem from '../../features/meal/components/MealItem'
import { randomMeal, searchMeal } from '../../features/meal/mealSlice'
import { mealServies } from '../../services/MealServices'
import styles from './styles.module.scss'
export default function Home() {

    const dispatch = useDispatch()
    const currentMeal = useSelector(state => state.meal.currentMeal)
    const listMeal = useSelector(state => state.meal.listMeal)
    useEffect(() => {
        dispatch(randomMeal())
    }, [])
    const [state, setstate] = useState('')

    return (
        <div className='container'>
            <h1 className={styles.home}>This is home page</h1>

            

            <button onClick={() => dispatch(randomMeal())} className="btn btn-primary my-5">Random mealk</button>
            <div className="row justify-content-center">
                <MealItem meal={currentMeal} />
            </div>

            <div className="d-flex my-2 my-lg-0">
                <input className="form-control me-sm-2" type="text" placeholder="Search meal"
                    value={state}
                    onChange={(e) => { setstate(e.target.value) }}
                />

                <button className="btn btn-success my-2 my-sm-0" type="submit"
                    onClick={() => dispatch(searchMeal({ keyword: state }))}
                >Search</button>
            </div>

            <div className="my-5">
                <ListMeam listMeal={listMeal}/>
            </div>
        </div>
    )
}
