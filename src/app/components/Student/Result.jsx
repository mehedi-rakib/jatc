"use client";

import React, { useState } from "react";
import { Input, Button, Card, Typography, message, Descriptions } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

// Dummy data for language proficiency results
const studentResults = {
  LTC001: {
    name: "John Doe",
    fatherName: "Robert Doe",
    course: "English Proficiency",
    passingYear: 2023,
    results: {
      listening: "Advanced",
      speaking: "Advanced",
      reading: "Upper Intermediate",
      writing: "Upper Intermediate",
    },
    overallScore: "B2",
  },
  LTC002: {
    name: "Jane Smith",
    fatherName: "William Smith",
    course: "French Proficiency",
    passingYear: 2023,
    results: {
      listening: "Intermediate",
      speaking: "Upper Intermediate",
      reading: "Intermediate",
      writing: "Intermediate",
    },
    overallScore: "B1",
  },
};

export default function Result() {
  const [studentId, setStudentId] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    if (studentResults[studentId]) {
      setResult(studentResults[studentId]);
    } else {
      message.error("No results found for the given Student ID");
      setResult(null);
    }
  };

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <Title level={2} className="text-center mb-8">
        Language Proficiency Result Portal
      </Title>

      <div className="mb-8 flex justify-center">
        <Input
          placeholder="Enter Student ID (LTC001, LTC002)"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          style={{ width: 200 }}
          className="mr-2"
        />
        <Button type="primary" icon={<SearchOutlined />} onClick={handleSearch}>
          Search
        </Button>
      </div>

      {result && (
        <Card className="shadow-md">
          <Title level={3} className="mb-4">
            Result for {result.name}
          </Title>

          <Descriptions bordered column={{ xs: 1, sm: 2 }}>
            <Descriptions.Item label="Father's Name">
              {result.fatherName}
            </Descriptions.Item>
            <Descriptions.Item label="Course">
              {result.course}
            </Descriptions.Item>
            <Descriptions.Item label="Passing Year">
              {result.passingYear}
            </Descriptions.Item>
            <Descriptions.Item label="Overall Score">
              {result.overallScore}
            </Descriptions.Item>
          </Descriptions>

          <Title level={4} className="mt-6 mb-4">
            Skill-wise Proficiency
          </Title>
          <Descriptions bordered column={{ xs: 1, sm: 2 }}>
            <Descriptions.Item label="Listening">
              {result.results.listening}
            </Descriptions.Item>
            <Descriptions.Item label="Speaking">
              {result.results.speaking}
            </Descriptions.Item>
            <Descriptions.Item label="Reading">
              {result.results.reading}
            </Descriptions.Item>
            <Descriptions.Item label="Writing">
              {result.results.writing}
            </Descriptions.Item>
          </Descriptions>

          <Text className="block mt-6 text-center text-gray-500">
            This certificate is awarded to certify the language proficiency
            level achieved by the student.
          </Text>
        </Card>
      )}
    </section>
  );
}
