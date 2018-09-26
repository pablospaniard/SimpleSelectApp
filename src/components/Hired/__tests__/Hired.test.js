import React from 'react'
import { render, cleanup } from 'react-testing-library'
import Hired from '../Hired'
import { persons } from '../../../mockForTests/persons'

describe('Hired should render properly', () => {
  afterEach(cleanup)

  const hired = []

  it('should match snapshot', () => {
    const { container } = render(<Hired persons={persons} hired={hired} />)
    expect(container.firstChild).toMatchSnapshot('Hired_snapshot_1')
  })
})
