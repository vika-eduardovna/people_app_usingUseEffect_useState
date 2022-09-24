import React from 'react'
import s from './style.module.sass'

export default function Person({ id, name, sex, avatar }) {
  return (
    <div className={s.person_card}>
      <img src={avatar} alt="#" />
      <p>{name}</p>
    </div>
  )
}
