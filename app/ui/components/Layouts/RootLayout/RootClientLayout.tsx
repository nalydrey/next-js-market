'use client'

import { Drawer } from "@mui/material"
import { useToggler } from "@/app/lib/hooks/useToggler"
import { ReactNode, useEffect } from "react"
import { NavBar } from "../NavBar/NavBar"
import { CategoryModel } from "@/app/lib/models/entities/category.model"
import { Header } from "./Header/Header"

interface RootClientLayoutProps {
    children: ReactNode
    categories: CategoryModel[]
}

export const RootClientLayout = ({
    children,
    categories
}: RootClientLayoutProps) => {

    const {openStatus, handleOpen, handleClose} = useToggler()

    
  

    return (
        <>
            <Header
                categories={categories}
                openBurder={openStatus}
                onClickBurger={handleOpen}
            />
                {children}
            <Drawer
                anchor={'left'}
                open={openStatus}
                onClose={handleClose}
            >
                <NavBar
                    onClose={handleClose}
                />
            </Drawer>
        </>
    )
}