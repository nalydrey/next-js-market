'use client'

import { mainData } from '@/app/lib/mainData'
import { MenuButton } from '../../Buttons/MenuButton/MenuButton'
import { Logo } from '../../SVGComponents/Logo'
import styles from './NavBar.module.scss'
import { usePathname, useRouter } from 'next/navigation'
import clsx from 'clsx'
import { CallbackButton } from '../../Buttons/CallbackButton/CallbackButton'
import { ButtonLink } from '../../Buttons/ButtonLink/ButtonLink'

interface NavBarProps {
    onClose: () => void
}

export const NavBar = ({
    onClose
}: NavBarProps) => {
    const {menuButtons, links, workingTime, contacts, callback} = mainData

    const path = usePathname()

    const {replace} = useRouter()

    const handleClick = (path: string) => {
        replace(path)
        onClose()
    }

    return (
        <div className={styles.navBarContainer}>
            <div className={styles.container}>
                <Logo/>
            </div>
            <div className={styles.buttonContainer}>
                {
                    menuButtons.map(({icon, title, link}) => (
                        <MenuButton
                            key={link}
                            isActive = {path === link}
                            title={title}
                            icon={icon}
                            onClick={() => handleClick(link)}
                        />
                    ))
                }
            </div>
            <nav className={styles.navigation}>
                {links.map(({title, link}) => (
                    <ButtonLink
                        title={title}
                        isActive={path === link}
                        onClick={() => handleClick(link)}
                    />
                ))}
            </nav>
            <div className={styles.info}>
                <span>{workingTime.title}: {workingTime.time.from}-{workingTime.time.to}</span>
                <span>{contacts.tel}</span>
                <CallbackButton
                    title={callback.title}
                />
            </div>
        </div>
    )
}