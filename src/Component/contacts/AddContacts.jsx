import React, {Component, createRef} from 'react'
export default class AddContact2 extends Component {

   constructor(props){
       super(props);
       this.nameInput = React.createRef();
       this.emailInput = React.createRef();
       this.phoneInput = React.createRef();
   }

// onChangeName = (e) => this.setState({name: e.target.value});
// onChangeEmail = (e) => this.setState({email: e.target.value});
// onChangePhone = (e) => this.setState({phone: e.target.value});
// onChange = e => this.setState({[e.target.name] : e.target.value})
onSubmit = (e) => {
e.prevenDefaul();
const contact = {
    name: this.nameInput.current.value,
    email: this.emailInput.current.value,
    phone: this.phoneInput.current.value,
}
console.log('contact',contact);
}
static defaultProps = {
    name: 'Chien cc',
    email: 'chienop198@gmail.com',
    phone: '666-555-999'
}
    render () {
        const {name,email,phone} = this.props;
        return(
            <div className="card mb-3">
                <div className="card-header" >Add Contact</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" className="form-control form-control-lg"
                                placeholder="Name...." defaultValue = {name}
                                ref={this.nameInput}
                                ></input>
                                
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Email</label>
                                <input type="text" name="email" className="form-control form-control-lg"
                                placeholder="Email...." defaultValue = {email}
                                ref={this.emailInput}
                                ></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Phone</label>
                                <input type="text" name="phone" className="form-control form-control-lg"
                                placeholder="Phone...." defaultValue = {phone}
                                ref={this.phoneInput}
                                ></input>
                            </div>
                        </form>
                        <button className="btn btn-danger text-white"  >Add Contact</button>
                    </div>
            </div>

        )
    }
}