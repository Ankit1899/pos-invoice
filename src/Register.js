import React,{Component} from 'react';
import './Register.css';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "abc@xyz.com",
            username: "Ankit",
            password: ""
        }
    }

    handlechangeall = (event) => {
        this.setState( {[event.target.name]: event.target.value})
    }

    handlesubmit = (event) => {
        alert(JSON.stringify(this.state))
    }

    render() {
        return ( 
                <div className="Register-box">
                <form onSubmit = {this.handlesubmit} >
                    <h1>Register </h1>
                    <div className="input"> 
                        <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handlechangeall} />
                        <br />
                        <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handlechangeall} />
                        <br />
                        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlechangeall}  />
                        <br />
                    </div>       
                        <input type="submit" value="Sign up" />
                         <br />       
                    <div className="signin">
                        Already a member? <a href="#">Sign in</a>
                    </div>
                </form>
            </div>
        )
    }
}




export default Register;