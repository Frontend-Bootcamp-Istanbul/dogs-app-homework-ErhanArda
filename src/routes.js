import HomePage from './containers/HomePage'
import About from './containers/About'
import FilteredDogs from './containers/FilteredDogs';
import DogDetails from './containers/DogDetails'

const routes = [
    {
        path: "/",
        isExact: true,
        component: HomePage,
        title: "Home Page"
    },
    {
        path: "/breed/:writtenBreed",
        isExact: false,
        component: FilteredDogs,
        title: "Filtered Dogs"
    },
    {
        path: "/details/:writtenDogId",
        isExact: false,
        component: DogDetails,
        title: "Dog Details"
    },

    {
        path: "/about",
        exact: false,
        component: About,
        title: "About"
    }
]

export default routes;