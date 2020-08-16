import { render, screen } from '@redwoodjs/testing'

import { Loading, Failure, Success } from './AffirmationsCell'

describe('AffirmationsCell', () => {
  it('Loading renders successfully', () => {
    render(<Loading />)
    // Use screen.debug() to see output.
    expect(screen.queryByText('Loading...')).toBeInTheDocument()
  })

  it('Failure renders successfully', () => {
    render(<Failure error={{ message: 'Oh no!' }} />)
    expect(screen.queryByText('Error: Oh no!')).toBeInTheDocument()
  })

  it('Success renders successfully', () => {
    render(
      <Success userExample={{ affirmations: { objectKey: 'objectValue' } }} />
    )
    expect(
      screen.queryByText('{"affirmations":{"objectKey":"objectValue"}}')
    ).toBeInTheDocument()
  })
})
