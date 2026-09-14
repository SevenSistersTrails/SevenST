import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          That page does not exist on SevenSistersTrails.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block text-sm font-medium underline underline-offset-4"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
