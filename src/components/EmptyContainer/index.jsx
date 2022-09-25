import React from 'react'
import s from './style.module.sass'

export default function EmptyContainer() {
  return (
    <div className={['wrapper', s.wrapper].join(' ')}>No selected items here...</div>
  )
}
