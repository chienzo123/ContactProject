import React , { Component } from 'react';
import './contact.scss';
import  PropTypes  from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Consumer } from './context';
import axios from 'axios';
import {EditOutlined} from '@ant-design/icons';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom'
import { logDOM } from '@testing-library/react';
export default class Contact extends Component {
    state ={
        showInfoitem: false,
        loadingInternal: false
    }

  
    onDeleteClick = async (id, dispatch, loading) => {
        
        console.log(id);
        this.setState({loadingInternal: true})
        axios.delete
        (`https://jsonplaceholder.typicode.com/users/${id}`)
       this.setState({loadingInternal: false})
       dispatch({type: 'DELETE_CONTACT', payload: {id : id, loadingInternal: false}}) 
        // .then(res => {
        //     this.setState({loadingInternal: false})
        //     dispatch({type: 'DELETE_CONTACT', payload: {id : id, loadingInternal: false}}) 
        // })
    }
    
    render(){
        const {id, name, email, phone} = this.props.contact;
        const { showInfoitem, loadingInternal } = this.state;
        return (
            <React.Fragment>
            <Consumer>
                {
                    value  => {
                        const { dispatch, loading } = value;
                    
                return(
                    <React.Fragment>
                        {
                            loadingInternal && <div className="loader">loading</div>
                        }
                        {
                            !loadingInternal &&
            <div className="card" >
            <div className="card-body ">
              <h4 className="d-flex justify-content-start">
                  {name}
                  {/* <i className="fas fa-sort-down pl-3 " onClick={this.onShowClick.bind(this, id)}></i> */}
                  <i className="fas fa-sort-down pl-3 custom_icon "  onClick={() => this.setState({showInfoitem: !this.state.showInfoitem})}></i>
                   <Link to={`/update/${id}`} className="nav-link text-dark "><EditOutlined /></Link>
                  <i className="fas fa-times custom_icon text-danger " onClick={this.onDeleteClick.bind(this,id,dispatch, loading)} ></i>
                  </h4>

                  {
                    showInfoitem &&
                  <div className="list-group">
              <p className="list-group-item">Email: {email}</p>
              <p className="list-group-item">Phone: {phone}</p>
             
              <p className="list-group-item"><Link to={`/details/${id}`} >Detais!!!</Link></p>
             
              
              
              </div>
                }
            </div>
            
          </div>
                    }
          </React.Fragment>
          
                )
                    }
                    }
          </Consumer>  
          </React.Fragment>
        )
    }
}


Contact.propTypes = {
    // name: PropTypes.string.isRequired,
    // email: PropTypes.string.isRequired,
    // phone: PropTypes.string.isRequired
    contact: PropTypes.object.isRequired,
    
}