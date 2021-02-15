import React from 'react';
import { Button } from "reactstrap";
import { connect } from "react-redux"
import { addFavorite, deleteFavorite, showStatus } from "../redux/actions"

const FavoriteActions = (props) => {
    const toggle = (dogId) => {
        props.showStatus()
        const foundDog = props.favorites.find((favorite) => favorite.dogId === dogId);
        if (foundDog) {
            props.deleteFavorite(foundDog.id,dogId)

        } else {

            props.addFavorite(dogId)

        }
    }
    const foundDog = props.favorites.find((favorite) => favorite.dogId === props.id);
    return (
        <div>


            {foundDog ?
                <Button color="danger" disabled={props.id === props.loadingId} onClick={() => toggle(props.id)}>Favorilerden Cikar</Button>
                : <Button color="primary" disabled={props.id === props.loadingId} onClick={() =>  toggle(props.id)}>Favoriye Ekle</Button>
            }
        </div>
    );
};



const mapStateToProps = state => {
    return {
        favorites: state.dogReducer.favorites,
        loadingId: state.statusReducer.loadingId
    }
}
const mapDispatchToProps = {
    addFavorite: addFavorite,
    deleteFavorite: deleteFavorite,
    showStatus: showStatus
}
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteActions);
