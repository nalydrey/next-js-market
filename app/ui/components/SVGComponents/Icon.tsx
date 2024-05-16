import { ArrowtIcon } from "./ArrowIcon"
import { BasketIcon } from "./BasketIcon"
import { ChartIcon } from "./ChartIcon"
import { HeartIcon } from "./HeartIcon"
import { LeftArrowIcon } from "./LeftArrowIcon"
import { RightArrowIcon } from "./RightArrowIcon"
import { UserIcon } from "./UserIcon"

export type IconNames = 'arrow' | 'heart' | 'user' | 'basket' | 'chart' | 'leftArrow' | 'rightArrow'

interface IconCollectionProps {
    iconName: IconNames
}

export const Icon= ({iconName}: IconCollectionProps) => {
    switch (iconName){
        case 'arrow': return <ArrowtIcon/>
        case 'basket': return <BasketIcon/>
        case 'chart': return <ChartIcon/>
        case 'heart': return <HeartIcon/>
        case 'user': return <UserIcon/>
        case 'leftArrow': return <LeftArrowIcon/>
        case 'rightArrow': return <RightArrowIcon/>
        default: return null
    }
}