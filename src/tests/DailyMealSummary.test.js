import React from 'react'
import { render, cleanup, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import axiosMock from 'axios'
import DailyMealSummary from '../components/DailyMealSummary'

describe('Daily Meal Summary', () => {

    let meals

    beforeEach(() => {
        meals = [[
            { mealDate: '07-20-19', mealType: 'Breakfast', name: 'Green Tea', value: 0},
            { mealDate: '07-20-19', mealType: 'Breakfast', name: 'Donut', value: 270 },
            { mealDate: '07-20-19', mealType: 'Lunch', name: 'Sandwich', value: 490 },
            { mealDate: '07-20-19',mealType: 'Dinner', name: 'Test', value: 0}
        ], [
            { mealDate: '07-21-19', mealType: 'Breakfast', name: 'Green Tea', value: 0},
            { mealDate: '07-21-19', mealType: 'Breakfast', name: 'Bagel', value: 125 },
            { mealDate: '07-21-19', mealType: 'Lunch', name: 'Soup', value: 260 },
            { mealDate: '07-21-19',mealType: 'Dinner', name: 'Test', value: 0}
        ], [
            { mealDate: '07-22-19', mealType: 'Breakfast', name: 'Coffee', value: 220},
            { mealDate: '07-22-19', mealType: 'Lunch', name: 'Pizza', value: 490 },
            { mealDate: '07-22-19',mealType: 'Dinner', name: 'Pasta', value: 500}
        ]]
    });

    afterEach(() => {
        cleanup()
        jest.clearAllMocks()
        
    })

    it('should set the initial state to null', async () => {

        const { getByTestId } = render(<DailyMealSummary />)
        expect(getByTestId('loading')).toHaveTextContent('Loading Meals...')
    });

    it('should get a list of daily meals from the DB', async () => {

        axiosMock.get.mockResolvedValueOnce({data: meals})
        const url='/api/v1/meals'
        
        const { getByTestId, queryByText } = render(<DailyMealSummary url={url}/>)

        expect(getByTestId('loading')).toHaveTextContent('Loading Meals...')
        const resolvedDiv = await waitForElement(() => getByTestId('resolved'))
        
        
        //expect(resolvedDiv).toHaveTextContent('Meals loaded')
        expect(queryByText('Loading Meals...')).toBeFalsy()
        expect(axiosMock.get).toHaveBeenCalledWith(url)
        expect(axiosMock.get).toHaveBeenCalledTimes(1)
        
    });

    it('should create a Daily Meal component for each result', async () => {
        axiosMock.get.mockResolvedValueOnce({data: meals})
        const url='/api/v1/meals'
        const { getByTestId } = render(<DailyMealSummary url={url}/>)
        const resolvedDiv = await waitForElement(() => getByTestId('resolved'))
        expect(resolvedDiv.childElementCount).toBe(3)
        
    });

    it('should allow you to create a new Daily Meal', () => {
        
    });
});