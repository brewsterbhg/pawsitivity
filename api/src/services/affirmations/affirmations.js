import axios from 'axios'

export const fetchResult = async () => {
  try {
    const affirmationData = await fetchAffirmation()
    const dogData = await fetchDog()

    return {
      affirmation: affirmationData,
      dog: dogData,
    }
  } catch (e) {
    console.error('Something went wrong!', e)
  }
}

export const fetchAffirmation = async () => {
  const { data } = await axios.get('https://www.affirmations.dev/')

  return data
}

export const fetchDog = async () => {
  const { data } = await axios.get('https://api.thedogapi.com/v1/images/search')

  return data[0]
}
