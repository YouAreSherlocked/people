import React, { Component, Fragment } from 'react';
import '../../css/index.css';
import Card from '../Card/Card';
import imgVideo from '../../assets/img/video.jpg';
import imgPhoto from '../../assets/img/photo.jpg';
import imgDocu from '../../assets/img/docu.jpg';

class Home extends Component {

  render() {
    return (
      <Fragment>
      <div className="home-cards">
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
          title="Docu"
          text="">
        </Card>
      </div>
        
      </Fragment>
    );
  };
}
export default Home;