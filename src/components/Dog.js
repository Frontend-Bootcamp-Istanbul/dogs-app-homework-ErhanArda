import React from 'react'
import PropTypes from 'prop-types';
import FavoriteActions from '../components/FavoriteActions'
import { Link } from "react-router-dom"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';



const Dog = ({ id, name, image, age, description, toggle, getStatus, disabledButton, disabledFavoriteFeature, disabledDetails, showAge }) => {
    return (
        <div key={id} style={{ margin: "15px" }}>

            <Card>
                <CardImg top width="100%" src={image} alt={name} className="dog-image" />
                <CardBody>
                    <CardTitle>
                        <span>
                            {name}
                        </span>
                    </CardTitle>
                    {
                        showAge && <CardText showAge={showAge}> {age} </CardText>
                    }
                    <CardText>
                        {description}
                    </CardText>
                    {
                        !disabledDetails && <Button color="primary" className="a" disabledDetails={disabledDetails}>
                            <Link to={`/details/${id}`}>
                                Details
                            </Link>
                        </Button>}
                    {
                        !disabledFavoriteFeature && <FavoriteActions toggle={toggle} id={id} getStatus={getStatus} disabledButton={disabledButton} />
                    }

                </CardBody>
            </Card>
        </div>
    )
}
Dog.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string
};

Dog.defaultProps = {
    id: "404 not found",
    name: "404 not found"
}
export default Dog
