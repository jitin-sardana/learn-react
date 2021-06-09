/* import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
 */
import React from 'react';
import { render } from '@testing-library/react';
import MyCourses from '../MyCourses';
import { Provider } from 'react-redux';
import * as reactRedux from 'react-redux'
import configureStore from 'redux-mock-store';
import { shallow } from '../../../enzyme';

describe('With React Testing Library', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispacthMock = jest.spyOn(reactRedux, 'useDispatch');
  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispacthMock.mockClear()
  })

  const initialState = { output: 10 }
  const mockStore = configureStore()
  let store;

  it('Test component MyCourses', () => {
    useSelectorMock.mockReturnValue({
      onlineCourses:{
      enrolledCourses: [
        {
          course_id: '2',
          course_title: 'Photoshop Beginners Mastery: Zero to Hero in Photoshop',
          course_description: 'Learn Photoshop quickly and easily with essentials of Adobe Photoshop to produce beautiful images in Adobe Photoshop.',
          course_uri: 'https://img-c.udemycdn.com/course/240x135/348146_9dc0_7.jpg?Expires=1622193723&Signature=j-V-XnpOYcFQdiFMJoUB~ZTVgdBaSynyPFlxQic~WsPynuBH4WPGudzaY2mHw3vJVRGFKHPx7311pt~Hrn7Ygr3qQLM4j7OqVrC9uBfmiB4FcV-NfAXp8nWpCYZjs4Y63N4DvS-DHcxId-pr1KGRdgXY-ZowBSQeVULvGjuZH5adAGhhj8gCNz4b~FvxRiX~QJ59rSIYv8tv63awneHi3gdyGeLcCH2ChQvgOcxR46bpKXFkYfXBL3-URZLpvkDVY26jcyaGGc0t1HMCUktn-buiLDyKl6o0tWTgIugHzeDH6wwpDw1mXFL32notq089tqa2x5y-ZpzqMuiQxf~X~g__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
          price: '897',
          old_price: '1099',
          section: 'design'
        }]
      }
    });
    const signingIn  = jest.fn();
    store = mockStore(initialState);
    const wrapper = shallow(<MyCourses />);
    /* wrapper.find('button').at(0).simulate('click');
     const { getByText } = render(<Login />)
    expect(getByText('Login to experience easy way of learning')).not.toBeNull() */
  });
})