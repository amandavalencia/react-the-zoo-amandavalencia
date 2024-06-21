import { ShowHome } from "../components/ShowHome";
import { useFetch } from "../hook/useFetch";

export const Home = () => {
const {animals: {animals}} = useFetch()

  return (
    <>
      <ShowHome animals={animals}/>
    </>
  );
};
