import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap/Button'
import DailyMealItem from '../components/DailyMealItem'

function DailyMeal(props) {

    let { meals } = props
    
    //Assume the same meal date exists for all meals
    let mealDate = meals[0].mealDate

    const loadMeals = (mealType) => {
        let mealItems = []

        for (const key of Object.keys(meals)) {           
            switch(mealType) {
                case 'Breakfast':  
                    if (meals[key].mealType === 'Breakfast') {
                        mealItems.push(<DailyMealItem id='breakfast-items' key={meals[key].name} meal={meals[key]} />)
                    }
                    break
                case 'Lunch':
                    if (meals[key].mealType === 'Lunch') {
                        mealItems.push(<DailyMealItem id='lunch-items' key={meals[key].name} meal={meals[key]} />)
                    }
                    break
                case 'Dinner':
                    if (meals[key].mealType === 'Dinner') {
                         mealItems.push(<DailyMealItem id='dinner-items' key={meals[key].name} meal={meals[key]} />)
                    }
                    break
                case 'Snacks':
                    if (meals[key].mealType === 'Snacks') {
                        mealItems.push(<DailyMealItem id='snack-items' key={meals[key].name} meal={meals[key]} />)
                    }
                    break
                default:
                    break
            }
        }

        if (mealItems.length === 0 ) {
            return (<tr>
                    <td>No Meals Found</td>
                    <td><button id='btn-add-item'>Add Item</button></td>
                    </tr>)
        } 
        else {
            return mealItems
        }
    }

    return (
        <table>
            <thead>
            <tr>
                <th>
                    { mealDate }
                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th>
                    Breakfast
                </th>
            </tr>
           
           { loadMeals('Breakfast')}
          
            <tr>
                <th>
                    Lunch
                </th>
            </tr>

            { loadMeals('Lunch')}

            <tr>
                <th>
                    Dinner
                </th>
            </tr>
     
            { loadMeals('Dinner')}
    
            <tr>
                <th>
                    Snacks
                </th>
            </tr>
  
            { loadMeals('Snacks')}
            </tbody>
        </table>
    )
}

export default DailyMeal