import React from 'react';
import { shallow } from 'enzyme'
import DailyMeal from '../components/DailyMeal'
import testHelper from '../tests/TestHelpers'

describe('Daily Meal', () => {
    let wrapper
    let meals = testHelper.singleDayMeals

    beforeEach(() => {
        wrapper = shallow(<DailyMeal meals={meals}/>)
    });

    it('should display the number of items passed to it', () => {
        expect(wrapper.find('DailyMealItem')).toHaveLength(Object.keys(meals).length)
    });

    it('should display under the correct table header', () => {
        expect(wrapper.find('#breakfast-items')).toHaveLength(2)
        expect(wrapper.find('#lunch-items')).toHaveLength(1)
        expect(wrapper.find('#dinner-items')).toHaveLength(1)
        expect(wrapper.find('#snack-items')).toHaveLength(0)
    });

    it('should display the correct meal data', () => {
        expect(wrapper.containsMatchingElement(<th>07-20-19</th>)).toBe(true)
    });

    it('should display No Meals Found if mealType is missing', () => {
        expect(wrapper.find('td').first().text()).toBe('No Meals Found')
    });
    
    it('should display an Add button if no mealType is present', () => {
        expect(wrapper.find('#btn-add-item')).toHaveLength(1)
    });

});