"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 py-20 text-center">
      <span className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-50 text-3xl">
        ⚠️
      </span>
      <h1 className="mt-6 text-2xl font-bold md:text-3xl">
        Something went wrong
      </h1>
      <p className="mt-4 text-[color:var(--muted)]">
        An unexpected error interrupted this page. Try again — if it keeps
        happening, please get in touch.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={reset} className="btn-primary">
          Try Again
        </button>
        <Link href="/" className="btn-outline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
