import React, { Component } from 'react'
import Slimes from '../enemies/slime'

export default class Battles extends Component {
  render() {
    return (
        <div>
            Pick your enemy

            <Slimes />
        </div>
    )
  }
}
