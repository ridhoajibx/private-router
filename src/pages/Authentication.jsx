import React from "react";
import "./Authentication.scss";
import { Login, Register } from "../components/authentication/index";
import { connect } from "react-redux";
import { userSignupRequest } from '../redux/actions/signupActions';
import { loginRequest } from '../redux/actions/authAction';
import PropTypes from 'prop-types';

class Authentication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render() {
    const { userSignupRequest, loginRequest } = this.props;
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Signup" : "Signin";
    const currentActive = isLogginActive ? "Signin" : "Signup";
    const {show} = this.props
    console.log(show, 'this is show');
    return (
      
      <div className="Authentic"
        style={{
            position: 'relative',
            zIndex:100,
          transform: show ? 'translate(0vh)' : 'translate(-100vh)',
          opacity: show ? '1' : '0'
        }
        }>
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} 
              loginRequest={loginRequest}/>
            )}
            {!isLogginActive && (
              <Register 
                containerRef={ref => (this.current = ref)}
                userSignupRequest={userSignupRequest} />
            )}
            {/* <span onClick={this.props.closeModalHandler} className="close">X</span> */}
            
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

Authentication.propTypes = {
  userSignupRequest: PropTypes.func,
  loginRequest: PropTypes.func
}


const mapStateToProps = (state) => {
    return {
        global: state.global
    }
}

export default connect(mapStateToProps, { userSignupRequest, loginRequest })(Authentication);