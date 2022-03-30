import React, { Component } from 'react';
import axios from 'axios';

export default class CharacterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            job: '',
            skill: '',
            skill_two: '',
            skill_three: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // hanldeDropdown() {

    // }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    } 

    handleSubmit(event) {
        event.preventDefault()
        axios.post('http://localhost:5000/character', {
            method: "POST",
            credentials: 'same-origin',
            Header: {
                "content-type": 'application/json',
                'Access-Control-Allow-Origin': '*' 
            },
            name: this.state.name,
            job: this.state.job,
            skill: this.state.skill,
            skill_two: this.state.skill_two,
            skill_three: this.state.skill_three
        })
        .then(response => {
            this.setState({
                name: '',
                job: '',
                skill: '',
                skill_two: '',
                skill_three: ''
            })
            this.props.handleSubmission(response.data)
        }).catch(error => [
            console.log(error)
        ])
    }

  render() {
    return (
      <div>
            <form onSubmit={this.handleSubmit} className="create">
                <input className='data' type="text" name='name' placeholder="Your name" value={this.state.name} onChange={this.handleChange} />
                <input className='data' type="text" name='job' placeholder="Your job" value={this.state.job} onChange={this.handleChange} />
                <input className='data' type="text" name='skill' placeholder="Your skill" value={this.state.skill} onChange={this.handleChange} />
                <input className='data' type="text" name='skill_two' placeholder="Your second skill"value={this.state.skill_two} onChange={this.handleChange} />
                <input className='data' type="text" name='skill_three' placeholder="Your third skill" value={this.state.skill_three} onChange={this.handleChange} />
                <br/>
                <button className='submit-me'>Whatever</button>

            </form>
      </div>
    )
  }
}
