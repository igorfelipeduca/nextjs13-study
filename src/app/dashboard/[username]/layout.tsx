import React from "react";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    username: string;
  };
}) {
  const user = await fetch(`https://api.github.com/users/${params.username}`, {
    next: {
      revalidate: 30,
    },
  });

  const userJson = await user.json();

  return (
    <>
      <header>{userJson ? `${userJson.name} (header)` : "não logado"}</header>

      {children}

      <footer>footer</footer>
    </>
  );
}
