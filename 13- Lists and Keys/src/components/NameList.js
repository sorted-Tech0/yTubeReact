import React from 'react'
import Person from './Person'

function NameList() {
    // const names = ['Bruce', 'Clark', 'Diana']
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
    //const nameList = names.map(name => <h2>{name}</h2>)  // or right side could be write in <div> 

    const personList = persons.map(person => <Person key={person.id} person={person} />)
    return (
        <div>
            {/* {nameList} */}
            {personList}
        </div>
    )
}

export default NameList
