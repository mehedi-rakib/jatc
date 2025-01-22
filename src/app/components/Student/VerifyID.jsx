"use client";

import { useState } from "react";
import { Form, Input, Button, message, Card, Typography, Modal } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

// Dummy data for student verification
const studentDatabase = {
  LTC001: {
    name: "John Doe",
    enrollmentDate: "2023-01-15",
    course: "English Proficiency",
    status: "Active",
  },
  LTC002: {
    name: "Jane Smith",
    enrollmentDate: "2023-02-01",
    course: "French Proficiency",
    status: "Active",
  },
  LTC003: {
    name: "Mike Johnson",
    enrollmentDate: "2022-09-10",
    course: "German Proficiency",
    status: "Graduated",
  },
};

export default function StudentIDVerification() {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [studentInfo, setStudentInfo] = useState(null);

  const onFinish = (values) => {
    const { studentId } = values;
    if (studentDatabase[studentId]) {
      setStudentInfo(studentDatabase[studentId]);
      setIsModalVisible(true);
    } else {
      message.error("Student ID not found. Please check and try again.");
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  return (
    <section className="py-16 px-4 max-w-md mx-auto pb-10 md:pb-48">
      <Card className="shadow-md">
        <Title level={2} className="text-center mb-8">
          Student ID Verification
        </Title>

        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item
            name="studentId"
            label="Student ID"
            rules={[
              { required: true, message: "Please input your Student ID!" },
              {
                pattern: /^LTC\d{3}$/,
                message:
                  "Student ID should be in the format LTC followed by 3 digits",
              },
            ]}>
            <Input placeholder="Enter your Student ID (e.g., LTC001)" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Verify ID
            </Button>
          </Form.Item>
        </Form>

        <Modal
          title="Student Verification Result"
          visible={isModalVisible}
          onOk={closeModal}
          onCancel={closeModal}
          footer={[
            <Button key="close" onClick={closeModal}>
              Close
            </Button>,
          ]}>
          {studentInfo && (
            <div>
              <div className="flex items-center mb-4">
                <CheckCircleOutlined className="text-green-500 text-2xl mr-2" />
                <Text strong className="text-lg">
                  ID Verified Successfully
                </Text>
              </div>
              <ul className="list-none p-0">
                <li className="mb-2">
                  <Text strong>Name:</Text> {studentInfo.name}
                </li>
                <li className="mb-2">
                  <Text strong>Enrollment Date:</Text>{" "}
                  {studentInfo.enrollmentDate}
                </li>
                <li className="mb-2">
                  <Text strong>Course:</Text> {studentInfo.course}
                </li>
                <li className="mb-2">
                  <Text strong>Status:</Text> {studentInfo.status}
                </li>
              </ul>
            </div>
          )}
        </Modal>
      </Card>
    </section>
  );
}
