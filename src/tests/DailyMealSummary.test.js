import React from 'react'
import { render, cleanup, waitForElement, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom/extend-expect'
import axiosMock from 'axios'
import DailyMealSummary from '../components/DailyMealSummary'
import testHelper from '../tests/TestHelpers'

describe('Daily Meal Summary', () => {

    let meals = testHelper.multiDayMeals

    beforeEach(() => {

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

        axiosMock.get.mockResolvedValueOnce({data: {results: meals}})
        /* axiosMock.get.mockImplementationOnce( () =>
            Promise.resolve({ data: meals })
        ) */
        const url='/api/v1/meals'
        
        const { getByTestId, queryByText } = render(<DailyMealSummary />)

        expect(getByTestId('loading')).toHaveTextContent('Loading Meals...')
        const resolvedDiv = await waitForElement(() => getByTestId('resolved'))
    
        expect(queryByText('Loading Meals...')).toBeFalsy()

        expect(axiosMock.get).toHaveBeenCalledWith(url)
        expect(axiosMock.get).toHaveBeenCalledTimes(1)
        
    });

    it('should create a Daily Meal component for each result', async () => {
        axiosMock.get.mockResolvedValueOnce({data: { results: meals }})
        const url='/api/v1/meals'
        
        const { getByTestId } = render(<DailyMealSummary />)
        const resolvedDiv = await waitForElement(() => getByTestId('resolved'))
        expect(resolvedDiv.childElementCount).toBe(3)
        
    });

    it('should allow you to create a new Daily Meal', () => {
        //Find a button that lets you add a new 
        const { getByText, getByTestId } = render(<DailyMealSummary />)

        fireEvent.click(getByText('+'))

        // Now check for modal
    });
});