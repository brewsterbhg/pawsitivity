export const schema = gql`
  type Result {
    dog: Dog
    affirmation: Affirmation
  }

  type Affirmation {
    affirmation: String
  }

  type Dog {
    id: String
    url: String
    width: Int
    height: Int
    breeds: [Breed]
  }

  type Breed {
    weight: Measurement
    height: Measurement
    id: Int
    name: String
    bred_for: String
    breed_group: String
    life_span: String
    temperament: String
  }

  type Measurement {
    imperial: String
    metric: String
  }

  type Query {
    fetchResult: Result
  }
`
