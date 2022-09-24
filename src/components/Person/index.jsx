import React from 'react'
import s from './style.module.sass'

export default function Person({ name, avatar }) {
  return (
    <div className={s.person_card}>
      <img src={avatar} alt="#" />
      <p>{name}</p>
    </div>
  )
}
