import React from 'react'
import { render, cleanup } from 'react-testing-library'
import Applied from '../Applied'
import { persons } from '../../../mockForTests/persons'

describe('Applied should render properly', () => {
  afterEach(cleanup)

  it('should match snapshot', () => {
    const { container } = render(<Applied persons={persons} />)
    expect(container.firstChild).toMatchSnapshot('Applied_snapshot_1')
  })
})
