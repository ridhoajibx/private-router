import React, { Component } from 'react';
import Avatar from '../../assets/img/logo/avatar.svg';

export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.loginRequest(this.state);
      }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

    
    render() {
        const {email, password} = this.state;
        return <div className="base-container">
            <form onSubmit={this.onSubmit}>
            <div className="title">Sign In</div>
                <div className="content">
                    <div className="avatar">
                        <img src={Avatar} alt="" />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label className="mail" htmlFor="email">Email</label>
                            <input 
                            type="text" 
                            name="email" 
                            autoComplete="off" 
                            placeholder="Email"
                            value={email}
                            onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input 
                            type="password" 
                            name="password" 
                            autoComplete="off" 
                            placeholder="Password"
                            value={password}
                            onChange={this.onChange}/>
                        </div>  
                    </div>
                </div>
                <div className="footer">
                    
                    <button className="btn">
                        SIGN IN
                    </button>
                </div>
                </form>
        </div>
    }

}

Login.propTypes = {
    loginRequest: React.PropTypes
  }