import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import SearchBar from './components/SearchBar';
import data from './foods.json';
import { useState } from 'react'

function App() {
  const [ foodData, setFoodData ] = useState(data)
  const [ foods, setFoods ] = useState(foodData)

  function addFood(newFood) {
    setFoods([...foods, newFood])
    setFoodData([...foods, newFood])
  }

  function search(e) {
    const filtered = foodData.filter((food) => {
      return food.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setFoods(filtered)
  }

  function deleteFood(foodName) {
    console.log(foodName)
    const deleted = foodData.filter((food) => {
      return food.name !== foodName
    })
    setFoods(deleted)
  }

  return (
    <div className="foods ">
      <AddFoodForm addFood={addFood} />
      <SearchBar search={search} />
      <FoodBox foods={foods} deleteFood={deleteFood} />
    </div>
  );
}

export default App;
