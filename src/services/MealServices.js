// Need to use the React-specific entry point to import createApi
import { urlApi } from "../utils/constant/urlApi.js";
import { BaseServices } from "./BaseServices";

export class MealServices extends BaseServices {
    constructor() {
        super()
    }
    random = () =>{
        return this.get(urlApi.RANDOM_MEAL)
    }
    search = (keyword) =>{
        return this.get(urlApi.SEARCH_MEAL+keyword)
    }
}

export const mealServies = new MealServices();