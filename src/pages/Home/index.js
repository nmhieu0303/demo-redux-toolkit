import React, { useEffect } from 'react'
import MealItem from '../../components/MealItem'
import { mealServies } from '../../services/MealServices'
import styles from './styles.module.scss'
export default function Home() {

const data ={
    idMeal: "52770",
    strMeal: "Spaghetti Bolognese",
    strDrinkAlternate: null,
    strCategory: "Beef",
    strArea: "Italian",
    strInstructions: "Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins.\r\n\r\nStir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins.\r\n\r\nMeanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.",
    strMealThumb: "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
    strTags: "Pasta,Meat",
    strYoutube: "https://www.youtube.com/watch?v=-gF8d-fitkU",
    strIngredient1: "onions",
    strIngredient2: "olive oil",
    strIngredient3: "garlic",
    strIngredient4: "lean minced beef",
    strIngredient5: "mushrooms",
    strIngredient6: "dried oregano",
    strIngredient7: "tomatoes",
    strIngredient8: "hot beef stock",
    strIngredient9: "tomato puree",
    strIngredient10: "worcestershire sauce",
    strIngredient11: "spaghetti",
    strIngredient12: "parmesan",
    strIngredient13: null,
    strIngredient14: null,
    strIngredient15: null,
    strIngredient16: null,
    strIngredient17: null,
    strIngredient18: null,
    strIngredient19: null,
    strIngredient20: null,
    strMeasure1: "2",
    strMeasure2: "1tbsp",
    strMeasure3: "1 clove",
    strMeasure4: "500g",
    strMeasure5: "90g",
    strMeasure6: "1tsp",
    strMeasure7: "400g can",
    strMeasure8: "300ml",
    strMeasure9: "1tbsp",
    strMeasure10: "1tbsp",
    strMeasure11: "350g",
    strMeasure12: "Topping",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
    strMeasure16: null,
    strMeasure17: null,
    strMeasure18: null,
    strMeasure19: null,
    strMeasure20: null,
    strSource: null,
    strImageSource: null,
    strCreativeCommonsConfirmed: null,
    dateModified: null
}

    useEffect(() => {
        randomMeal()
    }, [])

    const randomMeal = async()=>{
        const meal = await mealServies.random();
        console.log(`meal`, meal)
    }

    return (
        <div className='container'>
            <h1 className={styles.home}>This is home page</h1>
            <div className="row">
                <MealItem meal={data}/>
            </div>
        </div>
    )
}
