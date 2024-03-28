import ArrowRight from "../assets/icons/ArrowRight.jsx";
import {Link} from "react-router-dom";
import TextTruncate from 'react-text-truncate';

const RecipeCard = ({recipe}) => (
    <div className="bg-white border border-gray-200 rounded-lg shadow relative">
        <img className="rounded-t-lg h-96 w-full object-cover" src={recipe.image} alt=""/>
        <span
            className="bg-gray-700 text-white text-xl right-2 absolute top-4
            font-medium me-2 px-2.5 py-0.5 rounded ">
            {recipe.cuisine}
        </span>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {recipe.name}
                </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 mt-6">
                <TextTruncate
                    line={3}
                    element="span"
                    truncateText="…"
                    text={recipe.description}
                />
                <p>
                    <Link to={"/"+recipe.id}
                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br mt-2"
                    >
                        Read more
                        <ArrowRight/>
                    </Link>
                </p>
            </p>
        </div>
    </div>
);

export default RecipeCard;
