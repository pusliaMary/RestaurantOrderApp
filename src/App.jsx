import './index.css'
import { Cart } from './Components/Cart/Cart'

import { AllCategories } from './Components/Filter/AllCategories'
import { Dishes } from './Components/DishesComponents/Dishes'


function App() {
  

  return (
   <div className="App">
      <div className='block columnCenter'>
        <div className="header">
            <h1>Choose your preferences...</h1>
        </div>
        <AllCategories />
        <Cart />
                
      </div>
      <div className='block'>
        <Dishes />
      </div>
   </div>
  )
}

export default App
