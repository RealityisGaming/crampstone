import React from 'react'

export default function CharacterItem(props) {
    // Destructing props
    const {id, name, job, level, hp, skill, skill_two, skill_three} = props.character
  return (
    <div className = "papers">
        <div className='paper'>
            <p>{id}</p>
            <p>{name}</p>
            <p>{level}</p>
            <p>{hp}</p>
            <p>{job}</p>
            <p>{skill}</p>
            <p>{skill_two}</p>
            <p>{skill_three}</p>
            <button className = "delete" onClick={() => props.handleDelete(id)}>Press me</button>
            <button className='fighter' onClick={() => location.href = 'http://localhost:3000/battles'}>Fight Me</button>
        </div>
    </div>
  )
}
