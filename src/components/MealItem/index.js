import React from 'react'
import styles from './style.module.scss'

export default function MealItem({meal}) {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal} />
            <div className="card-body">
                <h5 className="card-title">{meal.strMeal}</h5>
                <p className="card-text">{meal.strInstructions}</p>
            </div>
        </div>

    )
}
