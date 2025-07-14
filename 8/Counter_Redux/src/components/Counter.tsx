import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { increment, decrement, reset } from '../redux/actions'
import Button from './Button'

const Counter = () => {
  
  const count = useSelector((state: RootState) => state.count)
  const dispatch = useDispatch<AppDispatch>()

console.log("Redux count:", count);
  return (
    <div className="square">
      <h2 className="counter-display">{count}</h2>
      <div className="button-container">
      <Button onClick={() => dispatch(increment())}>+</Button>
      <Button onClick={() => dispatch(decrement())}>-</Button>
      <Button onClick={() => dispatch(reset())}>Reset</Button>
      </div>
    </div>
  )
}

export default Counter
