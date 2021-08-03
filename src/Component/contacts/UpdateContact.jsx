import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Consumer } from './context';
import TextInputGroup from '../layout/TextInputGroup'
import axios from 'axios';
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const ra = /^[0-9]{3}\)|[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
export default class AddContact extends Component {

    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            phone: '',
            errors: {}
        }
    }
    
    onChange = e =>{
       
        this.setState({ [ e.target.name ] : e.target.value });
        
    
    } 
    onSubmit = async (dispatch, e) => {
        // ngăn chặn sự click user
        e.preventDefault();
        // get state đã được onchange
        const { name, email, phone } = this.state;
        if(name === '') {
            this.setState({errors: { name: 'Name is required' }})
            return;
        }
        if(email === '') {
            this.setState({errors: { email: 'email is required' }})
            return;
        }
        if(!re.test(String(email).toLowerCase())) {
            this.setState({errors: { email: 'email is false' }})
            return;
        }
        
        if(phone === '') {
            this.setState({errors: { phone: 'phone is required' }})
            return;
        }
        if(!ra.test(phone)) {
            this.setState({errors: { phone: 'phone is false' }})
            return;
        }
        // check for Erros
        const updateContact = {

            // id: uuidv4(),
            name,
            email,
            phone
        }
        const { id } = this.props.match.params;
        try{
            
            let res = await axios.put
            (`https://jsonplaceholder.typicode.com/users/${id}`, updateContact)
            dispatch({type: "EDIT_CONTACT", payload: res.data })
            this.setState({
                name: '',
                email: '',
                phone: '',
                errors: {}
            })
            //điều hướng về trang chủ
             this.props.history.push("/");
        }catch (error){
            throw new Error("you get error" + error);
        }
        // cachs viết ở trên giống với việc viết như ở dưới
        // const newContact = {
        //     name : name,
        //     email: email,
        //     phone: phone
        // }
        //dispatch({type: "ADD_CONTACT", payload: newContact });

        // clear value has been pass into input
        
    }
    async componentDidMount(){
        const { id } = this.props.match.params;
        // call function getData from SV
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
          console.log('$resEdit', res);
          const contact = res.data;
          this.setState({
              name: contact.name,
              email: contact.email,
              phone: contact.phone
  
          })
      }
    render() {
        const { name, email, phone, errors } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                    <div className="card mb-3">
                        <div className="card-header">Edit Contact</div>
                        <div className="card-body">
                            <form onSubmit={ this.onSubmit.bind(this, dispatch) } >
                                <TextInputGroup 
                                    type="text"
                                    name="name"
                                    plaholder="Enter Name..."
                                    value={name}
                                    onChange={this.onChange}
                                    error={errors.name}
                                    label="Name"
                                  

                                />
                                <TextInputGroup 
                                    type="text"
                                    name="email"
                                    plaholder="Enter Email..."
                                    value={email}
                                    onChange={this.onChange}
                                    error={errors.email}
                                    label="Email"
                               
                                />
                                <TextInputGroup 
                                    type="text"
                                    name="phone"
                                    plaholder="Enter Phone..."
                                    value={phone}
                                    onChange={this.onChange}
                                    error={errors.phone}
                                    label="Phone"
                                    pattern = "+\d"
                                />
                                <input 
                                    type="submit" 
                                    value="Save Contact" 
                                    className="btn btn-light btn-block"
                                    />
                            </form>
                        </div>
                    </div>
                    )
                }}
            </Consumer>
        );
    }
}
