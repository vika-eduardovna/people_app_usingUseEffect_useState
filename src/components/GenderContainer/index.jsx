import React from 'react'
import s from './style.module.sass'
import Person from '../Person'
import Close from '../UI/Close'


export default function GenderContainer({ id, people, gender, delete_person, delete_gender_block }) {
    return (
        <div className={['wrapper', s.wrapper].join(' ')}>
            <p className={s.title}>{gender}</p>
            <div className={s.close} onClick={() => delete_gender_block(gender)}>
                    <Close />
            </div>
            <div className={s.container}>
                {
                    people.map(el => <Person key={el.id} {...el} delete_person={delete_person} />)
                }
            </div>

        </div>
    )
}
