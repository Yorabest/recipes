import recipes from '../recipies.json';
import { RecipesList } from './RecipesList/RecipesList';
import { GlobalStyle } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';

const theme = {
  accent: '#fa7070',
  default: '#fff7d9',
  accentText: '#fff',
  defaultText: '#000',
  mainBorderR: '30px'
}

export function App() {
    return (
      <>
      <ThemeProvider theme={theme}>
        <RecipesList recipes={recipes}/>
          <GlobalStyle /> 
      </ThemeProvider>
      </>
)
}
