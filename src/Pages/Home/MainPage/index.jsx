import "./styles.css"
import { Outlet } from "react-router-dom"
import { NavBar } from "../../../Components/Navbar"

export const MainPage = () => {
    return (
        <>
        <NavBar />
        <Outlet />
        </>
    )
}