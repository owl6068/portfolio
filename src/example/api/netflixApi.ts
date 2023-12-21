const API = '9f3dc2e5fd2677c3149189fa44812040'
const BASIC_URL = 'https://api.themoviedb.org/3'

export const  getMovieApi = () => {
  const result = fetch(`${BASIC_URL}/movie/now_playing?api_key=${API}`).then(response => response.json())
  return result
}
export const  getMovieUpcomingApi = () => {
  const result = fetch(`${BASIC_URL}/movie/upcoming?api_key=${API}`).then(response => response.json())
  return result
}
export const  getMovieDetailApi = (movieId:string) => {
  if(movieId===undefined) return;
  const result = fetch(`${BASIC_URL}/movie/${movieId}?api_key=${API}`).then(reponse => reponse.json())
  return result
}
export const  getMovieSearchApi = (keywrod:string) => {
  const result = fetch(`https://api.themoviedb.org/3/search/movie?query=${keywrod}&api_key=${API}`).then(response => response.json())
  return result
}
export const  getTvApi = () => {
  const result = fetch(`${BASIC_URL}/tv/popular?api_key=${API}`).then(response => response.json())
  return result
}

export const  getTvDetailApi = (seriesId:string) => {
  const result = fetch(`${BASIC_URL}/tv/${seriesId}?api_key=${API}`).then(response => response.json())
  return result
}