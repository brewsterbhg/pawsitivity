import { Loading, Failure, Success } from './AffirmationsCell'
import { standard } from './AffirmationsCell.mock'

export const loading = () => {
  return Loading ? <Loading /> : null
}

export const failure = () => {
  return Failure ? <Failure error={new Error('Oh no')} /> : null
}

export const success = () => {
  return Success ? <Success {...standard()} /> : null
}

export default { title: 'Cells/AffirmationsCell' }
