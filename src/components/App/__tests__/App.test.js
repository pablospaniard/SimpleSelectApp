import React from 'react'
import {
  render,
  cleanup,
  waitForElement,
  fireEvent
} from 'react-testing-library'

import { persons } from '../../../mockForTests/persons'
import App from '../App'

describe('App should render properly', () => {
  afterEach(cleanup)

  it('should match snapshot', () => {
    const { container } = render(<App />)
    expect(container.firstChild).toMatchSnapshot('App_snapshot_1')
  })

  it('render Applied component if step is 0', async () => {
    const { getByText } = render(<App />)
    await waitForElement(() => getByText('Applied'))
  })

  it('render Interviewing component if next button is pressed', async () => {
    const { getByText } = render(<App />)
    fireEvent.click(getByText('Next'))
    await waitForElement(() => getByText('Interviewing'))
  })
})
