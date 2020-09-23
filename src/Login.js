import React,{Component} from 'react';
import './Login.css';

class Login extends Component {

constructor(props) {
    super(props);

    this.state = {
        username: "Ankit12",
        password: ""
    }
}

handlechangeall = (event) => {
    this.setState( { [event.target.name]: event.target.value })
}

// handlename = (event) => {
//     this.setState({ username: event.target.value })

// }

// handlepassword = (pass) => {
//     this.setState( { password: pass.target.value })
// }

handlesubmit = (event) => {
    alert(JSON.stringify(this.state));
    console.log(JSON.stringify(this.state));
    event.preventDefault();
}

    render() {
        return ( 
                <div className="login-box">
                <form onSubmit = {this.handlesubmit}>
                    <h1>Login </h1>
                    <div className="input"> 
                        <i className="fas fa-user"></i>
                        <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handlechangeall} />
                        <br />
                        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlechangeall} />
                        <br />
                    </div>
                        <div className="check">
                        <input type="checkbox" /> Keep me signed in
                        <br />
                    </div>               
                        <input type="submit" value="Login" />
                         <br />       
                    <div className="signup">
                        Don't have an account? <a href="#">Sign up</a>
                    </div>
                </form>
            </div>
            )
    }
}



export default Login;