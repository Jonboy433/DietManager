import React from 'react';
import { shallow } from 'enzyme'
import DailyMeal from '../components/DailyMeal'

describe('Daily Meal', () => {
    let wrapper
    let meals

    beforeEach(() => {
        meals = {
            0: {
                mealType: 'Breakfast',
                name: 'Green Tea',
                value: 0
            },
            1: {
                mealType: 'Breakfast',
                name: 'Donut',
                value: 270
            },
            2: {
                mealType: 'Lunch',
                name: 'Sandwich',
                value: 490
            },
            3: { mealType: 'Dinner', name: 'Test', value: 0}
        }

        wrapper = shallow(<DailyMeal meals={meals}/>)
    });

    it('should display the number of items passed to it', () => {
        expect(wrapper.find('DailyMealItem')).toHaveLength(Object.keys(meals).length)
    });

    it('should display under the correct table header', () => {

        expect(wrapper.find('#breakfast-items').children('DailyMealItem')).toHaveLength(2)
        expect(wrapper.find('#lunch-items').children('DailyMealItem')).toHaveLength(1)
        expect(wrapper.find('#dinner-items').children('DailyMealItem')).toHaveLength(1)
        expect(wrapper.find('#snack-items').children('DailyMealItem')).toHaveLength(0)
    });

    it('should display No Meals Found if mealType is missing', () => {
        
        expect(wrapper.find('#snack-items')
        .children('tr')
        .children('td').first().text()).toBe('No Meals Found')
    });
    it('should display an Add button if no mealType is present', () => {
        
        console.log(wrapper.debug())
        expect(wrapper.find('#btn-add-item')).toHaveLength(1)
        
        expect(wrapper.find('#snack-items')
        .children('tr')
        .children('td')
        .children('button').exists()).toBe(true)
       });

});