import React from 'react'
import s from './style.module.sass'
import Person from '../Person'


export default function GenderContainer({ people, gender }) {
    return (
        <div>
            <p>{gender}</p>
            <div>
                {
                    people.map(el => <Person key={el.id} {...el} />)
                }
            </div>

        </div>
    )
}
