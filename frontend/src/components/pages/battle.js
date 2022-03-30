import React, { Component } from 'react'


import SlimeModal from '../modal/slime-modal';
import GoblinModal from '../modal/goblin-modal';
import LizdaranModal from '../modal/lizdaran-modal';

import slime from "../../..//static/assets/images/enemies/slime.jpg"

export default class battle extends Component {
  constructor() {
    super();
      this.state = {
        modalIsOpen: false
    }

    this.handleModal = this.handleModal.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
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
      <div>
        Pick your enemy

        <SlimeModal handleModalClose={this.handleModalClose} modalIsOpen={this.state.modalIsOpen}/>
        <LizdaranModal handleModalClose={this.handleModalClose} modalIsOpen={this.state.modalIsOpen}/>
        <GoblinModal handleModalClose={this.handleModalClose} modalIsOpen={this.state.modalIsOpen}/>
        <form className='btn enemy-pick'>
          <a className='slime' onClick={this.handleModal}>Slime</a>
          <a onClick={this.handleModal}>Lizdaran</a>
          <a onClick={this.handleModal}>Goblin</a>
        </form>
      </div>
    )
    }
}
