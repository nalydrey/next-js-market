'use client'

import "./ui/globals.css";
import { Header } from "./ui/components/Header/Header";
import { Drawer } from "@mui/material";
import { useToggler } from "./lib/hooks/useToggler";
import { NavBar } from "./ui/components/NavBar/NavBar";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const {openStatus, handleOpen, handleClose} = useToggler()

  return (
    <html lang="en">
      <body>
        <Header
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
      </body>
    </html>
  );
}
