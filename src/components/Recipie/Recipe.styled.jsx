import styled from 'styled-components';

export const DishPhoto = styled.img`
border-radius: 30px
`

export const InformList = styled.ul`
display: flex;
background-color: white;
border-radius: 30px;
gap: 8px;
width: 400px;
padding: 15px;
align-items: center;
justify-content: center;
`

export const DifList = styled.ul`
display: flex;
background-color: white;
border-radius: 30px;
gap: 8px;
width: 200px;
padding: 15px;
align-items: center;
justify-content: center;`

export const Difficulty = styled.button`
padding: 10px;
border-color: #fff7d9;
background-color: ${({ difficulty, difficultyOfBtn }) => difficulty === difficultyOfBtn ? "#fa7070" : "#fff7d9"};
color: ${({ difficulty, difficultyOfBtn }) => difficulty === difficultyOfBtn ? "white" : "black"};
border-radius: 30px;
`

export const DifContainer = styled.div`
display: flex;
flex-direction: column;
background-color: white;
padding: 15px;
border-radius: 30px;
justify-content: center;`