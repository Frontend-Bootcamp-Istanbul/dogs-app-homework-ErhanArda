import React from 'react'
import dogs from '../dogsdata'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import "./styles.css";

const DogDetails = (props) => {
    const selectedDog = props.match.params.writtenDog;
    const showDogs = dogs.find((dog) => dog.id === selectedDog)

    return (
        <div>
            <div>
                <Card className="card">
                    <CardImg width="100%" src={showDogs.image} alt="Card image cap" />
                    <CardBody >
                        <CardTitle>
                            <h3>{showDogs.name}</h3>
                        </CardTitle>
                        <CardSubtitle>{showDogs.age}</CardSubtitle>
                        <CardText>{showDogs.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            {/* <li>
                <h1> selectedDog:  {showDogs.name}</h1>
                <ul>
                    <img src={showDogs.image} />

                    <li>{showDogs.description}</li>
                    <li>
                        {showDogs.age}
                    </li>


                    <li>
                        {showDogs.breed}
                    </li>

                </ul>
            </li> */}

            
        </div>
    )
}

export default DogDetails

