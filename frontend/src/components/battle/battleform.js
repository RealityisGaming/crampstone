import React, { Component } from 'react';

import enemy from "../../../static/assets/images/enemies/slime.jpg";
import hero from "../../../static/assets/images/enemies/270px-Lizard_Man.png";
import vs from "../../../static/assets/images/battle/VS.jpg";
import SlimeModal from '../modal/slime-modal';
import GoblinModal from '../modal/goblin-modal';
import LizdaranModal from '../modal/lizdaran-modal';
import HealthBar from './healthbar';

export default class BattleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
      // this.handleForBasicSkill = this.handleForBasicSkill.bind(this);
  }

  // battleFormBasicSkill() {
  //   Math.subtract(3)
  // }

  render() {
    return (
      <div className='battle-scene'>
        <div className='left-side' 
          style={{backgroundImage:`url(${hero})`}}>
        </div>
        <div className='center'
        style={{backgroundImage:`url(${vs})`}}>
        </div>
        <div className='right-side' style={{backgroundImage:`url(${enemy})`}}>
          <HealthBar />
        </div>
      </div>
    )
  }
}
