import { useDispatch,useSelector } from 'react-redux'
import './App.css'
import {fetchTodos} from "./features/slice/todo"
import {Data} from "./components/Data"
function App() {
 
  const dispatch=useDispatch();
  const state=useSelector((state)=>state);
  console.log(state);

  if(state.todo.isLoading){
    return <h1>Loading...</h1>
  }
  return (
    <>
      <div>
        <button onClick={(e)=>dispatch(fetchTodos())}> Fetch Todos </button>
        {
          state.todo.data&&state.todo.data.map((e)=><li>{e.title}</li>)
        }

          <Data/>
      </div>
    </>
  )
}

export default App
