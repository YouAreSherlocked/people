import React, { Component } from 'react';
import '../../css/index.css';
import GoHome from '../GoHome/GoHome';
import Metadata from '../Metadata/Metadata';

class DetailVideo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      width: 0
    }

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  getVideo() {
    const width = window.innerWidth * 0.8;
    let video = (<video controls id="video" width={width} src="/src/assets/video/nora_mayer_sewing_24fps.wmv" type="video/mp4" autoPlay></video>);
    return(
      video
    );
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    const reelContainerWidth = window.innerWidth - 400;

    // sets the width of reel-container state to (window size - 400px)
    this.setState({ width: reelContainerWidth });
  }

  render() {
    return (
      <div className="detail detail-video">
      <GoHome></GoHome>
        <h3>Video</h3>
        <div className="circle-title"></div>
          <div className="video-wrapper">
            {this.getVideo()}
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
    );
  };
}
export default DetailVideo;