import React, {useRef} from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import { createAddPersonAction } from '../../../../redux/actions/person'


function Person(props) {
    const nameInput = useRef(null)
    const ageInput = useRef(null)
    const addPerson = () => {
        const name = nameInput.current.value
        const age = ageInput.current.value
        props.addperson({id:nanoid(), name, age})
        nameInput.current.value = ''
        ageInput.current.value = ''
    }
  return (
    <div>
        <h2>Person Component</h2>
        <h4>count: {props.count}</h4>
        <input type="text" ref={nameInput} />
        <input type="text" ref={ageInput} />
        <button onClick={addPerson}>Add Person</button>
        <ul>
            {
                props.person.map((p) => {
                    return <li key={p.id}>{p.name}, {p.age}</li>
                }

                )
            }
        </ul>
    </div>
  )
}

export default connect(
    state => ({person: state.ren}),
    {
        addperson: createAddPersonAction
    }
    )(Person)
