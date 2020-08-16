import { render, screen } from '@redwoodjs/testing'

import { Loading, Failure, Success } from './AffirmationsCell'

describe('AffirmationsCell', () => {
  it('Loading renders successfully', () => {
    render(<Loading />)
    expect(screen.getByAltText('loading')).toBeInTheDocument()
  })

  it('Failure renders successfully', () => {
    render(<Failure error={{ message: 'Oh no!' }} />)
    expect(screen.queryByText('Error: Oh no!')).toBeInTheDocument()
  })

  it('Success renders successfully', () => {
    const props = { affirmation: { affirmation: 'test' }, dog: { id: 1 } }
    render(<Success result={props} />)
    expect(screen.getByAltText('loading')).toBeInTheDocument()
    expect(screen.getByAltText('Dog')).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toBeInstanceOf(Array)
    expect(screen.queryByText('“test”')).toBeInTheDocument()
  })
})
