/** Shared notice list — used by the ticker, the home page and /notice. */
export const notices = [
  {
    id: 5,
    type: "Event",
    title: "Free Seminar",
    date: "2025-02-18",
    content:
      "A seminar will be held at Japan Ambition Training Center in the presence of the company owner from Japan and representatives from Kumiai Company. To participate in the seminar, please click on the registration link and register quickly or collect your ticket.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSc73-p0aSxuZ0oJ5m6Daq5jIWRukwovpi4EpYAXzd839YsnKQ/viewform?usp=sf_link",
  },
];

export const typeStyles = {
  Important: "bg-brand-50 text-brand-700 ring-brand-100",
  Academic: "bg-ink-50 text-ink-700 ring-ink-100",
  Event: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  Deadline: "bg-amber-50 text-amber-700 ring-amber-100",
};
