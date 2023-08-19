import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  background-color: #fff7d9;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul {
  list-style: none;
}

button{
  border: none;
}

p,
h1,
h2,
h3,
h4,
h5,{
  padding: 0;
  margin: 0;
}

a {
    text-decoration: none;
}
`