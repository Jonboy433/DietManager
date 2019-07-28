import React, { useState, useEffect } from 'react'
import DailyMeal from '../components/DailyMeal'
import axios from 'axios';

function DailyMealSummary ({url}) {

    // Set state to empty array on init
    const [meals, setMeals] = useState([])

    useEffect(() => {
        // Fetch meal data and save to state
        const loadData = async () => {
            const response = await axios.get(url)
            setMeals(response.data)
        }

        loadData()
    },[url])

    if(meals.length == 0 ) {
        return (
        <div data-testid="loading">
            Loading Meals...
        </div>)
    }

    return(<div data-testid="resolved">
            {meals.map( (meal, index) => <DailyMeal key={index} meals={meal} />)}
        </div>)
    
}

export default DailyMealSummary