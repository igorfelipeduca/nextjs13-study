import { Suspense } from "react";
import LoadingSkeleton from "../components/LoadingSkeleton";
import User from "../components/User";
import Repos from "../components/Repos";

interface DashboardProps {
  params: {
    username: string;
  };
}

export default async function Dashboard({ params }: DashboardProps) {
  return (
    <div className="p-16 text-sm text-black space-y-8 flex flex-col">
      <Suspense fallback={<LoadingSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <User username={params.username} />
      </Suspense>

      <Suspense fallback={<LoadingSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <Repos username={params.username} />
      </Suspense>
    </div>
  );
}
