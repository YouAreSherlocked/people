import React, { Component, Fragment } from 'react';
import '../../css/index.css';
import Card from '../Card/Card';
import imgVideo from '../../assets/img/video.jpg';
import imgPhoto from '../../assets/img/photo.jpg';
import imgDocu from '../../assets/img/docu.jpg';

class Home extends Component {
  reload() {
    window.location = '/';
  }
  render() {
    return (
      <Fragment>
      <div className="home-cards">
      <h1 onClick={this.reload}>People</h1>
        <Card
          bg={imgVideo}
          title="Video"
          text="">
        </Card>
        <Card
          bg={imgPhoto}
          title="Photo"
          text="">
        </Card>
        <Card
          bg={imgDocu}
          title="Documentation"
          text="">
        </Card>
      </div>
        
      </Fragment>
    );
  };
}
export default Home;