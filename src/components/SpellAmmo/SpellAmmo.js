import './SpellAmmo.css';

import React, { Component } from 'react'

export default class SpellAmmo extends Component {
  constructor(props) {
    super(props)
    const {level1, level2, level3, level4, level5, level6, level7, level8, level9} = this.props.ammo
    this.state = {
      level1: level1,
      level2: level2,
      level3: level3,
      level4: level4,
      level5: level5,
      level6: level6,
      level7: level7,
      level8: level8,
      level9: level9,
      error: ""
    }
  }

  useSpell = spellLevel => {
    if (this.state[spellLevel] > 0) {
      this.setState({ [spellLevel]: this.state[spellLevel]-1})
    }
  }
  
  render() {
    return (
      <section className="ammo-section">
        <h2 className="todays-ammo">Today's Spell Ammo by Level</h2>
        <div className="ammo-wrapper">
          {!!this.state.level1 && 
          <div className="level-container">
            <p>1st</p>
            <p className="ammo-p">{this.state.level1}</p>
            <button onClick={() => this.useSpell("level1")}>Cast Spell</button>
          </div>}
          {!!this.state.level2 && <div className="level-container">
            <p>2nd</p>
            <p className="ammo-p">{this.state.level2}</p>
            <button onClick={() => this.useSpell("level2")}>Cast Spell</button>
          </div>}
          {!!this.state.level3 && <div className="level-container">
            <p>3rd</p>
            <p className="ammo-p">{this.state.level3}</p>
            <button onClick={() => this.useSpell("level3")}>Cast Spell</button>
          </div>}
          {!!this.state.level4 && <div className="level-container">
            <p>4th</p>
            <p className="ammo-p">{this.state.level4}</p>
            <button onClick={() => this.useSpell("level4")}>Cast Spell</button>
          </div>}
          {!!this.state.level5 && <div className="level-container">
            <p>5th</p>
            <p className="ammo-p">{this.state.level5}</p>
            <button onClick={() => this.useSpell("level5")}>Cast Spell</button>
          </div>}
          {!!this.state.level6 && <div className="level-container">
            <p>6th</p>
            <p className="ammo-p">{this.state.level6}</p>
            <button onClick={() => this.useSpell("level6")}>Cast Spell</button>
          </div>}
          {!!this.state.level7 && <div className="level-container">
            <p>7th</p>
            <p className="ammo-p">{this.state.level7}</p>
            <button onClick={() => this.useSpell("level7")}>Cast Spell</button>
          </div>}
          {!!this.state.level8 && <div className="level-container">
            <p>8th</p>
            <p className="ammo-p">{this.state.level8}</p>
            <button onClick={() => this.useSpell("level8")}>Cast Spell</button>
          </div>}
          {!!this.state.level9 && <div className="level-container">
            <p>9th</p>
            <p className="ammo-p">{this.state.level9}</p>
            <button onClick={() => this.useSpell("level9")}>Cast Spell</button>
          </div>}
        </div>
      </section>
    )
  }
}
