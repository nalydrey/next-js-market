'use client'

import { mainData } from "@/app/lib/mainData"
import { Logo } from "../SVGComponents/Logo"
import { PageContainer } from "../PageContainer/PageContainer"
import { HeaderButton } from "../HeaderButton/HeaderButton"
import { BurgerMenu } from "../BurgerMenu/BurgerMenu"
import { Button } from "../Button/Button"
import { BurgerIcon } from "../SVGComponents/BurgerIcon"
import { HeaderLink } from "../HeaderLink/HeaderLink"
import Link from "next/link"
import { ROUTES } from "@/app/lib/constants"
import { SearchField } from "../SearchField/SearchField"
import { usePathname, useRouter } from "next/navigation"
import styles from './Header.module.scss'
import { CallbackButton } from "../CallbackButton/CallbackButton"
import { SearchList } from "../SearchList/SearchList"


interface HeaderProps {
    openBurder: boolean
    onClickBurger: () => void
}

export const Header = ({
    openBurder,
    onClickBurger 
}: HeaderProps) => {
    const {callback, totalPrice, buttons, links, menuButtons} = mainData
    const {time, title} = mainData.workingTime
    const {tel} = mainData.contacts


    const path = usePathname()

    const {replace} = useRouter()
    
    return (
        <>
            <header className={styles.topHeader}>
                <PageContainer className={styles.headerContainer}>
                    <Link 
                        className={styles.logoSection}
                        href={ROUTES.HOME}
                    >
                        <Logo />
                    </Link>
                    <div className={styles.timeSection}>
                        {title}: {time.from}-{time.to} 
                    </div>
                    <div className={styles.contactSection}>
                        <span>{tel}</span>
                        <CallbackButton
                            title={callback.title}
                        />
                    </div>
                    <div className={styles.controlSection}>
                        <div className={styles.buttonContainer}>
                            {menuButtons.map(({icon, title, link})=>(
                                <HeaderButton
                                    key={title}
                                    icon={icon}
                                    isActive={path === link}
                                    onClick={() => replace(link)}
                                />
                            ))}
                        </div>
                        <div className={styles.totalPrice}>
                            <span>{totalPrice.title}</span>
                            <span className={styles.price}>2000 грн</span>
                        </div>
                    </div>
                    <BurgerMenu
                      open = {openBurder}
                      onClick = {onClickBurger}
                    />
                </PageContainer>
            </header>
            <header className={styles.bottomHeader}>
                <PageContainer className={styles.bottomHeaderContainer}>
                    <Button
                        className={styles.catalogButton}
                        icon={<BurgerIcon/>}
                        title={buttons.catalog.title}
                    />
                    <nav className={styles.nav}>
                        {
                            links.map(({title, link}) => (
                                <HeaderLink 
                                    key={link}
                                    title={title}
                                    href={link}
                                    isActive = {path === link}
                                />
                            ))
                        }
                    </nav>
                    <div className={styles.searchWrapper}>
                        <SearchField/>
                        <SearchList/>
                    </div>
                </PageContainer>
            </header>
        </>
    )
}