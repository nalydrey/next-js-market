import { IconProps } from "./IconProps"


export const BurgerIcon = ({className}: IconProps) => {
    return (
        <svg className={className} width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1H24" stroke="white" strokeWidth="2"/>
            <path d="M0 9H24" stroke="white" strokeWidth="2"/>
            <path d="M0 17H15.5676" stroke="white" strokeWidth="2"/>
        </svg>
    )
}