import React, {Component} from 'react';
import axios from 'axios';
const Context = React.createContext();
const reduce = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload.id
                ),
                loading: action.payload.loadingInternal
            }
        case 'ADD_CONTACT':
            return{
                ...state,
                contacts: [action.payload, 
                ...state.contacts
                ]
            }
        case 'DETAILS_CONTACT':
            return{
                ...state,
                ...state.contacts
            }
        case 'EDIT_CONTACT':
            return{
                ...state,
                contacts: state.contacts.map(contact => 
                    contact.id === action.payload.id ? (contact = action.payload) : contact
                    )
            }

        default:
                return state; 
    }
}
export class Provider extends Component {
state = {
    contacts: [
        // {
        //     id: 1,
        //     name: 'Chiến chuẩn chỉ',
        //     email: 'chienop198@gmail.com',
        //     phone: '0989 66 3213'
        // },
        // {
        //     id: 2,
        //     name: 'Quý đàn độn',
        //     email: 'quysa2@gmail.com',
        //     phone: '0989 66 233'
        // },
        // {
        //     id: 3,
        //     name: 'Tùng óc chó',
        //     email: 'tungngu18@gmail.com',
        //     phone: '424 66 3213'
        // }
    ],
    dispatch: action => this.setState(state => reduce(state, action)),
    loading: true
};
async componentDidMount(){
    console.log("You are change this data");
    let res = await axios.get
    ('https://jsonplaceholder.typicode.com/users')
   this.setState({loading: false})
   this.setState({contacts: res.data})
    // .then(res =>
    //     {
    //         this.setState({
    //             loading: false,
    //             contacts:res.data
    //             })
            
    //     } )
}
render(){
    return (
        <Context.Provider value = {this.state}>
            {
                this.props.children
            }
        </Context.Provider>
    )
        }
    }
    export const Consumer = Context.Consumer;