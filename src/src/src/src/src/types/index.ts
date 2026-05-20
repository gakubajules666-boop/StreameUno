export interface Movie {
  id: string
  title: string
  description: string
  videoUrl: string
  posterUrl: string
  backdropUrl: string
  genre: string
  year: number
  rating: number
  duration: string
  isSeries: boolean
  seasons?: number
  episodes?: number
}

export interface User {
  uid: string
  email: string
  displayName?: string
  photoURL?: string
}

export interface MyList {
  userId: string
  movieId: string
  addedAt: Date
}
