import './SpellSlots.css';

import React, { Component } from 'react'

export default class SpellSlots extends Component {
  constructor() {
    super()
    this.state = {
      level1: 0,
      level2: 0,
      level3: 0,
      level4: 0,
      level5: 0,
      level6: 0,
      level7: 0,
      level8: 0,
      level9: 0,
    }
  }
  
  render() {
    return (
      <div>
        <p>Spells go Here</p>
      </div>
    )
  }
}
