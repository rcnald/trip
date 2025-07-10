import { Box } from "@mui/material"
import { Header } from "../components/ui/header"
import { Outlet } from "react-router-dom"
import { Footer } from "../components/ui/footer"
import { Contact } from "../components/ui/contact"

export const AppLayout = () => {
  return (
    <Box>
      <Header/>
      <Outlet/>
      <Contact />
      <Footer/>
    </Box>
  )
}