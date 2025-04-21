import { useState, useEffect } from "react";

interface GitHubStats {
  stars: number;
  forks: number;
  loading: boolean;
  error: string | null;
}

export function useGitHubStats(owner: string, repo: string): GitHubStats {
  const [stats, setStats] = useState<GitHubStats>({
    stars: 0,
    forks: 0,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
        
        if (!response.ok) {
          throw new Error(`GitHub API responded with status ${response.status}`);
        }
        
        const data = await response.json();
        
        setStats({
          stars: data.stargazers_count,
          forks: data.forks_count,
          loading: false,
          error: null,
        });
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
        setStats({
          stars: 0,
          forks: 0,
          loading: false,
          error: error instanceof Error ? error.message : "Unknown error",
        });
      }
    };

    fetchStats();
  }, [owner, repo]);

  return stats;
} 