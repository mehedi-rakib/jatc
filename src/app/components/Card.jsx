export default function Card({ title, description }) {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-xl font-bold text-primary">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}
