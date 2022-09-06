import * as React from 'react';
import './style.css';

export default function App() {
   
  React.useEffect(()=> {
    // https://jsonplaceholder.typicode.com/users
  },[])

  return (
    <div>
      <p className="blue">Im yellow</p>
      <p className="red">Im red</p>
      <p className="red blue">I must be green</p>
    </div>
  );
}
