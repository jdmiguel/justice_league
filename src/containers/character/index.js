import React, { Component } from 'react';

class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onMouseWheel: false
    };
  }

  render() {
    return (
      <div className="character_container superman">
        <div className="character_bg superman" />
      </div>
    );
  }
}

export default Character;
