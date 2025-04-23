"use client";
import { Card } from "antd";
import { useTranslation } from "react-i18next";

const { Meta } = Card;

const TeacherCard = () => {
  const { t } = useTranslation();
  
  const teachers = [
    // {
    //   id: 1,
    //   name: t('teacher.names.abul', 'Md Abul Khair Bhuiyan'),
    //   role: t('teacher.roles.chairman', 'Chairman'),
    //   image: "/images/chairman.png"
    // },
    {
      id: 2,
      name: t('teacher.names.golam', 'Md Golam Kibria Bhuiyan'),
      role: t('teacher.roles.managingDirector', 'Managing Director'),
      image: "/images/golam-kibria.png"
    },
    {
      id: 3,
      name: t('teacher.names.baharul', 'Md Baharul Alam Bonny'),
      role: t('teacher.roles.directorAdmin', 'Director of Administration'),
      image: "/images/baharul.png"
    },
    {
      id: 4,
      name: t('teacher.names.salahuddin', 'Md Salahuddin'),
      role: t('teacher.roles.directorAdmin', 'Director of Administration'),
      image: "/images/salahuddin.png"
    }
  ];

  return (
    <div className="md:flex justify-center items-center gap-8">
      {teachers.map(teacher => (
        <Card
          key={teacher.id}
          hoverable
          className="my-10 w-full "
          cover={<img alt={teacher.name} className="h-48 w-auto object-scale-down" src={teacher.image} />}>
          <Meta title={teacher.name} description={teacher.role} />
        </Card>
      ))}
    </div>
  );
};

export default TeacherCard;
