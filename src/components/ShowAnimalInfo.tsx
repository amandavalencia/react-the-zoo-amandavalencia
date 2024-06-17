import { IZooResponse } from "../models/IZooResponse"

interface animalInfoProps {
    animalInfo: IZooResponse;
    feedAnimal: (animal:IZooResponse) => void
}
export const ShowAnimalInfo = ({animalInfo, feedAnimal}: animalInfoProps) =>{

const handleFeed = () => {
    feedAnimal(animalInfo)
}

    return <>
        <h3>{animalInfo.name}</h3>
        <img src={animalInfo.imageUrl} alt={animalInfo.name} />
        <p>{animalInfo.longDescription}</p>
        <button onClick={handleFeed} disabled={animalInfo.isFed === true} >Feed me</button>
    </>
}