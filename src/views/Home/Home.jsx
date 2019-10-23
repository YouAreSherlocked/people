import React, { Component, Fragment } from 'react';
import '../../css/index.css';
import Card from '../Card/Card';
import imgVideo from '../../assets/img/video.jpg';
import imgPhoto from '../../assets/img/photo.jpg';
import imgLivestream from '../../assets/img/livestream.jpg';
import imgVideoIcon from '../../assets/img/icon_video.png';
import imgPhotoIcon from '../../assets/img/icon_photo.png';
import imgLivestreamIcon from '../../assets/img/icon_livestream.png';

class Home extends Component {
  reload() {
    window.location = '/';
  }
  
  render() {
    return (
      <Fragment>
      <div className="home-cards">
      <h1 onClick={this.reload}>People at Work</h1>
        <Card
          bg={imgVideo}
          icon={imgVideoIcon}
          title="Video"
          text="">
        </Card>
        <Card
          bg={imgPhoto}
          icon={imgPhotoIcon}
          title="Photo"
          text="">
        </Card>
        <Card
          bg={imgLivestream}
          icon={imgLivestreamIcon}
          title="Livestream"
          text="">
        </Card>
      </div>
        
      </Fragment>
    );
  };
}
export default Home;