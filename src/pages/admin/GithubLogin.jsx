// import React, { useState, useEffect } from "react";
// import axios from "axios";
// const prodUrl = "https://githubintegration-0p5t.onrender.com";
// const localUrl = "http://localhost:3000/";
// const GithubLogin = () => {
//   const [repos, setRepos] = useState(null);

//   // const loginUrl = "https://githubintegration-0p5t.onrender.com/auth/github/login";
//   const loginUrl = `http://localhost:5000/auth/github/login`;

//   // const reposUrl = "https://githubintegration-0p5t.onrender.com/auth/github/my-repos";
//   const reposUrl = `http://localhost:5000/auth/github/my-repos`;

//   const handleLogin = () => {
//     console.log("Lign url", localUrl, reposUrl);
//     window.location.href = loginUrl;
//   };

//   const fetchRepos = async () => {
//     try {
//       const res = await axios.get(reposUrl, {
//         withCredentials: true,
//       });
//       setRepos(res.data);
//     } catch (err) {
//       console.error("Error fetching repos:", err);
//     }
//   };

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const loginSuccess = params.get("login");
//     console.log("UseEffect", loginSuccess);
//     if (loginSuccess === "success") {
//       console.log("UseEffect success block");
//       fetchRepos();
//       // Optional: remove query param from URL
//       window.history.replaceState({}, document.title, "/");
//     }
//   }, []);
//   return (
//     <div className="flex flex-col items-center gap-6 mt-8 w-full max-w-4xl">
//       {/* Show login button only if no repos */}
//       {!repos && (
//         <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition" onClick={handleLogin}>
//           Login with GitHub
//         </button>
//       )}

//       {/* Repos Grid */}
//       {repos && repos.length > 0 && (
//         <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {repos.map((repo, index) => (
//             <div key={index} className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition bg-white dark:bg-gray-800 flex flex-col justify-between">
//               <div>
//                 <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-100">{repo.name}</h3>
//                 <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">{repo.private ? "Private Repository" : "Public Repository"}</p>
//                 <a href={repo.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-medium text-sm">
//                   View on GitHub
//                 </a>
//               </div>

//               {/* Status Button */}
//               <div className="mt-4">
//                 <button className={`px-3 py-1 rounded-full text-sm font-medium ${repo.private ? "bg-gray-400 text-white cursor-not-allowed" : "bg-green-500 text-white hover:bg-green-600"}`} disabled={repo.private}>
//                   {repo.private ? "Private" : "Public"}
//                 </button>
//               </div>

//               {/* Add to Resume Button */}
//               <div className="mt-4">
//                 <button className="px-3 py-1 rounded-full text-sm font-medium bg-blue-500 text-white hover:bg-blue-600">Add to Resume</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* No repos message */}
//       {repos && repos.length === 0 && <p className="text-gray-600 dark:text-gray-300 mt-4">No repositories found.</p>}
//     </div>
//   );
// };

// export default GithubLogin;

import React, { useState, useEffect } from "react";
import axios from "axios";
// https://githubintegration-0p5t.onrender.com
const GithubLogin = () => {
  const [repos, setRepos] = useState(null);
  const [loading, setLoading] = useState(false);

  const loginUrl = "http://localhost:5000/auth/github/login";
  const reposUrl = "http://localhost:5000/auth/github/my-repos";

  const handleLogin = () => {
    window.location.href = loginUrl;
  };

  const fetchRepos = async () => {
    setLoading(true);
    try {
      const res = await axios.get(reposUrl, { withCredentials: true });
      setRepos(res.data);
    } catch (err) {
      console.error("Error fetching repos:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const loginSuccess = params.get("login");

    if (loginSuccess === "success") {
      fetchRepos();
      window.history.replaceState({}, document.title, "/");
    }
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 mt-8 w-full max-w-4xl">
      {/* Show login button only if not logged in and not loading */}
      {!repos && !loading && (
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition" onClick={handleLogin}>
          Login with GitHub
        </button>
      )}

      {/* Loading Spinner */}
      {loading && (
        <div className="flex flex-col items-center mt-8">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-b-4 border-gray-300"></div>
          <p className="mt-2 text-gray-700 dark:text-gray-300">Loading repositories...</p>
        </div>
      )}

      {/* Repos Grid */}
      {repos && repos.length > 0 && !loading && (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {repos.map((repo, index) => (
            <div key={index} className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition bg-white dark:bg-gray-800 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-100">{repo.name}</h3>
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">{repo.private ? "Private Repository" : "Public Repository"}</p>
                <a href={repo.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-medium text-sm">
                  View on GitHub
                </a>
              </div>

              {/* Status Button */}
              <div className="mt-4">
                <button className={`px-3 py-1 rounded-full text-sm font-medium ${repo.private ? "bg-gray-400 text-white cursor-not-allowed" : "bg-green-500 text-white hover:bg-green-600"}`} disabled={repo.private}>
                  {repo.private ? "Private" : "Public"}
                </button>
              </div>

              {/* Add to Resume Button */}
              <div className="mt-4">
                <button className="px-3 py-1 rounded-full text-sm font-medium bg-blue-500 text-white hover:bg-blue-600">Add to Resume</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No repos message */}
      {repos && repos.length === 0 && !loading && <p className="text-gray-600 dark:text-gray-300 mt-4">No repositories found.</p>}
    </div>
  );
};

export default GithubLogin;
