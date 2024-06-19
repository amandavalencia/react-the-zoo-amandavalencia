import "../styling/navigation.scss"
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <nav>
        <p>Fur-get Me Not</p>
        <NavLink to={"/Animals"} className="navlink" >Mina Djur</NavLink>
        <NavLink to={"/"} className="navlink" >Hem</NavLink>
      </nav>
    </>
  );
};
