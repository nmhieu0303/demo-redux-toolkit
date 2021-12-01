import React from 'react'
import styles from './style.module.scss'

export default function ListMeam({ listMeal }) {
    if (!listMeal) return null
    return (
        <div className="py-3 row">
            {listMeal.map(meal => {
                return <div key={meal.idMeal} className="card" style={{ width: '18rem' }}>
                    <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal} />
                    <div className="card-body">
                        <h5 className="card-title">{meal.strMeal}</h5>
                        <p className="card-text">{meal.strInstructions.substring(0, 100) + '...'}</p>
                    </div>
                </div>
            })}
        </div>
    )
}
