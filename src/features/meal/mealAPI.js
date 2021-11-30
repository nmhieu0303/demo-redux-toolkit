import { mealServies } from "../../services/MealServices"

export const randomMeal = async () =>{
    return await mealServies.random()
}