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
                <input type="text" name='name' placeholder="You're name" value={this.state.name} onChange={this.handleChange} />
                <input type="text" name='job' placeholder="You're job" value={this.state.job} onChange={this.handleChange} />
                <input type="text" name='skill' placeholder="You're skil"l value={this.state.skill} onChange={this.handleChange} />
                <input type="text" name='skill_two' placeholder="You're skill two "value={this.state.skill_two} onChange={this.handleChange} />
                <input type="text" name='skill_three' placeholder="You're skill three" value={this.state.skill_three} onChange={this.handleChange} />
                <button>Whatever</button>
            </form>
      </div>
    )
  }
}
