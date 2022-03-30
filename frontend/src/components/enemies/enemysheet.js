import React, { Component } from 'react';
import axios from "axios";
import navigate from "hookrouter";


import EnemyItem from "./slime"
import EnemyForm from '../forms/enemyforms/enemyform';

export default class EnemySheet extends Component {
    constructor() {
        super()

        this.state = {
            enemies:[]
        }

        this.handleMap = this.handleMap.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmission = this.handleSubmission.bind(this);
    }

    handleSubmission(enemy) {
        this.setState({
            enemies: [enemy].concat(this.state.enemies)
        })
        navigate("/")
    }

    handleDelete(id) {
        axios.delete(`http://localhost:5000/enemy/${id}`)
        .then(response => {
            this.setState({
                enemies: this.state.enemies.filter(enemy => {
                    return enemy.id !== id
                })
            })
            return response.data
        }).catch(error => {
            console.log(error);
        })

    }

    enemiesAPICall() {
        axios.get('http://localhost:5000/enemy')
        .then(response => {
            console.log(response.data);
            this.setState({
                enemies: response.data
            })
        }).catch(error => {
            console.log(error);
        })
    }

    handleMap() {
        return this.state.enemies.map(enemy => {
            return <EnemyItem key = {enemy.id} enemy={enemy} handleDelete={this.handleDelete}/>
        })
    }

    componentDidMount() {
        this.enemiesAPICall()
    }


    render() {
        return (
            <div>
                <div>
                    <EnemyForm handleSubmission={this.handleSubmission} />
                </div>
                {this.handleMap()}
                
            </div>
        )
    }
}
