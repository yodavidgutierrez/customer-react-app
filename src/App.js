import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';
import NewCustomerContainer from './containers/NewCustomerContainer';

class App extends Component {
  renderHome = () => <h1>Home</h1>;
  renderCustomersContainer = () => <h1>Customer Container</h1>;
  renderCustomersListContainer = () => <h1>Customers List Container</h1>;
  renderCustomersNewContainer = () => <h1>Customer New Container</h1>;
  render() {
    return (
    <Router>
      <div>
        <Route exact path="/" component={HomeContainer}></Route>
        <Route exact path='/customers' component={CustomersContainer}></Route>
        <Switch>
          <Route exact path='/customers/new' component={NewCustomerContainer}></Route>
          <Route exact path='/customers/:dni' render={props => <CustomerContainer dni={props.match.params.dni}/>}></Route>
        </Switch>
      </div>
    </Router>
  )};
}

export default App;
