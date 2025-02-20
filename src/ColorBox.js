import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    // console.log(this.props.opacity);
    // return (
    //   <div className="color-box" style={{opacity: this.props.opacity}}>
    //     {/* your conditional code here! */}
    //     {this.props.opacity >= 0.2 &&
    //       <ColorBox opacity={this.props.opacity - 0.1} />
    //     }
    //   </div>
    // );
    if (this.props.opacity >= 0.2) {
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={this.props.opacity - 0.1} />
        </div>
      )
    } else {
      return null;
    }
  }

}

