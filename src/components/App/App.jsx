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

  return (
    <div>
      <AddPerson add_new_person={add_new_person}/>
      <PersonsContainer people={people}/>
    </div>
  );
}

export default App;
