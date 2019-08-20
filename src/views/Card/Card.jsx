import React, { Component } from 'react';
import '../../css/index.css';


class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    }

    this.activate = this.activate.bind(this);
  }

  activate(e) {
    if (e.target.parentElement.className.includes(this.props.title) || e.target.className.includes(this.props.title)) {
      this.setState({
        active: true
      })
    }
  }

  deactivate(e) {
    if (!e.target.parentElement.className.includes(this.props.title) || !e.target.className.includes(this.props.title)) {
      this.setState({
        active: false
      })
    }
  }

  render() {
    return (
      <div className={`card ${this.props.title}`} 
           style={{backgroundImage: `url(${this.props.bg})`, backgroundSize: this.state.active ? '280%': 'cover'}} 
           onMouseOver={(e) => this.activate(e)} 
           onMouseLeave={(e) => this.deactivate(e)}>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </div>
    );
  };
}
export default Card;