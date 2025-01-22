'use client';
import Image from "next/image";
import { Card, Typography, Row, Col } from "antd";

const { Title, Paragraph } = Typography;

export const Instructor = () => {
  return (
    <div className="p-4 max-w-5xl mx-auto">
      {/* Header Section */}
      <Title level={2} className="text-3xl md:text-4xl font-bold text-center mb-6">
        Meet Our Instructor
      </Title>

      {/* Instructor Info Section */}
      <Card
        className="shadow-lg rounded-lg overflow-hidden mb-8"
        cover={
          <Image
            src="/images/Instructor.jpg"
            alt="Instructor"
            width={500}
            height={500}
            className="mx-auto object-cover"
          />
        }
      >
        <Title level={3} className="text-center">
          John Doe
        </Title>
        <Paragraph className="text-center text-gray-600 italic mb-4">
          "Empowering minds through knowledge and mentorship."
        </Paragraph>
        <Paragraph className="text-justify text-gray-700">
          With over <span className="font-semibold text-blue-600">10 years of experience</span> in the field of education, John Doe specializes in delivering engaging, insightful, and impactful learning experiences. His expertise lies in simplifying complex concepts, making learning accessible for everyone.
        </Paragraph>
      </Card>

      {/* Mission and Vision Section */}
      <Row gutter={[24, 24]} className="mb-8">
        <Col xs={24} md={12}>
          <Card className="shadow-md">
            <Title level={4} className="text-blue-600">
              Our Mission
            </Title>
            <Paragraph>
              To provide <span className="font-semibold">high-quality education</span> and inspire learners to reach their fullest potential. We aim to create a supportive environment where students can thrive and achieve their goals.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card className="shadow-md">
            <Title level={4} className="text-blue-600">
              Our Vision
            </Title>
            <Paragraph>
              Building a community of lifelong learners driven by <span className="font-semibold">curiosity</span> and empowered by knowledge to make a meaningful impact on the world.
            </Paragraph>
          </Card>
        </Col>
      </Row>

      {/* Highlights Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <Title level={4} className="text-center text-blue-600 mb-4">
          Key Highlights
        </Title>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            <span className="font-semibold">10+ Years of Teaching Experience</span> across various subjects.
          </li>
          <li>
            Mentored over <span className="font-semibold text-blue-600">5,000 students</span> worldwide.
          </li>
          <li>
            Expert in simplifying complex topics for better understanding.
          </li>
          <li>
            Focused on fostering <span className="font-semibold">critical thinking</span> and problem-solving skills.
          </li>
        </ul>
      </div>

      {/* Closing Section */}
      <Card className="shadow-md">
        <Title level={4} className="text-center">
          Ready to Learn?
        </Title>
        <Paragraph className="text-center">
          Join our learning journey and unlock your potential with the guidance of experienced mentors like John Doe. 
          <span className="font-semibold text-blue-600"> Let’s build a brighter future together!</span>
        </Paragraph>
      </Card>
    </div>
  );
};

