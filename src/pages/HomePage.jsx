import { useCallback, useEffect, useState } from "react";
import recipes from "../data/recipes.jsx";

const HomePage = () => {
  const [company, setCompany] = useState("haas zeitarbeit gmbh");
  const [job, setJob] = useState("versicherungskaufmann frau");
  const [title, setTitle] = useState(
    "versicherungskaufmann schwerpunkt bestandskundenbetreuung m w x"
  );
  const [data, setData] = useState();

  const [company1, setCompany1] = useState("company1");
  const [job1, setJob1] = useState("job1");
  const [title1, setTitle1] = useState("title1");
  const [data1, setData1] = useState();
  const [loading, setLoading] = useState(true);

  const handleSearch = (company, job, title, isCheck = false) => {
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
        setLoading(false)
        if (isCheck) {
          return setData1(str);
        }
        setData(str);
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  const handleChangeParam = () => {
    fetch(`http://192.168.1.6:5000/jobs`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setCompany1(data?.company)
        setJob1(data?.job)
        setTitle1(data?.title)
        handleSearch(data?.company, data?.job, data?.title, true)
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetch(`http://192.168.1.6:5000/jobs`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCompany1(data?.company);
        setJob1(data?.job);
        setTitle1(data?.title);
        handleSearch(data?.company, data?.job, data?.title, true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

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
          <button
            type="button"
            disabled={false}
            className="mt-7 min-w-[160px] text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br shadow-lg  px-5 py-2 text-center me-2 mb-2 flex justify-center"
            onClick={handleChangeParam}
          >
            {loading ? <div role="status">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              </div>: 
              "Change Param"}
            
            
          </button>
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
            onClick={(e) => handleSearch(company, job, title)}
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
