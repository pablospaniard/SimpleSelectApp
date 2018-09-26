import React from 'react'
import { render, cleanup } from 'react-testing-library'
import Spinner from '../Spinner'

describe('Spinner should render properly', () => {
  afterEach(cleanup)

  it('should match snapshot', () => {
    const { container } = render(<Spinner />)
    expect(container.firstChild).toMatchSnapshot('Spinner_snapshot_1')
  })
})
