import { render } from '@redwoodjs/testing'

import Dog from './Dog'

describe('Dog', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Dog />)
    }).not.toThrow()
  })
})
