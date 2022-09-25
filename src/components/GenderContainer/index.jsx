import React from 'react'
import s from './style.module.sass'
import Person from '../Person'


export default function GenderContainer({ people, gender }) {
    return (
        <div className={['wrapper', s.wrapper].join(' ')}>
            <p className={s.title}>{gender}</p>
            <div className={s.container}>
                {
                    people.map(el => <Person key={el.id} {...el} />)
                }
            </div>

        </div>
    )
}
