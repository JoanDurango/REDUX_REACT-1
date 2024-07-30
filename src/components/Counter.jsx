import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/slice';


export const Counter = () => {

  const count = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <div className='my-4'>
        <button className='btn btn-primary' onClick={() => dispatch(increment())}>Incrementar</button>
      </div>
      <div>
        <button className='btn btn-danger' onClick={() => dispatch(decrement())}>Decrementar</button>
      </div>
    </div>
  )
}

