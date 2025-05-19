import Item from './components/item'
import './App.css'
import Cart from './components/Cart'
function App() {


  return (
    <>
     <Item name="iPhone" price="700000" />
       <Item name="Pendrive" price="1000" />
         <Item name="Charger" price="4500" />
         <Cart />
    </>
  )
}

export default App
