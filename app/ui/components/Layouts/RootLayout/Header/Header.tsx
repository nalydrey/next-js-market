'use client'

import { mainData } from "@/app/lib/mainData"
import Link from "next/link"
import { ROUTES } from "@/app/lib/constants"
import { usePathname, useRouter } from "next/navigation"
import  {CategoryList}  from "./CategoryList/CategoryList"
import { CategoryModel } from "@/app/lib/models/entities/category.model"
import { useToggler } from "@/app/lib/hooks/useToggler"
import {useState } from "react"
import { PageContainer } from "../../../PageContainer/PageContainer"
import { Logo } from "../../../SVGComponents/Logo"
import { CallbackButton } from "../../../Buttons/CallbackButton/CallbackButton"
import { BurgerMenu } from "../../../Buttons/BurgerMenu/BurgerMenu"
import { Button } from "../../../Buttons/Button/Button"
import { BurgerIcon } from "../../../SVGComponents/BurgerIcon"
import { HeaderLink } from "../../../Buttons/HeaderLink/HeaderLink"
import { SearchField } from "../../../SearchField/SearchField"
import { SearchList } from "../../../SearchList/SearchList"
import styles from './Header.module.scss'
import { IconButton } from "../../../Buttons/IconButton/IconButton"


interface HeaderProps {
    openBurder: boolean
    categories: CategoryModel[]
    onClickBurger: () => void
}

export const Header = ({
    categories,
    openBurder,
    onClickBurger 
}: HeaderProps) => {
    const {callback, totalPrice, buttons, links, menuButtons} = mainData
    const {time, title} = mainData.workingTime
    const {tel} = mainData.contacts

    const {openStatus, handleToggle, handleClose} = useToggler()

    const path = usePathname()

    const {replace} = useRouter()

    const [childrenCategories, setCategories] = useState<CategoryModel[]>([]);

    const closeMenu = () => {
        handleClose()
        setCategories([])
    }

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
                                <IconButton
                                    buttonType="header"
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
                        onClick={handleToggle}
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
            <PageContainer className={styles.fakeContainer}>
                <CategoryList
                    isOpen = {openStatus}
                    categories={categories}
                    childrenList={childrenCategories}
                    setCategory={(category) => setCategories(category.children)}
                    onClose={closeMenu}
                />
            </PageContainer>
        </>
    )
}