import React from 'react'
import GenderContainer from '../GenderContainer';

export default function PersonsContainer({ people }) {

  const gender_result = [];

  people.forEach(element => {
    const gender = gender_result.find(el => el.gender === element.gender);
    if (gender !== undefined) {
      gender.people.push(element)
    } else {
      gender_result.push({
        gender: element.gender,
        people: [element]
      })
    }
  });

  return (
    <div >
      {
        gender_result.map(elem => <GenderContainer key={elem.gender} {...elem} />)
      }
    </div>
  )
}
