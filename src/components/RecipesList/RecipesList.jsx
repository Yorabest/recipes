import styled from 'styled-components';

export const RecipeItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
calc((100% - 25px * 2) / 3);
gap: 15px
`

export const Menu = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 25px`