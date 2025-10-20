// api/github-stats.ts

import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_API_TOKEN;

  if (!username || !token) {
    return res.status(500).json({ error: 'GitHub username or token not configured.' });
  }

  try {
    // प्रोफाइल और रिपॉजिटरी डेटा को एक साथ फ़ेच करें
    const [userResponse, reposResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers: { Authorization: `token ${token}` },
      }),
      // सिर्फ 6 सबसे हाल की रिपॉजिटरी फ़ेच करें
      fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=6`, {
        headers: { Authorization: `token ${token}` },
      }),
    ]);

    if (!userResponse.ok || !reposResponse.ok) {
      throw new Error('Failed to fetch data from GitHub API');
    }

    const userData = await userResponse.json();
    const reposData = await reposResponse.json();

    // डेटा को पुराने, सरल स्ट्रक्चर में भेजें
    const stats = {
      name: userData.name,
      avatarUrl: userData.avatar_url,
      followers: userData.followers,
      following: userData.following,
      repos: reposData.map((repo: any) => ({ // <-- यहाँ key 'repos' है
        id: repo.id,
        name: repo.name,
        url: repo.html_url,
        description: repo.description,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
      })),
    };
    
    // API कॉल्स कम करने के लिए कैशिंग हेडर
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    
    return res.status(200).json(stats);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to fetch GitHub stats.' });
  }
}