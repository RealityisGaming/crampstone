import React, { Component } from 'react';

import SlimeModal from '../modal/slime-modal';

import slime from "../../..//static/assets/images/enemies/slime.jpg"
import lizdaran from "../../../static/assets/images/enemies/minwook-park-lizard3fh.jpg"
import goblin from "../../../static/assets/images/enemies/lizard-man-of-scape-ore-swamp-dungeons-dragons-art-png-favpng-znL0c8J5SNw2fVrcnJqZ3rJmw.jpg"

export default class battle extends Component {
  constructor() {
    super();
      this.state = {
        modalIsOpen: false
    }

    this.handleModal = this.handleModal.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleSlimesModal = this.handleSlimesModal.bind(this)
  }

  handleSlimesModal() {
    this.setState({ 
      modalIsOpen: this.handleModal
    })
  }

  handleModalClose() {
    this.setState({
      modalIsOpen: false
    })

  }

  handleModal() {
    this.setState({
      modalIsOpen: true
    })
  }




  render() {
    return (
      <div className='helper'>
        {/* Pick your enemy */}

        <SlimeModal handleModalClose={this.handleModalClose} modalIsOpen={this.state.modalIsOpen}/>
        <form className='enemy-pick'>
          <a className="slime" onClick={this.handleSlimesModal}> BATTLE TIME</a>
        </form>
      </div>
    )
    }
}
