import React, { Component } from 'react';
import axios from 'axios';

export default class EnemyForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            named: '',
            family: '',
            damage: '',
            skills: '',
            skills_two: '',
            skills_three: ''
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
        axios.post('http://localhost:5000/enemy', {
            method: "POST",
            credentials: 'same-origin',
            Header: {
                "content-type": 'application/json',
                'Access-Control-Allow-Origin': '*' 
            },
            name: this.state.name,
            family: this.state.family,
            damage: this.state.damage,
            skills: this.state.skill,
            skills_two: this.state.skill_two,
            skills_three: this.state.skill_three
        })
        .then(response => {
            this.setState({
                named: '',
                family: '',
                skills: '',
                skills_two: '',
                skills_three: ''
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
            <input type="text" name='named' placeholder="Your name" value={this.state.named} onChange={this.handleChange} />
            <input type="text" name='family' placeholder="Your family" value={this.state.family} onChange={this.handleChange} />
            <input type="text" name='skills' placeholder="Your skills" value={this.state.skills} onChange={this.handleChange} />
            <input type="text" name='skills_two' placeholder="Your skills two "value={this.state.skills_two} onChange={this.handleChange} />
            <input type="text" name='skills_three' placeholder="Your skills three" value={this.state.skills_three} onChange={this.handleChange} />
            <button>Whatever</button>
        </form>
  </div>
    )
  }
}