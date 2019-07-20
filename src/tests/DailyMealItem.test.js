import React from 'react';
import { shallow } from 'enzyme'
import DailyMealItem from '../components/DailyMealItem'

describe('Daily Meal Item', () => {
    let wrapper

    beforeEach(() => {
        const item = {
            name: 'Donut',
            value: 150
        }

        wrapper=shallow(<DailyMealItem item={item}/>)
    });

    it('should create 2 table row items', () => {
        expect(wrapper.find('td')).toHaveLength(2)
    });

    it('should display the name is the 1st table col', () => {
        expect(wrapper.find('td').get(0).props.children).toEqual('Donut')
    });

    it('should display the value is the 2nd table col', () => {
        expect(wrapper.find('td').get(1).props.children).toEqual(150)
    });
});