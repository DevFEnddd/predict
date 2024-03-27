import {useCallback, useState} from "react";
import recipes from "../data/recipes.jsx";
import RecipesBoxSearch from "../components/RecipesBoxSearch.jsx";
import RecipeCard from "../components/RecipeCard.jsx";
import {backgroundImageUrl} from "../constants/index.js";


const HomePage = () => {
    const [recipesData, setRecipesData] = useState(recipes);

    const filterRecipes = useCallback(
        (recipeTitle, categorySelect, cuisineSelect) => {
            let filteredRecipes = recipes;

            if (recipeTitle && recipeTitle.trim() !== '') {
                filteredRecipes = filteredRecipes.filter(recipe =>
                    recipe.name.toLowerCase().includes(recipeTitle.toLowerCase())
                );
            }

            if (categorySelect && categorySelect !== "Choose a Category") {
                filteredRecipes = filteredRecipes.filter(recipe =>
                    recipe.category === categorySelect
                );
            }

            if (cuisineSelect && cuisineSelect !== "Choose a Cuisine") {
                filteredRecipes = filteredRecipes.filter(recipe =>
                    recipe.cuisine === cuisineSelect
                );
            }

            setRecipesData(filteredRecipes);
        },
        [recipes],
    );


    return (
        <>
            <div className="py-32 w-full relative">
                <img
                    src={backgroundImageUrl}
                    className="absolute inset-0 w-full h-full object-cover brightness-50 z-[-1]"
                    alt="Background Image"
                />
                <RecipesBoxSearch onSearch={filterRecipes}/>
            </div>
            <div className="container px-4 mx-auto py-12 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipesData.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe}/>
                ))}
            </div>
        </>
    );
};

export default HomePage;
