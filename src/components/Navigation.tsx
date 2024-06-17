import "../styling/navigation.scss"
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <nav>
        <p>Fur-get Me Not</p>
        <NavLink to={"/Animals"} className="navlink" >Animals</NavLink>
        <NavLink to={"/"} className="navlink" >Home</NavLink>
      </nav>
    </>
  );
};
