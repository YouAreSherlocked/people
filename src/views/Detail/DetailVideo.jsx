import React, { Component } from 'react';
import '../../css/index.css';
import GoHome from '../GoHome/GoHome';
import Metadata from '../Metadata/Metadata';

class DetailVideo extends Component {

  render() {
    return (
      <div className="detail detail-photo">
      <GoHome></GoHome>
        <h3>Video</h3>
        <div className="imgs">
          <div className="photo-wrapper">
            <img src={require("../../assets/img/photo.jpg")} alt="one" />
            <Metadata shutter="1400" aperture="2.4" iso="200"></Metadata>
            <p>About</p>
          </div>
        </div>
      </div>
    );
  };
}
export default DetailVideo;