import { useState } from 'react'

import loading from 'src/assets/loading.gif'

const Dog = ({ id, url, width, height }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div>
      {!loaded && <img src={loading} alt="loading" />}
      <img
        style={loaded ? {} : { display: 'none' }}
        id={id}
        src={url}
        height={height}
        width={width}
        alt="Dog"
        className="dog"
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}

export default Dog
