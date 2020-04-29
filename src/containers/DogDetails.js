import React from 'react'
import dogs from '../dogsdata'

const DogDetails = (props) => {
    const selectedDog = props.match.params.writtenDog;
    const showDogs = dogs.find((dog) => dog.id === selectedDog)

    return (
        <div>
            <li>
                <h1> selectedDog:  {showDogs.name}</h1>
                <ul>
                    <li>{showDogs.description}
                        <li>
                            {showDogs.age}
                        </li>
                        <li>
                            {showDogs.breed}
                        </li>
                    </li>
                </ul>
            </li>
        </div>
    )
}

export default DogDetails

