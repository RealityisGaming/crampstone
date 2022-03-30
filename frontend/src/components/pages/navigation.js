import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Navigation extends Component {
    constructor() {
        super();
    }


    render() {
        return (
            <div className='navbar'>
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/battles">Battle</NavLink>
            </div>
    )
  }
}
