interface UserProps {
  username: string;
}

export default async function User({ username }: UserProps) {
  const user = await fetch(`https://api.github.com/users/${username}/repos`, {
    next: {
      revalidate: 30,
    },
  });

  const userJson = await user.json();

  return (
    <div className="flex flex-col">
      <h2>user</h2>

      <pre>{JSON.stringify(userJson, null, 2)}</pre>
    </div>
  );
}
