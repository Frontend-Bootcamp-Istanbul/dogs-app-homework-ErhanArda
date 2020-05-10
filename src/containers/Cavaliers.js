import React from 'react'
import dogs from '../dogsdata';

const Cavaliers = () => {
    const cavaliers = dogs.filter((dog) => dog.breed === "Cavalier King Charles Spaniel")
    return (
        <div>
            <ul>
                {
                    cavaliers.map((dog) => {
                        return <li>{dog.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Cavaliers
