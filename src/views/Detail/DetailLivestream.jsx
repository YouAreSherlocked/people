import React, { Component } from 'react';
import '../../css/index.css';
import GoHome from '../GoHome/GoHome';

class DetailLivestream extends Component {

  render() {
    return (
      <div className="detail detail-photo">
      <GoHome></GoHome>
        <h3>Livestream</h3>
        <div className="circle-title"></div>
        <div className="imgs">
          <div className="photo-wrapper">
          <iframe className="livestream" src="https://www.youtube.com/embed/EEIk7gwjgIM?autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="livestream"></iframe>
            <br></br>
            <br></br>
            <p>NASA ISS Live Stream</p>
          </div>
        </div>
      </div>
    );
  };
}
export default DetailLivestream;