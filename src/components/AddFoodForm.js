import { useState } from 'react'
import { Divider, Input } from 'antd';

const AddFoodForm = (props) => {
    const [ name, setName ] = useState('')
    const [ image, setImage ] = useState('')
    const [ calories, setCalories ] = useState(0)
    const [ servings, setServings ] = useState(0)

    const handleNameChange = (e) => {setName(e.target.value)}
    const handleImageChange = (e) => {setImage(e.target.value)}
    const handleCaloriesChange = (e) => {setCalories(e.target.value)}
    const handleServingsChange = (e) => {setServings(e.target.value)}

    function handleSubmit(e) {
        e.preventDefault()
        const newFood = { name, image, calories, servings };
        console.log(newFood)
        props.addFood(newFood)
    }

    const [ display, setDisplay ] = useState(true)

    function showOrHide() {
        setDisplay(!display)
    }

  return (
    <div className="add-food w-1/4 mx-auto">
    {!display ? <button className='mt-5 px-4 py-2 bg-blue-200 rounded-md hover:bg-blue-300' onClick={() => showOrHide()}>Add New Food</button> : <form onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>

        <label>Name</label>
        <Input value={name} type="text" onChange={(e) => {handleNameChange(e)}} />

        <label>Image</label>
        <Input value={image} type='text' onChange={(e) => {handleImageChange(e)}} />

        <label>Calories</label>
        <Input value={calories} type='number' onChange={(e) => {handleCaloriesChange(e)}} />

        <label>Servings</label>
        <Input value={servings} type='number' onChange={(e) => {handleServingsChange(e)}} />
        <button type="submit">Create</button> <br />
        <button className='mt-2 px-4 py-2 bg-blue-200 rounded-md hover:bg-blue-300'  onClick={() => showOrHide()}>Hide Form</button>
      </form>}
    </div>
  );
};

export default AddFoodForm;
