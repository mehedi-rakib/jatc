"use client";
import { Card, Typography, Row, Col } from "antd";

const { Title, Paragraph } = Typography;

const Coordinator = () => {
  return (
    <div className="p-4 max-w-5xl mx-auto">
      {/* Header Section */}
      <Title
        level={2}
        className="text-3xl md:text-4xl font-bold text-center mb-6">
        Meet Our Coordinator
      </Title>

      {/* Coordinator Info Section */}
      <Card
        className="shadow-lg rounded-lg overflow-hidden mb-8"
        cover={
          <img
            src="/images/Instructor.jpg"
            alt="Coordinator"
            width={500}
            height={500}
            className="mx-auto object-cover"
          />
        }>
        <Title level={3} className="text-center">
          Golam Kibriabhuiyan
        </Title>
        <Paragraph className="text-center text-gray-600 italic mb-4">
          "Ensuring smooth operations for seamless learning experiences."
        </Paragraph>
        <Paragraph className="text-justify text-gray-700">
          Jane Smith brings{" "}
          <span className="font-semibold text-blue-600">
            8+ years of experience
          </span>{" "}
          in coordination and management. Her role ensures that all educational
          activities are organized efficiently, enabling learners to focus on
          what matters most—gaining knowledge and skills. Jane’s expertise lies
          in streamlining processes and maintaining a supportive environment.
        </Paragraph>
      </Card>

      {/* Responsibilities and Achievements Section */}
      <Row gutter={[24, 24]} className="mb-8">
        <Col xs={24} md={12}>
          <Card className="shadow-md">
            <Title level={4} className="text-blue-600">
              Responsibilities
            </Title>
            <Paragraph>
              - Overseeing the{" "}
              <span className="font-semibold">daily operations</span> of
              educational programs. <br />- Coordinating with instructors and
              students to ensure{" "}
              <span className="font-semibold">seamless communication.</span>{" "}
              <br />- Managing schedules, resources, and program logistics.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card className="shadow-md">
            <Title level={4} className="text-blue-600">
              Key Achievements
            </Title>
            <Paragraph>
              - Successfully managed{" "}
              <span className="font-semibold">over 50 events</span> with 100%
              positive feedback. <br />- Implemented efficient systems that
              reduced administrative workload by{" "}
              <span className="font-semibold">30%.</span> <br />- Recognized for
              fostering{" "}
              <span className="font-semibold text-blue-600">
                strong collaboration
              </span>{" "}
              within the team.
            </Paragraph>
          </Card>
        </Col>
      </Row>

      {/* Highlights Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <Title level={4} className="text-center text-blue-600 mb-4">
          Highlights
        </Title>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            <span className="font-semibold">Expert in Program Management</span>{" "}
            and operational efficiency.
          </li>
          <li>
            Strong focus on building a{" "}
            <span className="font-semibold text-blue-600">
              positive learning environment.
            </span>
          </li>
          <li>Skilled in leveraging technology for smooth coordination.</li>
          <li>Known for being approachable, proactive, and detail-oriented.</li>
        </ul>
      </div>

      {/* Closing Section */}
      <Card className="shadow-md">
        <Title level={4} className="text-center">
          Let’s Work Together
        </Title>
        <Paragraph className="text-center">
          Jane Smith is here to ensure your learning journey is hassle-free and
          rewarding.
          <span className="font-semibold text-blue-600">
            {" "}
            Join us and experience the difference.
          </span>
        </Paragraph>
      </Card>
    </div>
  );
};

export default Coordinator;
