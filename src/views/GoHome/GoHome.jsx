import React, { Component } from 'react';
import '../../css/index.css';


class GoHome extends Component {

  goHome() {
    window.location = '/';
  }

  render() {
    return (
      <div className="header">
        <img src={require("../../assets/img/go_back.svg")} alt="go to homepage" onClick={this.goHome} />
      </div>
    );
  };
}
export default GoHome;