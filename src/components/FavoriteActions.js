import React from 'react';
import {Button} from "reactstrap";

const FavoriteActions = (props) => {

    return (
        <div>
            {
                props.getStatus(props.id) ?
                    <Button color="danger" disabled={props.loading} disabledButton onClick={() => {props.toggle(props.id)}}>Favorilerden Cikar</Button>
                    : <Button color="primary" onClick={() => {props.toggle(props.id)}}>Favoriye Ekle</Button>
            }
        </div>
    );
};

export default FavoriteActions;