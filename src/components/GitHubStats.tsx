// src/components/GitHubStats.tsx

import { useState, useEffect } from 'react';
import { Star, GitFork, User, Users } from 'lucide-react'; // Make sure you have lucide-react installed

// Define TypeScript interfaces for your data structure
interface Repo {
  id: number;
  name: string;
  url: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
}

interface GitHubData {
  name: string;
  avatarUrl: string;
  followers: number;
  following: number;
  repos: Repo[];
}

export function GitHubStats() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const response = await fetch('/api/github-stats');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData: GitHubData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError('Failed to load GitHub stats. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, []); // The empty dependency array ensures this runs only once on mount

  if (loading) {
    return <div className="text-center p-8">Fetching latest GitHub activity...</div>;
  }

  if (error) {
    return <div className="text-center p-8 text-red-500">{error}</div>;
  }

  if (!data) {
    return null; // Don't render anything if there's no data
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h3 className="text-2xl font-bold text-center mb-6">My GitHub Activity</h3>
      
      {/* Profile Information Section */}
      <div className="flex items-center justify-center mb-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <img src={data.avatarUrl} alt={data.name} className="w-16 h-16 rounded-full mr-4 border-2 border-primary" />
        <div>
            <h4 className="text-xl font-semibold">{data.name}</h4>
            <div className="flex space-x-4 text-gray-600 dark:text-gray-400">
                <span className="flex items-center"><Users size={16} className="mr-1"/> {data.followers} Followers</span>
                <span className="flex items-center"><User size={16} className="mr-1"/> {data.following} Following</span>
            </div>
        </div>
      </div>

      {/* Repository Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:shadow-lg hover:border-primary transition-all bg-white dark:bg-gray-900"
          >
            <h5 className="font-bold truncate text-primary">{repo.name}</h5>
            <p className="text-sm text-gray-600 dark:text-gray-400 h-10 my-2 overflow-hidden">{repo.description || 'No description provided.'}</p>
            <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-500 mt-2">
              <span>{repo.language || 'N/A'}</span>
              <div className="flex items-center">
                <span className="flex items-center mr-3"><Star size={14} className="mr-1"/> {repo.stars}</span>
                <span className="flex items-center"><GitFork size={14} className="mr-1"/> {repo.forks}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}