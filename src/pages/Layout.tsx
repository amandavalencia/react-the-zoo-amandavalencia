import { Outlet } from "react-router-dom"
import "../styling/layout.scss"
import { Navigation } from "../components/navigation"

export const Layout = () => {
    return <>
    <Navigation/>
    <main className="mainContainer">
        <Outlet/>
    </main>
    </>
}