import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import { Switch, Route } from 'react-router';

import routes from './routes'
import HomePage from './containers/HomePage';
import About from './containers/About';
import FilteredDogs from './containers/FilteredDogs';
import { Container } from 'reactstrap';
import './App.css'
class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Container>
        <Switch>
          {
            routes.map((route) => {
              return <Route key={route.path}
                path={route.path} exact={route.isExact}
                component={route.component}
              />
            })
          }

          {
            /*
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={About} />
            <Route path="/breed/writtenBreed" component={FilteredDogs}/>
            <Route component = {()=><div><h1>404 not </h1></div>}
            */
          }
        </Switch>
        </Container>
      </div>
    )
  }
}


export default App;
