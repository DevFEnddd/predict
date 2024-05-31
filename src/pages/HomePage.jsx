import { useCallback, useEffect, useState } from "react";
import recipes from "../data/recipes.jsx";

const HomePage = () => {
  const [recipesData, setRecipesData] = useState(recipes);
  const filterRecipes = useCallback(
    (recipeTitle, categorySelect, cuisineSelect) => {
      let filteredRecipes = recipes;

      if (recipeTitle && recipeTitle.trim() !== "") {
        filteredRecipes = filteredRecipes.filter((recipe) =>
          recipe.name.toLowerCase().includes(recipeTitle.toLowerCase())
        );
      }

      if (categorySelect && categorySelect !== "Choose a Category") {
        filteredRecipes = filteredRecipes.filter(
          (recipe) => recipe.category === categorySelect
        );
      }

      if (cuisineSelect && cuisineSelect !== "Choose a Cuisine") {
        filteredRecipes = filteredRecipes.filter(
          (recipe) => recipe.cuisine === cuisineSelect
        );
      }

      setRecipesData(filteredRecipes);
    },
    [recipes]
  );

  const [company, setCompany] = useState("haas zeitarbeit gmbh");
  const [job, setJob] = useState("versicherungskaufmann frau");
  const [title, setTitle] = useState("versicherungskaufmann schwerpunkt bestandskundenbetreuung m w x");
  const [data, setData] = useState();

  const [company1, setCompany1] = useState("company1");
  const [job1, setJob1] = useState("job1");
  const [title1, setTitle1] = useState("title1");
  const [data1, setData1] = useState();

  const handleSearch = () => {
    fetch("http://192.168.1.145:8000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cleaned_company: company,
        cleaned_job: job,
        cleaned_title: title,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        const str = JSON.stringify(responseData, undefined, 4);
        setData(str)
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

//   useEffect(() => {
//     fetch(`http://192.168.1.6:5000/jobs`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   }, []);

  return (
    <>
      {/* retuen 1 */}

      <div className="container px-4 mx-auto py-12 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="space-y-3">
          <p>Predict 1</p>
          <input
            type="text"
            id="first_name"
            className=" bg-gray-200 border border-gray-400 text-sm block w-full p-2.5"
            placeholder="Enter company"
            required
            disabled
            value={company1}
          />
          <input
            type="text"
            id="first_name"
            className=" bg-gray-200 border border-gray-400 text-sm block w-full p-2.5"
            placeholder="Enter job"
            required
            disabled
            value={job1}
          />
          <input
            type="text"
            id="first_name"
            className=" bg-gray-200 border border-gray-400 text-sm block w-full p-2.5"
            placeholder="Enter title"
            required
            disabled
            value={title1}
          />
        </div>
        <div>
          <textarea
            id="message"
            rows="20"
            className="block p-2.5 w-full text-sm  rounded-lg border border-gray-600 placeholder-gray-400  ring-black "
            placeholder="Return data..."
            defaultValue={data1}
          ></textarea>
        </div>
      </div>
      {/* return 2 */}
      <div className="container px-4 mx-auto py-12 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="space-y-3">
          <p>Predict 2</p>
          <input
            type="text"
            id="first_name"
            className=" bg-gray-50 border border-gray-300 text-sm block w-full p-2.5"
            placeholder="Enter company"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            type="text"
            id="first_name"
            className=" bg-gray-50 border border-gray-300 text-sm block w-full p-2.5"
            placeholder="Enter job"
            required
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />
          <input
            type="text"
            id="first_name"
            className=" bg-gray-50 border border-gray-300 text-sm block w-full p-2.5"
            placeholder="Enter title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            type="button"
            className="mt-7 min-w-[160px] text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br shadow-lg  px-5 py-2 text-center me-2 mb-2"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div>
          <textarea
            id="message"
            rows="20"
            className="block p-2.5 w-full text-sm  rounded-lg border border-gray-600 placeholder-gray-400  ring-black "
            placeholder="Return data ....."
            defaultValue={data}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default HomePage;
