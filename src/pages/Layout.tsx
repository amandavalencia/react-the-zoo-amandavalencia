import { NavLink, Outlet } from "react-router-dom"

export const Layout = () => {
    return <>
    <nav>

        <NavLink to={"/Animals"}>Animals</NavLink>
        <NavLink to={"/"}>Home</NavLink>

    </nav>
    <main>
        <Outlet/>
    </main>
    </>
}