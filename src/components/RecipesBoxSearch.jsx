import  {useState} from 'react'

const RecipesBoxSearch = ({onSearch}) => {
    const [categorySelect, setCategorySelect] = useState();
    const [cuisineSelect, setCuisineSelect] = useState();
    const [recipeTitle, setRecipeTitle] = useState('');
    const handleCategoryChange = (event) => {
        setCategorySelect(event.target.value);
    };

    const handleCuisineChange = (event) => {
        setCuisineSelect(event.target.value);
    };

    const handleSearch = () => {
        onSearch?.(recipeTitle, categorySelect, cuisineSelect)
    };
    return (
        <div className="container px-4 mx-auto pt-12 flex flex-col lg:flex-row gap-2 justify-around">
            <div className="w-full">
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-white">Recipe Title</label>
                <input
                    type="text"
                    id="first_name"
                    className="italic bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Search recipe"
                    required
                    value={recipeTitle}
                    onChange={(e) => setRecipeTitle(e.target.value)}
                />
            </div>
            <div className="w-full ">
                <label htmlFor="underline_select" className="block mb-2 text-sm font-medium text-white">Category</label>
                <select id="underline_select"
                        className="block p-2.5 w-full text-sm text-gray-500 border-0 border-b-2 border-gray-200 appearance-none peer"
                        onChange={handleCategoryChange}>
                    <option value="">Choose a Category</option>
                    <option value="Main Course">Main Course</option>
                    <option value="Salad">Salad</option>
                    <option value="Dessert">Dessert</option>
                </select>
            </div>
            <div className="w-full ">
                <label htmlFor="cuisine_select" className="block mb-2 text-sm font-medium text-white">Cuisine</label>
                <select id="cuisine_select"
                        className="block p-2.5 w-full text-sm text-gray-500 border-0 border-b-2 border-gray-200 appearance-none peer"
                        onChange={handleCuisineChange}>
                    <option value="">Choose a Cuisine</option>
                    <option value="American">American</option>
                    <option value="Italian">Italian</option>
                    <option value="Asian">Asian</option>
                    <option value="Seafood">Seafood</option>
                    <option value="Mexican">Mexican</option>
                </select>
            </div>
            <div className="">
                <button type="button"
                        className="mt-7 min-w-[160px] text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br shadow-lg shadow-pink-500/50 px-5 py-2 text-center me-2 mb-2"
                        onClick={handleSearch}>
                    Search
                </button>
            </div>
        </div>
    );
}
export default RecipesBoxSearch
