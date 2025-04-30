"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const dynamic = "force-dynamic";

export default function Home() {
  // const { env, cf, ctx } = await getCloudflareContext({ async: true });
  // const db = drizzle(env.DB);
  const [count, setCount] = useState(0);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <p>Welcome template</p>
        <Button
          variant="default"
          className="w-[200px]"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Count: {count}
        </Button>
      </main>
    </div>
  );
}
