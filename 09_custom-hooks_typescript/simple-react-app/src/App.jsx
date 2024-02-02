import { useEffect, useState } from 'react'
import { useIsOnline } from './hooks/userIsOnline';
import { useMousePointer } from './hooks/useMousePointer';
import { useInterval } from './hooks/useIntervalx';
import { useTodos } from './hooks/useTodos';
import { useDebounce } from './hooks/useDebounce';
import { useDimensions } from './hooks/useDimensions';

function App() {
  const {todos, loading} = useTodos(5); // Data-fetch Custom Hook
  const isOnline = useIsOnline();
  const mousePosition = useMousePointer();
  const screenDimension = useDimensions();

  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(c => c + 1);
  }, 1000)

  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  if(loading){
    return <div>Loading ...</div>
  }

  return (
    <>
      {isOnline ? <div>You are online, yayyy !!!</div> : <div>You are offline !!!</div>}
      <br />
      Timer is at {count}
      <br />
      <br />
      {mousePosition ? <div>Your mouse is at: {mousePosition.x}, {mousePosition.y}</div> : <div>You are online, yayyy !!!</div>}
      <br />
      {screenDimension ? <div>
        <p>Width: {screenDimension.x}</p>
        <p>Height: {screenDimension.y}</p>
      </div>: <div></div>}
      <br />
      Dbounced value is {debouncedValue}
      <br />
      <input type="text" onChange={e=>setValue(e.target.value)} />
      <br />
      <br />
      <br />
      {todos.map(todo => <Track todo={todo} />)}
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App