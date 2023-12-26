import { MOVIE_IMAGE_CDN_URL } from "../utils/constant";

const MovieCard = ({imgPath}) => {
    return (
        <div className="w-48 pr-4">
            <img alt="logo" src={MOVIE_IMAGE_CDN_URL + imgPath}></img>
        </div>
    )
}

export default MovieCard;