import { ShowAnimals } from "../components/ShowAnimals";
import { useFetch } from "../hook/useFetch";

export const Animals = () => {
  const { animals: {animals} } = useFetch();


  return (
    <>
      <ShowAnimals animals={animals}></ShowAnimals>
    </>
  );
};
