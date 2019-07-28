import React, { useEffect } from 'react';
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
                    if (meals[key].mealType=='Breakfast') {
                        mealItems.push(<DailyMealItem key={meals[key].name} meal={meals[key]} />)
                    }
                    break
                case 'Lunch':
                    if (meals[key].mealType=='Lunch') {
                        mealItems.push(<DailyMealItem key={meals[key].name} meal={meals[key]} />)
                    }
                    break
                case 'Dinner':
                    if (meals[key].mealType=='Dinner') {
                         mealItems.push(<DailyMealItem key={meals[key].name} meal={meals[key]} />)
                    }
                    break
                case 'Snacks':
                    if (meals[key].mealType=='Snacks') {
                        mealItems.push(<DailyMealItem key={meals[key].name} meal={meals[key]} />)
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
        <div>
            <tr>
                <th>
                    { mealDate }
                </th>
            </tr>
            <tr>
                <th>
                    Breakfast
                </th>
            </tr>
           <div id='breakfast-items'>
           { loadMeals('Breakfast')}
           </div>
            <tr>
                <th>
                    Lunch
                </th>
            </tr>
            <div id='lunch-items'>
            { loadMeals('Lunch')}
            </div>
            <tr>
                <th>
                    Dinner
                </th>
            </tr>
            <div id='dinner-items'>
            { loadMeals('Dinner')}
            </div>
            <tr>
                <th>
                    Snacks
                </th>
            </tr>
            <div id='snack-items'>
            { loadMeals('Snacks')}
            </div>
        </div>
    )
}

export default DailyMeal