import React, { Component } from 'react';
import LoginBox from "./LoginBox";
import RegisterBox from "./RegisterBox";

class LoginSignup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    };
  }

  render() {

    return (
      <div className="root-container">
        <div className="box-container">
          {this.state.isLoginOpen && <LoginBox/>}
          {this.state.isRegisterOpen && <RegisterBox />}
        </div>
      </div>
    );
  }
}

export default LoginSignup;
