import { v4 as uuidv4 } from 'uuid';
import { Card, Col } from 'antd';

const FoodBox = (props) => {
  const { foods, deleteFood } = props;
  return (
    <div>
      <h1 className="text-center text-2xl">Food list</h1>
      {foods.length > 0 ? (
        <div className="food-box flex flex-wrap justify-center">
          {foods.map((food) => {
            return (
              <div key={uuidv4()}>
                <Col>
                  <Card
                    title={food.name}
                    style={{ width: 230, height: 300, margin: 10 }}
                  >
                    <img src={food.image} className="w-full h-24" alt="food" />
                    <p>Calories: {food.calories}</p>
                    <p>Servings: {food.servings}</p>
                    <p>
                      <b>Total Calories: {food.servings * food.calories} </b>{' '}
                      kcal
                    </p>
                    <button
                      className="py-2 px-4 rounded-md mt-2 bg-blue-300"
                      onClick={() => deleteFood(food.name)}
                    >
                      Delete
                    </button>
                  </Card>
                </Col>
              </div>
            );
          })}
        </div>
      ) : <div>
      <h1 className='text-center text-2xl font-bold mt-10'>Oops! There is no more content to show</h1>
      </div>}
    </div>
  );
};

export default FoodBox;
