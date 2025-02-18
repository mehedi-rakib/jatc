import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const iconMap = {
  phone: FaPhone,
  mail: FaEnvelope,
  clock: FaClock,
  location: FaMapMarkerAlt,
};

export function ContactCard({ type, title, details }) {
  const Icon = iconMap[type];

  return (
    <div className="bg-gray-50 p-8 rounded-lg text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500 mb-4">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {Array.isArray(details) ? (
        details.map((detail, index) => (
          <div className="flex flex-col space-y-2">
            <p key={index} className="text-gray-600 text-sm">
              {detail}
            </p>
          </div>
        ))
      ) : (
        <p className="text-gray-600 text-sm">{details}</p>
      )}
    </div>
  );
}
