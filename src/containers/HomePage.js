import React from 'react';
import dogs from "../dogsdata";

import Dog from "../components/Dog";
import { Row, Col } from 'reactstrap';
import { connect } from "react-redux"
import { getFavorite, addFavorite, deleteFavorite } from "../redux/actions"



class Homepage extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.state = {
            favorites: [],
            loadingFavorites: false,
            disabledButton: "",
        }
    }
    componentDidMount() {
        this.props.getFavorite()
        console.log(this.props.favorites)
    }


    render() {
        if (this.props.loadingFavorites) {
            return <div>
                <h1>Page is loading.....</h1>
            </div>
        }
        return (
            <div>            
                <ul>
                    <Row>
                        {
                            dogs.map((dog) => {
                                return <Col xs={12} md={6} lg={4}>
                                    <Dog key={dog.id} id={dog.id} {...dog} />
                                </Col>
                            })
                        }
                        {/* <Dog/> */}
                    </Row>
                </ul>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    const { favorites, loadingFavorites } = state.dogReducer
    console.log(favorites)

    return {
        favorites,
        loadingFavorites

    }
}
const mapDispatchToProps = {
    //toggleFavorite: toggleFavorite
    getFavorite,
    addFavorite,
    deleteFavorite

}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);