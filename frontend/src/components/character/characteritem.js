import React from 'react'

export default function CharacterItem(props) {
    // Destructing props
    const {id, name, job, skill, skill_two, skill_three} = props.character
  return (
    <div>
        <div className='paper'>
            <p>{id}</p>
            <p>{name}</p>
            <p>{job}</p>
            <p>{skill}</p>
            <p>{skill_two}</p>
            <p>{skill_three}</p>
            <button onClick={() => props.handleDelete(id)}>Press me</button>
        </div>
    </div>
  )
}
