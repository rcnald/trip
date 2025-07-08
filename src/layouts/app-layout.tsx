import { Box } from "@mui/material"
import { Header } from "../components/ui/header"
import { Outlet } from "react-router-dom"

export const AppLayout = () => {
  return (
    <Box>
      <Header/>
      <Outlet/>
    </Box>
  )
}