import {useEffect, useMemo} from 'react'
import {useLocation, useParams} from "react-router-dom";
import recipes from "../data/recipes.jsx";
import {backgroundImageUrl} from "../constants/index.js";

const DetailPage = ({}) => {
    const {id} = useParams();
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const recipe = useMemo(() => {
        return recipes.find(item => (item.id === parseInt(id)))
    }, [recipes]);

    return (<>
            <div className="py-32 w-full relative">
                <img
                    src={backgroundImageUrl}
                    className="absolute inset-0 w-full h-full object-cover brightness-50 z-[-1]"
                    alt="Background Image"
                />
                <div className="container mx-auto pt-12 px-6">
                    <h1 className="text-6xl font-bold text-center text-white">
                        {recipe.name}
                    </h1>
                    <div className="flex flex-row justify-center gap-6 mt-6">
                     <span className="px-4 py-2 bg-pink-500 text-white font-bold">
                        {recipe.category}
                        </span>
                        <span className="px-4 py-2 bg-pink-500 text-white font-bold">
                        {recipe.cuisine}
                      </span>
                    </div>
                </div>
            </div>
            <div className="container mx-auto pt-6 px-6">
                <div className="flex flex-row gap-6 mt-12 flex-wrap md:flex-nowrap">
                    <img alt={recipe.name} src={recipe.image}
                         className="max-h-[600px] w-full md:w-1/2 h-auto object-cover"/>
                    <div className='w-full md:w-1/2'>
                        <div>
                            <p className="text-pink-500 font-bold text-2xl uppercase">
                                Description
                            </p>
                            <p className='mt-6'>
                                {recipe.description}
                            </p>
                        </div>
                        <div className="mt-12">
                            <p className="text-pink-500 font-bold text-2xl uppercase">
                                Ingredients
                            </p>
                            <ul className='mt-6 list-decimal ml-6'>
                                {recipe.ingredients.map((ingredient, index) => (
                                    <li key={index + "ingredient"}>
                                        {ingredient}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <p className="text-pink-500 font-bold text-2xl uppercase">
                        instructions
                    </p>
                    <div className="flex flex-col text-xl mt-6">
                        {
                            recipe.instructions.map((instruction, index) => (
                                <div className="flex items-center mb-4" key={index}>
                                    <div
                                        className="aspect-square h-8 w-8 rounded-full bg-pink-500 flex items-center justify-center">
                                        <span className="text-white">{index + 1}</span>
                                    </div>
                                    <div className="ml-4 md:ml-12">
                                        {instruction}
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </>
    )
}
export default DetailPage
