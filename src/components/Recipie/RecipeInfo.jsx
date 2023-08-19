import {InfoItem,  Info} from './RecipeInfo.styled'

export const RecipeInfo = ({info, icon: Icon}) => {
    return <InfoItem>
        <Icon size={30} />
        <Info>{info}</ Info>
    </InfoItem>
}