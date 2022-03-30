import React, { Component } from 'react';
import axios from "axios";
import navigate from "hookrouter";


import CharacterItem from './characteritem'
import CharacterForm from '../forms/somethingform'

export default class CharacterSheet extends Component {
    constructor() {
        super()

        this.state = {
            characters:[]
        }

        this.handleMap = this.handleMap.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmission = this.handleSubmission.bind(this);
    }

    handleSubmission(character) {
        this.setState({
            characters: [character].concat(this.state.characters)
        })
        navigate("/")
    }

    handleDelete(id) {
        axios.delete(`http://localhost:5000/character/${id}`)
        .then(response => {
            this.setState({
                characters: this.state.characters.filter(character => {
                    return character.id !== id
                })
            })
            return response.data
        }).catch(error => {
            console.log(error);
        })

    }

    charactersAPICall() {
        axios.get('http://localhost:5000/characters')
        .then(response => {
            console.log(response.data);
            this.setState({
                characters: response.data
            })
        }).catch(error => {
            console.log(error);
        })
    }

    handleMap() {
        return this.state.characters.map(character => {
            return <CharacterItem key = {character.id} character={character} handleDelete={this.handleDelete}/>
        })
    }

    componentDidMount() {
        this.charactersAPICall()
    }


    render() {
        return (
            <div>
                <div>
                    <CharacterForm handleSubmission={this.handleSubmission} />
                </div>
                {this.handleMap()}
                
            </div>
        )
    }
}
