import styled from 'styled-components';

export const DishPhoto = styled.img`
border-radius: ${({theme})=> theme.mainBorderR};
`

export const InformList = styled.ul`
display: flex;
background-color: white;
border-radius: ${({theme})=> theme.mainBorderR};
gap: 8px;
width: 400px;
padding: 15px;
align-items: center;
justify-content: center;
`

export const DifList = styled.ul`
display: flex;
background-color: white;
border-radius: ${({theme})=> theme.mainBorderR};
gap: 8px;
width: 200px;
padding: 15px;
align-items: center;
justify-content: center;`

export const Difficulty = styled.button`
padding: 10px;
border-color: #fff7d9;
background-color: ${({ difficulty, difficultyOfBtn, theme }) => difficulty === difficultyOfBtn ? theme.accent : theme.default};
color: ${({ difficulty, difficultyOfBtn, theme }) => difficulty === difficultyOfBtn ? theme.accentText : theme.defaultText};
border-radius: ${({theme})=> theme.mainBorderR};
`

export const DifContainer = styled.div`
display: flex;
flex-direction: column;
background-color: white;
padding: 15px;
border-radius: ${({theme})=> theme.mainBorderR};
justify-content: center;`