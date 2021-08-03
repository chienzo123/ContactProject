import logo from './logo.svg';
import './App.css';
import React , { Component } from 'react';
// import Contact from './Component/Contact';
import Test from "./Test/Test";
import Album from "./Component/pages/Album"
import Header from './Component/layout/Header';
import Contacts from './Component/contacts/Contacts';
import AddContact from './Component/contacts/AddContact';
import UpdateContact from './Component/contacts/UpdateContact';
import { Provider } from "./Component/contacts/context"
import About from './Component/pages/About'
import Details from './Component/pages/Details'
import NotFound from './Component/pages/NotFoundPage';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
// let name = 'jone';
// name = 'hello';
// const unique = 'model';
// const nums = [1,2,3,4,5];
// const fruits = ['Apple', 'Bannana', 'Oranges'];
// const people = [
//   {id:1,name:'Chiến'},
//   {id:2,name:'Quý'},
//   {id:3,name:'Tùng'}
// ];
// const arr2 = [1,2,3,4,5,6,7];
// const q = [...arr2];
// let people2 = people.filter(val => val.id !== 2);
// nums.push(6)
 function App () {
    return (
      <React.Fragment>
        <Provider>
          <Router basename={process.env.PUBLIC_URL}>
        <Header branding="Contact management"  />
         <div className='container'>
           {/* <AddContact/>
          <Contacts/> */}
          <Switch>
          <Route exact path="/add" component={AddContact} />
            <Route exact path="/" component={Contacts} />
            <Route exact path="/about/:id" component={About}/>
            <Route exact path="/details/:id" component={Details}/>
            <Route exact path="/update/:id" component={UpdateContact}/>
             <Route exact path="/test" component={Test}/> 
             <Route exact path="/album" component={Album}/> 
            <Route component={NotFound}/>
            
          </Switch>
        </div> 
        </Router>
        </Provider>
        </React.Fragment>
      
      
    );
  }


export default App;
