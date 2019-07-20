import React from 'react';
import { shallow } from 'enzyme'
import DailyEntryList from '../components/DailyEntryList'

describe('Daily Entry List', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallow(<DailyEntryList />)
    });
    it('should render', () => {
        expect(wrapper.find(DailyEntryList)).toBeDefined();
    });
});