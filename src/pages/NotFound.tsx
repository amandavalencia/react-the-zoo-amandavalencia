import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  const handleClickHome = () => {
    navigate("/");
  };
  const handleClickAnimal = () => {
    navigate("/animals");
  };

  return (
    <>
      <h1>Page Not Found!</h1>
      <p>navigate back to Home page or Animals</p>
      <button onClick={handleClickHome}>Home</button>
      <button onClick={handleClickAnimal}>Animals</button>
    </>
  );
};
