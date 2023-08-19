import recipes from '../recipies.json';
import { RecipesList } from './RecipesList/Recipes.styled';
import { GlobalStyle } from './GlobalStyles';

export function App() {
    return (
      <>
        <RecipesList recipes={recipes}/>
        <GlobalStyle /> 
      </>
)
}
