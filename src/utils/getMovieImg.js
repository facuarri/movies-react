import dafaultImg from "../defaultImg.jpg";

export const getMovieImg = (imgUrl, width) => {
    return imgUrl ? `https://image.tmdb.org/t/p/w${width}${imgUrl}` : dafaultImg
}