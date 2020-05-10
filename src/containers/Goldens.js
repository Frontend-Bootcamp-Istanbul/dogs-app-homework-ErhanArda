import React from 'react'
import dogs from '../dogsdata';

const Goldens = () => {
    const goldens = dogs.filter((dog) => dog.breed === "Golden Retriever")
    return (
        <div>
            <ul>
                {
                    goldens.map((dog) => {
                        return <li>{dog.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Goldens
