import React from 'react';
import { shallow } from 'enzyme'
import DailyMealItem from '../components/DailyMealItem'

describe('Daily Meal Item', () => {
    let wrapper

    beforeEach(() => {
        const meal = {
            mealType: 'Breakfast',
            name: 'Donut',
            value: 150
        }

        wrapper=shallow(<DailyMealItem meal={meal}/>)
    });

    it('should create 2 table row items', () => {
        expect(wrapper.contains(<td>Donut</td>)).toBeTruthy()
        expect(wrapper.contains(<td>Sandwich</td>)).toBeFalsy()
        expect(wrapper.find('td')).toHaveLength(2)
    }); 

    it('should display the name is the 1st table col', () => {
        expect(wrapper.find('td').first().text()).toBe('Donut')
        expect(wrapper.find('td').first().text()).not.toBe(150)
    });

    it('should display the value is the 2nd table col', () => {
        expect(wrapper.find('td').get(1).props.children).toEqual(150)
    });

    it('should tag table row with mealType ID', () => {
        expect(wrapper.find('#breakfast-item')).toHaveLength(1)
        expect(wrapper.find('#lunch-item')).toHaveLength(0)
    });
});