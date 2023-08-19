import { Recipe } from "../Recipie/Recipe"
import { RecipeItem, Menu } from "./RecipesList"

export const RecipesList = ({recipes}) => {
    return <Menu>
        {recipes.map(({image, name, time, servings, calories, difficulty}) => {
            return <RecipeItem key={image}>
                <Recipe 
                name={name}
                time={time}
                image={image}
                servings={servings}
                calories={calories}
                difficulty={difficulty}
                />
            </RecipeItem>
        })}
    </Menu>
}