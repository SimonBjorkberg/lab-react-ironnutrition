import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import Searchbar from './components/SearchBar';
import originalFoods from './foods.json';
import { useState } from 'react'

function App() {

  const [ foods, setFoods ] = useState(originalFoods)

  function addFood(newFood) {
    setFoods([...foods, newFood])
  }

  function search(e) {
    const filtered = originalFoods.filter((food) => {
      return food.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setFoods(filtered)
  }

  function deleteFood(foodName) {
    console.log(foodName)
    const deleted = foods.filter((food) => {
      return food.name !== foodName
    })
    setFoods(deleted)
  }

  return (
    <div className="foods ">
      <AddFoodForm addFood={addFood} />
      <Searchbar search={search} />
      <FoodBox foods={foods} deleteFood={deleteFood} />
    </div>
  );
}

export default App;
