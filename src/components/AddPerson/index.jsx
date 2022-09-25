import React from 'react'
import s from './style.module.sass'



export default function AddPerson({add_new_person}) {

    const submit = e => {
        e.preventDefault();
        const {name, avatar, gender} = e.target;
        add_new_person(name.value, avatar.value, gender.value);
        console.log(name.value, avatar.value, gender.value);
        name.value = '';
        avatar.value = '';
        gender.value = '';
    }

  return (
    <form className={['wrapper', s.container].join(' ')} onSubmit={submit}>
        <input type="text" name='name' placeholder='Name'/>
        <input type="text" name='avatar' placeholder='Link for your photo'/>
        <select name="gender">
          <option value="man">Male</option>
          <option value="woman">Female</option>
        </select>
        <button className={s.button}>Add</button>
    </form>
  )
}
