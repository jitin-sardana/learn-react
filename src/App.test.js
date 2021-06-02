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
import App from './App';
import { Provider } from 'react-redux';
import * as reactRedux from 'react-redux'
import configureStore from 'redux-mock-store';


describe('With React Testing Library', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
  beforeEach(() => {
    useSelectorMock.mockClear()
  })

  const initialState = { output: 10 }
  const mockStore = configureStore()
  let store;

  it('Test App.js', () => {
    useSelectorMock.mockReturnValue({
      "categories": {
        "design": {
          "name": "Design",
          "category_URI": "https://s.udemycdn.com/home/top-categories/lohp-category-design.jpg",
          "courses": [
            {
              "course_id": "1",
              "course_title": "Adobe Photoshop CC: Your Complete Beginner to Advanced Class",
              "course_description": "Learn the essential tools of Adobe Photoshop CC to jump right in and design beautiful graphics and photos in Photoshop.",
              "course_uri": "https://img-b.udemycdn.com/course/240x135/927356_8108_4.jpg?secure=Ys4RTu0j4oNMKwEo56U2EA%3D%3D%2C1622192781",
              "price": "389",
              "old_price": "490",
              "section": "design"
            },
            {
              "course_id": "2",
              "course_title": "Photoshop Beginners Mastery: Zero to Hero in Photoshop",
              "course_description": "Learn Photoshop quickly and easily with essentials of Adobe Photoshop to produce beautiful images in Adobe Photoshop.",
              "course_uri": "https://img-c.udemycdn.com/course/240x135/348146_9dc0_7.jpg?Expires=1622193723&Signature=j-V-XnpOYcFQdiFMJoUB~ZTVgdBaSynyPFlxQic~WsPynuBH4WPGudzaY2mHw3vJVRGFKHPx7311pt~Hrn7Ygr3qQLM4j7OqVrC9uBfmiB4FcV-NfAXp8nWpCYZjs4Y63N4DvS-DHcxId-pr1KGRdgXY-ZowBSQeVULvGjuZH5adAGhhj8gCNz4b~FvxRiX~QJ59rSIYv8tv63awneHi3gdyGeLcCH2ChQvgOcxR46bpKXFkYfXBL3-URZLpvkDVY26jcyaGGc0t1HMCUktn-buiLDyKl6o0tWTgIugHzeDH6wwpDw1mXFL32notq089tqa2x5y-ZpzqMuiQxf~X~g__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
              "price": "897",
              "old_price": "1099",
              "section": "design"
            }]
        }
      }
    });
    store = mockStore(initialState);
    const { getByText } = render(<Provider store={store}><App /></Provider>)
    expect(getByText('Login to experience easy way of learning')).not.toBeNull()
  });
})