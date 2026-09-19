/** Route-level loading state — shown while a page segment streams in. */
export default function Loading() {
  return (
    <div className="mx-auto max-w-[90rem] px-4 py-16 lg:px-12">
      <div className="skeleton mx-auto h-8 w-48" />
      <div className="skeleton mx-auto mt-4 h-12 w-2/3 max-w-xl" />
      <div className="skeleton mx-auto mt-4 h-5 w-full max-w-2xl" />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-ink-100">
            <div className="skeleton h-14 w-14 !rounded-2xl" />
            <div className="skeleton mt-5 h-6 w-3/4" />
            <div className="skeleton mt-3 h-4 w-full" />
            <div className="skeleton mt-2 h-4 w-5/6" />
          </div>
        ))}
      </div>

      <span className="sr-only" role="status">
        Loading page content…
      </span>
    </div>
  );
}
