import { useState } from "react";
import AddPerson from "../AddPerson";
import {data} from '../data/index'
import PersonsContainer from "../PersonsContainer";

function App() {

  const [people, setPeople] = useState(data);
  
  const add_new_person = (name, avatar, gender) => setPeople([...people,
    {
      id: Date.now(),
      name,
      avatar,
      gender
    }
  ]);

  const delete_person = id => setPeople(people.filter(el => el.id !== id));
  const delete_gender_block = gender => setPeople(people.filter(el => el.gender !== gender));

  return (
    <div>
      <AddPerson add_new_person={add_new_person}/>
      <PersonsContainer people={people} delete_person={delete_person} delete_gender_block={delete_gender_block}/>
    </div>
  );
}

export default App;
