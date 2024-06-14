import { ShowAnimal } from "../components/ShowAnimal";
import { useFetch } from "../hook/useFetch";


export const Animals = () => {
  const { animals } = useFetch();

  return (
    <>
      <h1>Animals</h1>
      <div>
      {animals.map((animal)=>(
         <ShowAnimal animal={animal} key={animal.id}/>
      )
      )}
        </div>
    </>
  );
};
