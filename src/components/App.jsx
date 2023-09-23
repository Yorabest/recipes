import recipes from '../recipies.json';
import { RecipesList } from './RecipesList/RecipesList';
import { GlobalStyle } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { Component } from 'react';
import { Timer } from './Timer/Timer';
import { Sum } from './Sum/Sum';

const theme = {
  accent: '#fa7070',
  default: '#fff7d9',
  accentText: '#fff',
  defaultText: '#000',
  mainBorderR: '30px'
}

export class App extends Component{

  state = {
    isTimer: false,
    
  }

  toggleTimer = () => {
    this.setState((prev) => {
      return {
        isTimer: !prev.isTimer
      }
    })
  }


  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          {/* <RecipesList recipes={recipes}/> */}
          <button onClick={this.toggleTimer}>{this.state.isTimer ? 'Stop' : "Start"}</button>
          {this.state.isTimer && <Timer />}
          <Sum/>
          

          <GlobalStyle />
        </ThemeProvider>
      </>
    )
  }
}
