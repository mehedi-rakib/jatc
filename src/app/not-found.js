import Link from "next/link";

export const metadata = { title: "Page Not Found" };

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 py-20 text-center">
      <p className="font-display text-[7rem] font-extrabold leading-none text-gradient">
        404
      </p>
      <h1 className="mt-2 text-2xl font-bold md:text-3xl">
        This page took a detour
      </h1>
      <p className="mt-4 text-[color:var(--muted)]">
        The page you are looking for doesn&apos;t exist or has moved. Let&apos;s
        get you back to something useful.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
        <Link href="/contact-us" className="btn-outline">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
