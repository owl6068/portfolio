const IMG_URL = 'https://image.tmdb.org/t/p/'

export const getBgimg = (imgName:string, size?:string, ) =>{
  return `${IMG_URL}/${size ? size : 'original'}/${imgName}`
}