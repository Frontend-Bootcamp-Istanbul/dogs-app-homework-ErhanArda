import React from 'react'
import dogs from '../dogsdata'

const FilteredDogs = (props) => {
    const selectedBreed = props.match.params.writtenBreed;
    const filteredDogs = dogs.filter((dog) => dog.breedSlug === selectedBreed);
    return (
        <div>
            <h1>Selected Breed: {selectedBreed}</h1>
            <ul>
                <ul>
                    {
                        filteredDogs.map((dog) => {
                            return <li key={dog.id}>{dog.name}</li>
                        })
                    }
                </ul>
            </ul>
        </div>
    );
};


export default FilteredDogs
