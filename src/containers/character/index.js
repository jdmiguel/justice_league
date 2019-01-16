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
      <div className="character_container">
        <p>Character</p>
      </div>
    );
  }
}

export default Character;
