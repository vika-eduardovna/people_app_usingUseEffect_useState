import React from 'react'
import s from './style.module.sass'

export default function AddPerson({add_new_person}) {

    const submit = e => {
        e.preventDefault();
        const {name, avatar, sex} = e.target;
        add_new_person(name.value, avatar.value, sex.value);
        console.log(name.value, avatar.value, sex.value);
        name.value = '';
        avatar.value = '';
        sex.value = '';
    }

  return (
    <form className={['wrapper', s.container].join(' ')} onSubmit={submit}>
        <input type="text" name='name' placeholder='Name'/>
        <input type="text" name='avatar' placeholder='Link for your photo'/>
        <input type="text" name='sex' placeholder='Sex'/>
        <button className={s.button}>Add</button>
    </form>
  )
}
