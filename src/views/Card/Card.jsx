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

  openDetailPage(title) {
    window.location = `/detail/${title.toLowerCase()}`
  }

  render() {
    return (
      <div className={`card ${this.props.title} ${this.state.active ? ' active' : ''}`}
           onMouseOver={(e) => this.activate(e)}
           onMouseLeave={(e) => this.deactivate(e)}
           onClick={() => this.openDetailPage(this.props.title)}>
        <div className="card-img" style={{backgroundImage: `url(${this.props.bg})`}} ></div>
        <div className="card-img-icon" style={{backgroundImage: `url(${this.props.icon})`}} ></div>
      </div>
    );
  };
}
export default Card;