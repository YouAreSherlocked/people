import React, { Component } from 'react';
import '../../css/index.css';


class Metadata extends Component {

  render() {
    return (
      <div className="metadata">
        <img src={require('../../assets/img/meta/shutter.png')} alt="shutter speed" />
        <p>{this.props.shutter}</p>
        <img src={require('../../assets/img/meta/aperture.png')} alt="aperture" />
        <p>{this.props.aperture}</p>
        <img src={require('../../assets/img/meta/iso.png')} alt="iso" />
        <p>{this.props.iso}</p>
      </div>
    );
  };
}
export default Metadata;