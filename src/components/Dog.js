import React from 'react'
import FavoriteActions from '../components/FavoriteActions'
import { Link } from "react-router-dom"

const Dog = ({ id, name, toggle, getStatus, disabledButton }) => {
    return (
        <div className="card">
            <p key={id} style={{
                margin: "30px"
            }}>
                <Link to={`/details/${id}`}
                    style={{
                        display: "inline-block",
                        marginRight: "30px"
                    }}>
                    {name}
                </Link>
                <FavoriteActions toggle={toggle} id={id}
                    getStatus={getStatus} disabledButton={disabledButton}
                />
            </p>
        </div>
    )
}

export default Dog
