import Affirmation from 'src/components/Affirmation'
import Dog from 'src/components/Dog'

import loading from 'src/assets/loading.gif'

export const QUERY = gql`
  query {
    result: fetchResult {
      dog {
        id
        url
        width
        height
      }
      affirmation {
        affirmation
      }
    }
  }
`

export const Loading = () => <img src={loading} alt="loading" />

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ result }) => {
  const { affirmation, dog } = result

  return (
    <>
      <Dog {...dog} />
      <Affirmation {...affirmation} />
    </>
  )
}
