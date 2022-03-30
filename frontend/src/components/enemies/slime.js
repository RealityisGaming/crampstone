import React from 'react'

export default function EnemyItem(props) {
    // Destructing props
    const {id, named, family, skills, skills_two, skills_three} = props.enemy
  return (
    <div>
        <div className='enemy-paper'>
            <p>{id}</p>
            <p>{named}</p>
            <p>{family}</p>
            <p>{damage}</p>
            <p>{skills}</p>
            <p>{skills_two}</p>
            <p>{skills_three}</p>
            <button onClick={() => props.handleDelete(id)}>Press me</button>
        </div>
    </div>
  )
}