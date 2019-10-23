import React, { Component } from 'react';
import GoHome from '../GoHome/GoHome';
import '../../css/index.css';


class DetailDocu extends Component {

  render() {
    return (
      <div className="detail detail-docu">
      <GoHome></GoHome>
      <h3>Documentation</h3>
      <div class="docu-wrapper">
        <h4>Overview</h4>
        <p>text</p>
      </div>
      </div>
    );
  };
}
export default DetailDocu;