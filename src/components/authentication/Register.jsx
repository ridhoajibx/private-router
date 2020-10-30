import React, { Component } from 'react';
import avatar from '../../assets/img/logo/avatar.svg';

export class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: ''

        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.userSignupRequest(this.state);
    }

    render() {
        return <div className="base-container">
            <form onSubmit={this.onSubmit}>
            <div className="title">Sign Up For a New Account</div>
                <div className="content">
                    <div className="avatar">
                        <img src={avatar} alt=""/>
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Full name</label>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Your Name"
                                value={this.state.username}
                                onChange={this.onChange}
                                autoComplete="off"/>
                        </div>
                        <div className="form-group">
                            <label className="mail" htmlFor="email">Email</label>
                            <input 
                                type="text" 
                                name="email" 
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.onChange}
                                autoComplete="off"/>
                        </div>  
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.onChange}
                                autoComplete="off"/>
                        </div> 
                        <div className="form-group">
                            <label className="confirm" htmlFor="password2">Confirm Password</label>
                            <input 
                                type="password" 
                                name="password2" 
                                placeholder="Password"
                                value={this.state.password2}
                                onChange={this.onChange}
                                />
                        </div> 
                    </div>
                </div>
                <div className="footer">
                    <button className="btn">
                        SIGN UP
                    </button>
                </div>
                </form>
        </div>
    }

}

Register.propTypes = {
    userSignupRequest: React.propTypes
}