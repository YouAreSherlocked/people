import React, { Component } from 'react';
import '../../css/index.css';
import Metadata from '../Metadata/Metadata';
import GoHome from '../GoHome/GoHome';


class DetailPhoto extends Component {

  render() {
    return (
      <div className="detail detail-photo">
      <GoHome></GoHome>
        <h3>Photos</h3>
        <div className="imgs">
          <div className="photo-wrapper">
            <img src={require("../../assets/img/photo.jpg")} alt="one" />
            <Metadata shutter="1400" aperture="2.4" iso="200"></Metadata>
            <p>About</p>
          </div>

          <div className="photo-wrapper">
            <img src={require("../../assets/img/photo.jpg")} alt="one" />
            <Metadata shutter="1400" aperture="2.4" iso="200"></Metadata>
            <p>About</p>
          </div>

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
export default DetailPhoto;