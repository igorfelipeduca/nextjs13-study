interface ReposProps {
  username: string;
}

export default async function Repos({ username }: ReposProps) {
  const repos = await fetch(`https://api.github.com/users/${username}/repos`, {
    next: {
      revalidate: 30,
    },
  });

  const reposJson = await repos.json();

  return (
    <div className="flex flex-col">
      <h2>repos</h2>

      <pre>{JSON.stringify(reposJson, null, 2)}</pre>
    </div>
  );
}
