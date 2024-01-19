export interface IGetMovieApiresults {
  backdrop_path: string,
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  vote_average:number,
  vote_count: number,
  name:string
}
export interface IGetMovieApi{
  dates:{
    maximum:object,
    minimum:object
  },
  page:number,
  results:IGetMovieApiresults[],
  total_pages:number,
  total_results:number
}

 export interface IGetSearchresult {
  backdrop_path: string,
  id: number,
  original_language: string,
  original_title:string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  vote_average: number,
  vote_count: number
}

export interface IGetSearchApi{
  page:number,
  results:IGetSearchresult[],
  total_pages:number,
  total_results:number
}

export interface IGetMovieDtailGenres{
  id: number,
  name: string
}
export interface IGetMovieDtailApi{
  backdrop_path: string,
  genres: IGetMovieDtailGenres[],
  homepage: string,
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  revenue: number,
  runtime: number,
  status: string,
  tagline:string,
  title: string,
  video: false,
  vote_average: number,
  vote_count: number
}

export interface iGetTvApi{
    backdrop_path: string,
    id: number,
    original_language: string,
    original_name:string,
    overview:string,
    popularity: number,
    poster_path: string,
    first_air_date: string,
    name: string,
    vote_average:number,
    vote_count: number,
}
