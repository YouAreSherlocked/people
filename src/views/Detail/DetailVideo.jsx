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
            <img src={require("../../assets/img/video.jpg")} alt="one" />
            <Metadata shutter="200" aperture="2.4" iso="200"></Metadata>
            <p>1920 x 1080 px</p>
            <p>24 fps</p>
            <br></br>
            <p>
              Nora Mayer, Schneiderin, erzählt wieso sie den Beruf der Schneiderin gewählt hat, was in zu
              anderen Künstlerberufen unterscheidet und was ihre grossen Ziele sind.
            </p>
          </div>
        </div>
      </div>
    );
  };
}
export default DetailVideo;