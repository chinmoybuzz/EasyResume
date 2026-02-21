import React, { useEffect, useState } from "react";

const GithubIntegration = () => {
  const [username, setUsername] = useState("octocat");
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchGithubData = async () => {
    try {
      setLoading(true);
      setError("");

      const profileRes = await fetch(`https://api.github.com/users/${username}`);
      const repoRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);

      if (!profileRes.ok) throw new Error("User not found");

      const profileData = await profileRes.json();
      const repoData = await repoRes.json();

      setProfile(profileData);
      setRepos(repoData);
    } catch (err) {
      setError("Failed to fetch GitHub data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGithubData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Search Section */}
      <div className="flex gap-3 mb-6">
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter GitHub username" className="border p-2 rounded w-64" />
        <button onClick={fetchGithubData} className="bg-black text-white px-4 py-2 rounded">
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Profile Section */}
      {profile && (
        <div className="bg-white p-6 rounded-xl shadow mb-6">
          <div className="flex items-center gap-6">
            <img src={profile.avatar_url} alt="avatar" className="w-24 h-24 rounded-full" />
            <div>
              <h2 className="text-xl font-bold">{profile.name}</h2>
              <p className="text-gray-600">@{profile.login}</p>
              <p className="mt-2">{profile.bio}</p>
              <div className="flex gap-6 mt-2 text-sm text-gray-500">
                <span>Followers: {profile.followers}</span>
                <span>Following: {profile.following}</span>
                <span>Repos: {profile.public_repos}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Repo Section */}
      {repos.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-3">Repositories</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {repos.slice(0, 6).map((repo) => (
              <div key={repo.id} className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold">{repo.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{repo.description}</p>
                <div className="flex justify-between mt-3 text-xs text-gray-500">
                  <span>⭐ {repo.stargazers_count}</span>
                  <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-blue-600">
                    View Repo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GithubIntegration;
