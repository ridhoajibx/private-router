import React, { Component } from 'react';
import Avatar from '../../assets/img/logo/avatar.svg';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { validateEmail } from '../../variables/validator';

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {
                email: '',
                password: ''
              }
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.loginRequest(this.state);
        if(validateForm(this.state.errors)) {
        console.info('Valid Form')
        }else{
        console.error('Invalid Form')
        }
      }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        e.preventDefault();
        const { name, value } = e.target;
        let errors = this.state.errors;

        switch (name) {
        case 'email': 
            errors.email = 
            validateEmail(value)
                ? ''
                : 'Email is not valid!';
            break;
        case 'password': 
            errors.password = 
            value.length < 8
                ? 'Password must be 8 characters long!'
                : '';
            break;
        default:
            break;}

            this.setState({errors, [name]: value});
      }
    
    render() {
        const {email, password, errors} = this.state;
        return <div className="base-container">
            <form onSubmit={this.onSubmit} noValidate>
            <div className="title">Sign In</div>
                <div className="content">
                    <div className="avatar">
                        <img src={Avatar} alt="" />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label className="mail" htmlFor="email">Email</label>
                            <input 
                            required
                            type="text" 
                            name="email" 
                            autoComplete="off" 
                            placeholder="Email"
                            value={email}
                            onChange={this.onChange}
                            noValidate/>
                            <small>{errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input 
                            required
                            type="password" 
                            name="password" 
                            autoComplete="off" 
                            placeholder="Password"
                            value={password}
                            onChange={this.onChange}
                            noValidate/>
                            <small>{errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}</small>
                        </div>  
                    </div>
                </div>
                <div className="footer">
                    
                    <button className="btn btn-primary" >
                        SIGN IN 
                    </button>
                </div>
                </form>
        </div>
    }

}

Login.propTypes = {
    loginRequest: PropTypes.func
}
  const mapDispatchToProps = (dispatch) => {
      return {
        handleShow: () => dispatch({type: 'SHOW_LOADER'}),
        handleHide: () => dispatch({type: 'HIDE_LOADER'})
      }
  }
  const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading
    }
  
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);