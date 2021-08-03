import React, {Component} from 'react';
import Contact from './Contact';
import {Consumer} from "./context";
export default class Contacts extends Component {
        render() {
            return (
                <Consumer>
                    {
                        value => {
                            const {contacts, loading} = value;
                            return (
                                <React.Fragment>
                                    {
                                        loading && <div className="loader">Loading</div>
                                    }
                                     {
                                         !loading && (
                                             <React.Fragment>
                                            <h2 className="display-4 my-3">
                                            <span className="text-danger">Contact List</span>
                                            
                                            </h2>
                                            {
                                                 contacts.length >0 && contacts.map(contact => <Contact
                                                    key = {contact.id}
                                                    contact = {contact}
                                                   />

                            )
                                            }
                                            </React.Fragment>
                                         )
                                     }
                                    
                                        {
                                            contacts.length === 0 && <p className="text-danger d-flex justify-content-center"><i className="fas fa-exclamation-triangle"></i>No Data list</p>
                   
                                        }
                                </React.Fragment>
                            )
                        }
                    }
                </Consumer>
            )
        }
}
            
            
            
            
        
    

