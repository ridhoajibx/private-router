import React, { Component } from 'react';
import avatar from '../../assets/img/logo/avatar.svg';
import PropTypes from 'prop-types';
import { validateEmail } from '../../variables/validator';

const letters = RegExp(/^[A-Za-z]+$/);
// const validateForm = (errors) => {
//   let valid = true;
//   Object.values(errors).forEach(
//     (val) => val.length > 0 && (valid = false)
//   );
//   return valid;
// }

export class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            dateOfBirth: '',
            errors: {
                name: '',
                email: '',
                password: '',
                password2: '',
                dateOfBirth: ''
              }

        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        e.preventDefault();
        const { name, value } = e.target;
        let errors = this.state.errors;

        switch (name) {
        case 'name': 
            let err;
            if(value.length < 5) {
                err = 'Full Name must be 5 characters long!';
            } else if (letters.test(value)) {
                err = '';
            } else {
                err = 'Name is not valid';
            }
            errors.name = err;
        break;
        case 'email': 
            errors.email = 
            validateEmail(value)
                ? ''
                : 'Email is not valid!';
            break;
        case 'password': {
            // errors.password = 
            // value.length < 8
            //     ? 'Password must be 8 characters long!'
            //     : '';
            //     break;
            let err;
            if(value.length <8) {
                err = 'Password must be 8 characters long!';
            } else if (value !== this.state.password2) {
                err = '';
            }
            errors.password = err;
            break;
            }
        case 'password2': {
            // errors.password = 
            // value.length < 8
            //     ? 'Password must be 8 characters long!'
            //     : '';
            //     break;
            let err;
            if(value.length <8) {
                err = 'Password must be 8 characters long!';
            } else if (value !== this.state.password) {
                err = 'Password does not match!';
            }
            errors.password2 = err;
            break;
            }
        case 'dateOfBirth': 
            errors.dateOfBirth = 
            value.length < 5
            ? ''
            : '';
        break;
            
        default:
            break;}

            this.setState({errors, [name]: value});
        
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.userSignupRequest(this.state);
        // if(validateForm(this.state.errors)) {
        //     console.info('Valid Form')
        //     }else{
        //     console.error('Invalid Form')
        //     }
    }
    render() {
    const {errors} = this.state;
        return <div className="base-container">
            <form onSubmit={this.onSubmit} noValidate>
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
                                autoComplete="off" noValidate/>
                            <small>{errors.name.length > 0 && 
                <span className='error'>{errors.name}</span>}</small>
                        </div>
                        <div className="form-group">
                            <label className="mail" htmlFor="email">Email</label>
                            <input 
                                type="text" 
                                name="email" 
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.onChange}
                                autoComplete="off" noValidate/>
                                <small>{errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}</small>
                            
                        </div>  
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.onChange}
                                autoComplete="off" noValidate/>
                            <small>{<span className='error'>{errors.password}</span>}</small>
                        </div> 
                        <div className="form-group">
                            <label className="confirm" htmlFor="password2">Confirm Password</label>
                            <input 
                                type="password" 
                                name="password2" 
                                placeholder="Password"
                                value={this.state.password2}
                                onChange={this.onChange}
                                noValidate/>
                            <small>{<span className='error'>{errors.password2}</span>}</small>
                        </div> 
                        <div className="form-group">
                            <label className="dateOfBirth" htmlFor="dateOfBirth">Date Of Birth</label>
                            <input 
                                type="date" 
                                name="dateOfBirth" 
                                placeholder="1990-01-01"
                                value={this.state.dateOfBirth}
                                onChange={this.onChange}
                                noValidate/>
                            <small>{<span className='error'>{errors.dateOfBirth}</span>}</small>
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
    userSignupRequest: PropTypes.func
}