import React from 'react'
import { render, cleanup } from 'react-testing-library'
import Interviewing from '../Interviewing'
import { persons } from '../../../mockForTests/persons'

describe('Interviewing should render properly', () => {
  afterEach(cleanup)

  const selected = []

  it('should match snapshot', () => {
    const { container } = render(
      <Interviewing persons={persons} selected={selected} />
    )
    expect(container.firstChild).toMatchSnapshot('Interviewing_snapshot_1')
  })
})
