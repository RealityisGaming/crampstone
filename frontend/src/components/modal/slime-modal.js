import React, { Component } from 'react'
import ReactModal from 'react-modal'

export default class SlimeModal extends Component {
    constructor(props) {
        super(props);

        this.customStyles = {
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            marginRight: "-50%",
            transform: "translate(-50% ,-50%",
            width: "800px"
          }
        }
    }

    
  render() {
    return (
      <ReactModal 
        style= {this.customStyles} 
        onRequestClose={() => {this.props.handleModalClose();}} 
        isOpen={this.props.modalIsOpen}>
          <h1>I am is Open</h1>
      </ReactModal>
    )
  }
}
