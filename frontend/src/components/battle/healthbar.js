import React from "react";

export default class HealthBar extends React.Component {
  
  constructor(props) {
    super(props);
    // debugger;
    this.state = { 
      hp: 25,
      basic: 1,
      secondary: 2,
      ultimate: 3,
    };
    
    this.setBasic = this.setBasic.bind(this);
    this.endBattle = this.endBattle.bind(this);
  }

  endBattle() {
    this.state.hp === 0 ? this.props.handleModalClose : null;
  }
  
  setBasic(amount) {
    this.setState({hp: (this.state.hp - amount)});
  }
 
  render() {
    
    // let health = (this.state.hp);
    // let newHealth = (health - this.state.basic);
    // let newHealth = (health -this.state.secondary);
    let endOfBattle = this.endBattle;
    let newHealth = (this.state.hp);

    console.log(newHealth)
    
    return (
      <div>
        <div className='healthBar'>
          <div className='healthSection left' style={{'width': newHealth}}></div>
          <div className='healthSection left' style={{'width': newHealth}}></div>
          <div className='healthSection left' style={{'width': newHealth}}></div>
          <div className='healthSection left' style={{'width': newHealth}}><p>{newHealth}</p></div>
        </div>
        <button href='#' onClick={this.setBasic.bind(this, 1)}>Normal Attack</button>
        <br />
        <button href='#' onClick={this.setBasic.bind(this, 3)}>Skilled Attack</button>
        <br />
        <button href='#' onClick={this.setBasic.bind(this, 5)}>Ultimate Attack</button>
      </div>
    );
  }
}