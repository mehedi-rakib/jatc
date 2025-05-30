"use client";
import { Card } from "antd";
import { useTranslation } from "react-i18next";

const { Meta } = Card;

const TeacherCard = () => {
  const { t } = useTranslation();

  const teachers = [
    {
      id: 2,
      name: t("teacher.names.golam", "Md Golam Kibria Bhuiyan"),
      role: t("teacher.roles.managingDirector", "Managing Director"),
      image: "/images/golam-kibria.png",
    },
    {
      id: 3,
      name: t("teacher.names.baharul", "Md Baharul Alam Bonny"),
      role: t("teacher.roles.directorAdmin", "Director of Administration"),
      image: "/images/baharul.png",
    },
    {
      id: 4,
      name: t("teacher.names.salahuddin", "Md Salahuddin"),
      role: t("teacher.roles.directorAdmin", "Director of Administration"),
      image: "/images/salahuddin.png",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teachers.map((teacher) => (
          <Card
            key={teacher.id}
            hoverable
            className="w-full shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="flex flex-col items-center text-center p-6">
              <img
                alt={teacher.name}
                className="h-48 w-48 object-cover rounded-full border-4 border-gray-50 shadow-md mb-4"
                src={teacher.image}
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {teacher.name}
              </h3>
              <p className="text-gray-600">{teacher.role}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeacherCard;
