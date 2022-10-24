import {useSelector, useDispatch} from "react-redux";
import {useState} from 'react';
import {decrement, increment, incrementByAmount} from "./redux/Counter"


function App() {
  const [number, setNumber] = useState('0');
  const {count} = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementValue = Number(number) || 0;

  return (
    <div className="App">
        <h1> The Count is: {count}</h1>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        
          <input  value={number} onChange={(e) => setNumber(e.target.value)}/>
    
        <button onClick={() => dispatch(incrementByAmount(incrementValue))}>increment by amount</button>
    </div>
  );
}

export default App;
