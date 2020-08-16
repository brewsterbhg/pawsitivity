import { render } from '@redwoodjs/testing'

import Affirmation from './Affirmation'

describe('Affirmation', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Affirmation />)
    }).not.toThrow()
  })
})
