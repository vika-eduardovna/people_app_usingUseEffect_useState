import React from 'react'
import s from './style.module.sass'
import Close from '../UI/Close/index'

export default function Person({id, name, avatar, delete_person }) {
  return (
    <div className={s.person_card}>
      <img src={avatar} alt="#" />
      <p className={s.name}>{name}</p>
      <div className={s.close} onClick={() => delete_person(id)}>
        <Close/>
      </div>
      
    </div>
  )
}
