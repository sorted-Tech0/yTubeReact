import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'CLark',
            age: 28,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 25,
            skill: 'Vue'
        }
    ]

    // if name are uique
    // const nameList = names.map(name => <h2 key={name}>{name}</h2>)   

    // or

    const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>)
    
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList
