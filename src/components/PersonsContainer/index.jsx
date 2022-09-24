import React from 'react'
import s from './style.module.sass'
import Person from '../Person'

export default function PersonsContainer({people}) {
  return (
    <div className={['wrapper', s.container].join(' ')}>
      {
        people.map(elem => <Person key={elem.id} {...elem} />)
      }
    </div>
  )
}
