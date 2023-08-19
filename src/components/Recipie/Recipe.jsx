import { RecipeInfo } from "./RecipeInfo"
import { HiOutlineChartBar, HiOutlineChartPie } from 'react-icons/hi';
import { BsAlarm } from 'react-icons/bs';
import { DishPhoto, InformList, Difficulty, DifContainer, DifList } from "./Recipe.styled";

export const Recipe = ({image, name, time, servings, calories, difficulty}) => {
    return <>
        <DishPhoto src={image} alt={name} width={400} />
        <h3>{name}</h3>
        <InformList>
         <RecipeInfo info={`${time} min`} icon={ BsAlarm} />
        <RecipeInfo info={`${servings} servings`} icon={HiOutlineChartPie }/>
        <RecipeInfo info={`${calories} calories`} icon={ HiOutlineChartBar }/>
        </InformList>
        <DifContainer>
            <h3>Difficulty</h3>
        <DifList>
            <Difficulty difficulty={difficulty} difficultyOfBtn={0}>Easy</Difficulty>
            <Difficulty difficulty={difficulty} difficultyOfBtn={1} >Medium</Difficulty>
            <Difficulty difficulty={difficulty} difficultyOfBtn ={2} >Hard</Difficulty>
            </DifList>
            </DifContainer>
        </>
}