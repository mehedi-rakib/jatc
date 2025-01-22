"use client";

import React, { useState } from "react";
import {
  Form,
  Input,
  Select,
  DatePicker,
  Radio,
  Upload,
  Button,
  message,
  Typography,
  Space,
  Divider,
} from "antd";
import {
  UploadOutlined,
  UserOutlined,
  HomeOutlined,
  IdcardOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
const { Option } = Select;
const { TextArea } = Input;

export default function StudentRegistrationForm() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    console.log("Form values:", values);
    // Here you would typically send the form data to your backend
    setTimeout(() => {
      message.success("Registration submitted successfully!");
      form.resetFields();
      setLoading(false);
    }, 1500);
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <Title level={2} className="text-center mb-8 text-indigo-700">
        Student Registration Form
      </Title>
      <Form
        form={form}
        name="studentRegistration"
        onFinish={onFinish}
        layout="vertical"
        requiredMark={true}>
        <Space direction="vertical" size="large" className="w-full">
          {/* Personal Information */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500">
            <Title level={4} className="mb-4 text-indigo-600">
              Personal Information
            </Title>
            <Space direction="vertical" size="middle" className="w-full">
              <Space direction="horizontal" size="small" className="w-full">
                <Form.Item
                  name="firstName"
                  label="First Name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!",
                    },
                  ]}
                  className="w-full">
                  <Input prefix={<UserOutlined />} />
                </Form.Item>
                <Form.Item
                  name="lastName"
                  label="Last Name"
                  rules={[
                    { required: true, message: "Please input your last name!" },
                  ]}
                  className="w-full">
                  <Input prefix={<UserOutlined />} />
                </Form.Item>
              </Space>
              <Space direction="horizontal" size="small" className="w-full">
                <Form.Item
                  name="fatherName"
                  label="Father's Name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your father's name!",
                    },
                  ]}
                  className="w-full">
                  <Input prefix={<UserOutlined />} />
                </Form.Item>
                <Form.Item
                  name="motherName"
                  label="Mother's Name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your mother's name!",
                    },
                  ]}
                  className="w-full">
                  <Input prefix={<UserOutlined />} />
                </Form.Item>
              </Space>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}>
                <Input />
              </Form.Item>
              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}>
                <Input />
              </Form.Item>
              <Form.Item
                name="dateOfBirth"
                label="Date of Birth"
                rules={[
                  {
                    required: true,
                    message: "Please select your date of birth!",
                  },
                ]}>
                <DatePicker className="w-full" />
              </Form.Item>
              <Form.Item
                name="gender"
                label="Gender"
                rules={[
                  { required: true, message: "Please select your gender!" },
                ]}>
                <Radio.Group>
                  <Radio value="male">Male</Radio>
                  <Radio value="female">Female</Radio>
                  <Radio value="other">Other</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                name="bloodGroup"
                label="Blood Group"
                rules={[
                  {
                    required: true,
                    message: "Please select your blood group!",
                  },
                ]}>
                <Select placeholder="Select blood group">
                  <Option value="A+">A+</Option>
                  <Option value="A-">A-</Option>
                  <Option value="B+">B+</Option>
                  <Option value="B-">B-</Option>
                  <Option value="AB+">AB+</Option>
                  <Option value="AB-">AB-</Option>
                  <Option value="O+">O+</Option>
                  <Option value="O-">O-</Option>
                </Select>
              </Form.Item>
            </Space>
          </div>

          {/* Address Information */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <Title level={4} className="mb-4 text-green-600">
              Address Information
            </Title>
            <Space direction="vertical" size="middle" className="w-full">
              <Form.Item
                name="currentAddress"
                label="Current Address"
                rules={[
                  {
                    required: true,
                    message: "Please input your current address!",
                  },
                ]}>
                <TextArea rows={3} prefix={<HomeOutlined />} />
              </Form.Item>
              <Form.Item
                name="permanentAddress"
                label="Permanent Address"
                rules={[
                  {
                    required: true,
                    message: "Please input your permanent address!",
                  },
                ]}>
                <TextArea rows={3} prefix={<HomeOutlined />} />
              </Form.Item>
            </Space>
          </div>

          {/* Identification Information */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
            <Title level={4} className="mb-4 text-yellow-600">
              Identification Information
            </Title>
            <Space direction="vertical" size="middle" className="w-full">
              <Form.Item
                name="nid"
                label="National ID Number"
                rules={[
                  {
                    required: true,
                    message: "Please input your National ID number!",
                  },
                ]}>
                <Input prefix={<IdcardOutlined />} />
              </Form.Item>
              <Form.Item
                name="passportNumber"
                label="Passport Number (if available)">
                <Input prefix={<GlobalOutlined />} />
              </Form.Item>
            </Space>
          </div>

          {/* Language Course Information */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <Title level={4} className="mb-4 text-blue-600">
              Language Course Information
            </Title>
            <Space direction="vertical" size="middle" className="w-full">
              <Form.Item
                name="courseLanguage"
                label="Language Course"
                rules={[
                  {
                    required: true,
                    message: "Please select a language course!",
                  },
                ]}>
                <Select placeholder="Select a language">
                  <Option value="english">English</Option>
                  <Option value="french">French</Option>
                  <Option value="german">German</Option>
                  <Option value="spanish">Spanish</Option>
                  <Option value="mandarin">Mandarin</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="proficiencyLevel"
                label="Current Proficiency Level"
                rules={[
                  {
                    required: true,
                    message: "Please select your current proficiency level!",
                  },
                ]}>
                <Select placeholder="Select your level">
                  <Option value="beginner">Beginner</Option>
                  <Option value="elementary">Elementary</Option>
                  <Option value="intermediate">Intermediate</Option>
                  <Option value="upperIntermediate">Upper Intermediate</Option>
                  <Option value="advanced">Advanced</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="courseType"
                label="Course Type"
                rules={[
                  { required: true, message: "Please select a course type!" },
                ]}>
                <Radio.Group>
                  <Radio value="intensive">Intensive</Radio>
                  <Radio value="regular">Regular</Radio>
                  <Radio value="weekend">Weekend</Radio>
                  <Radio value="online">Online</Radio>
                </Radio.Group>
              </Form.Item>
            </Space>
          </div>

          {/* Additional Information */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
            <Title level={4} className="mb-4 text-purple-600">
              Additional Information
            </Title>
            <Space direction="vertical" size="middle" className="w-full">
              <Form.Item
                name="previousExperience"
                label="Previous Language Learning Experience">
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item name="learningGoals" label="Learning Goals">
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item
                name="profilePicture"
                label="Profile Picture"
                valuePropName="fileList"
                getValueFromEvent={normFile}>
                <Upload name="profilePicture" listType="picture" maxCount={1}>
                  <Button icon={<UploadOutlined />}>Click to upload</Button>
                </Upload>
              </Form.Item>
            </Space>
          </div>

          {/* Submit Button */}
          <Form.Item>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              // loading={loading}
              shape="Rounded"
              className="w-full md:ml-52 md:w-1/3 py-3 px-2 mx-auto bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 border-0">
              Submit Registration
            </Button>
          </Form.Item>
        </Space>
      </Form>
    </section>
  );
}
