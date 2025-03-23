"use client";

import React, { useState } from "react";
import {
  Form,
  Input,
  Select,
  DatePicker,
  Radio,
  Button,
  message,
  Typography,
  Space,
  InputNumber,
  Divider,
} from "antd";
import {
  UserOutlined,
  CalendarOutlined,
  IdcardOutlined,
  HomeOutlined,
  PhoneOutlined,
  MailOutlined,
  TeamOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;

export default function StudentRegistrationForm() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [maritalStatus, setMaritalStatus] = useState(null);

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

  return (
    <section className="py-8 md:py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <Title  className="text-xl md:text-4xl font-bold text-red-600 mb-4">
          JAPAN AMBITION REGISTRATION FORM
        </Title>
        <Text className="block mb-2 text-sm md:text-base font-semibold">
          (Fill in all information in CAPITAL ENGLISH LETTERS)
        </Text>
        <Text className="block text-sm md:text-base font-semibold">
          Please fill out this form carefully and accurately, taking your time.
        </Text>
      </div>
      
      <Form
        form={form}
        name="studentRegistration"
        onFinish={onFinish}
        layout="vertical"
        requiredMark={true}
        className="space-y-8">
        
        {/* Personal Information */}
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg border-t-4 border-red-500">
          <Title level={4} className="mb-6 text-green-600 flex items-center">
            <UserOutlined className="mr-2" /> PERSONAL INFORMATION
          </Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <Form.Item
              name="name"
              label="NAME"
              rules={[{ required: true, message: "Please input your name!" }]}
              className="col-span-full">
              <Input prefix={<UserOutlined />} size="large" />
            </Form.Item>
            
            <Form.Item
              name="dateOfBirth"
              label="DATE OF BIRTH"
              rules={[{ required: true, message: "Please select your date of birth!" }]}>
              <DatePicker 
                className="w-full" 
                format="MM/DD/YYYY" 
                size="large"
                prefix={<CalendarOutlined />} />
            </Form.Item>
            
            <Form.Item
              name="age"
              label="AGE"
              rules={[{ required: true, message: "Please input your age!" }]}>
              <InputNumber className="w-full" min={18} max={65} size="large" />
            </Form.Item>
            
            <Form.Item
              name="gender"
              label="GENDER"
              rules={[{ required: true, message: "Please select your gender!" }]}>
              <Radio.Group size="large">
                <Radio value="MALE">MALE</Radio>
                <Radio value="FEMALE">FEMALE</Radio>
              </Radio.Group>
            </Form.Item>
            
            <Form.Item
              name="nidCardNumber"
              label="NID CARD NUMBER (IF ANY)">
              <Input prefix={<IdcardOutlined />} size="large" />
            </Form.Item>
            
            <Form.Item
              name="bloodGroup"
              label="BLOOD GROUP"
              rules={[{ required: true, message: "Please select your blood group!" }]}>
              <Select placeholder="Select blood group" size="large">
                <Option value="A+">A+</Option>
                <Option value="B+">B+</Option>
                <Option value="AB+">AB+</Option>
                <Option value="O+">O+</Option>
                <Option value="A-">A-</Option>
                <Option value="B-">B-</Option>
                <Option value="AB-">AB-</Option>
                <Option value="O-">O-</Option>
                <Option value="UNKNOWN">UNKNOWN</Option>
              </Select>
            </Form.Item>
            
            <Form.Item
              name="religion"
              label="RELIGION"
              rules={[{ required: true, message: "Please select your religion!" }]}>
              <Select placeholder="Select religion" size="large">
                <Option value="ISLAM">ISLAM</Option>
                <Option value="HINDU">HINDU</Option>
                <Option value="CHRISTIAN">CHRISTIAN</Option>
                <Option value="BUDDHIST">BUDDHIST</Option>
                <Option value="OTHER">OTHER</Option>
              </Select>
            </Form.Item>
            
            <Form.Item
              name="hobby"
              label="HOBBY"
              className="col-span-full">
              <Input size="large" />
            </Form.Item>
          </div>
        </div>
        
        {/* Education Information */}
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg border-t-4 border-green-500">
          <Title level={4} className="mb-6 text-red-600 flex items-center">
            <TeamOutlined className="mr-2" /> EDUCATION INFORMATION
          </Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <Form.Item
              name="lastEducation"
              label="LAST EDUCATION"
              rules={[{ required: true, message: "Please select your last education!" }]}
              className="col-span-full">
              <Select placeholder="Select last education" size="large">
                <Option value="SSC">SSC</Option>
                <Option value="HSC">HSC</Option>
                <Option value="DIPLOMA">DIPLOMA</Option>
                <Option value="DEGREE (3 YEARS)">DEGREE (3 YEARS)</Option>
                <Option value="HON'S (4 YEARS)">HON'S (4 YEARS)</Option>
                <Option value="MASTERS">MASTERS</Option>
                <Option value="DAKHIL">DAKHIL</Option>
                <Option value="ALIM">ALIM</Option>
                <Option value="FAJEL">FAJEL</Option>
                <Option value="KAMIL">KAMIL</Option>
                <Option value="OTHER">OTHER</Option>
              </Select>
            </Form.Item>
            
            <Form.Item
              name="lastEducationMajor"
              label="LAST EDUCATION MAJOR"
              className="col-span-full">
              <Input size="large" />
            </Form.Item>
            
            <Form.Item
              name="address"
              label="ADDRESS"
              rules={[{ required: true, message: "Please input your address!" }]}
              className="col-span-full">
              <TextArea rows={3} prefix={<HomeOutlined />} size="large" />
            </Form.Item>
            
            <Form.Item
              name="mobileNumber1"
              label="MOBILE NUMBER - 1"
              rules={[{ required: true, message: "Please input your mobile number!" }]}>
              <Input prefix={<PhoneOutlined />} size="large" />
            </Form.Item>
            
            <Form.Item
              name="whatsappMobileNumber"
              label="WHATSAPP MOBILE NUMBER - 2">
              <Input prefix={<PhoneOutlined />} size="large" />
            </Form.Item>
            
            <Form.Item
              name="email"
              label="EMAIL ADDRESS"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please enter a valid email!" }
              ]}>
              <Input prefix={<MailOutlined />} size="large" />
            </Form.Item>
            
            <Form.Item
              name="bodyHeight"
              label="BODY HEIGHT">
              <Input size="large" placeholder="e.g., 5'8 or 173 cm" />
            </Form.Item>
            
            <Form.Item
              name="bodyWeight"
              label="BODY WEIGHT (KG)">
              <InputNumber min={30} className="w-full" size="large" />
            </Form.Item>
            
            <Form.Item
              name="maritalStatus"
              label="MARITAL STATUS"
              rules={[{ required: true, message: "Please select your marital status!" }]}>
              <Radio.Group onChange={e => setMaritalStatus(e.target.value)} size="large">
                <Radio value="MARRIED">MARRIED</Radio>
                <Radio value="UNMARRIED">UNMARRIED</Radio>
              </Radio.Group>
            </Form.Item>
            
            {maritalStatus === "MARRIED" && (
              <Form.Item
                name="hasChild"
                label="CHILD (if married)">
                <Radio.Group size="large">
                  <Radio value="YES">YES</Radio>
                  <Radio value="NO">NO</Radio>
                </Radio.Group>
              </Form.Item>
            )}
          </div>
        </div>
        
        {/* Academic Records */}
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg border-t-4 border-red-500">
          <Title level={4} className="mb-6 text-green-600 flex items-center">
            <TeamOutlined className="mr-2" /> ACADEMIC RECORDS
          </Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <Divider orientation="left">SSC / Equivalent</Divider>
            
            <Form.Item
              name="sscPassingYear"
              label="S.S.C PASSING YEAR"
              className="col-span-full md:col-span-1">
              <Input size="large" />
            </Form.Item>
            
            <Form.Item
              name="sscMajor"
              label="SSC MAJOR"
              className="col-span-full md:col-span-1">
              <Input size="large" />
            </Form.Item>
            
            <Form.Item
              name="sscPassingResult"
              label="S.S.C PASSING RESULT"
              className="col-span-full">
              <Input size="large" placeholder="e.g., GPA 5.00 or 85%" />
            </Form.Item>
            
            <Divider orientation="left">HSC / Equivalent</Divider>
            
            <Form.Item
              name="hscPassingYear"
              label="H.S.C PASSING YEAR"
              className="col-span-full md:col-span-1">
              <Input size="large" />
            </Form.Item>
            
            <Form.Item
              name="hscMajor"
              label="H.S.C MAJOR"
              className="col-span-full md:col-span-1">
              <Input size="large" />
            </Form.Item>
            
            <Form.Item
              name="hscPassingResult"
              label="H.S.C PASSING RESULT"
              className="col-span-full">
              <Input size="large" placeholder="e.g., GPA 4.50 or 75%" />
            </Form.Item>
            
            <Divider orientation="left">Honours / Degree (If Any)</Divider>
            
            <Form.Item
              name="honoursPassingYear"
              label="HONOURS / DEGREE PASSING YEAR (IF ANY)"
              className="col-span-full md:col-span-1">
              <Input size="large" />
            </Form.Item>
            
            <Form.Item
              name="honoursMajor"
              label="HONOURS / DEGREE MAJOR"
              className="col-span-full md:col-span-1">
              <Input size="large" />
            </Form.Item>
            
            <Form.Item
              name="honoursPassingResult"
              label="HONOURS / DEGREE PASSING RESULT (IF ANY)"
              className="col-span-full">
              <Input size="large" placeholder="e.g., CGPA 3.75 or First Class" />
            </Form.Item>
          </div>
        </div>
        
        {/* Japan-related Information */}
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg border-t-4 border-green-500">
          <Title level={4} className="mb-6 text-red-600 flex items-center">
            <GlobalOutlined className="mr-2" /> JAPAN-RELATED INFORMATION
          </Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <Form.Item
              name="purposeOfGoingToJapan"
              label="PURPOSE OF GOING TO JAPAN?"
              rules={[{ required: true, message: "Please select your purpose!" }]}
              className="col-span-full">
              <Select placeholder="Select purpose" size="large">
                <Option value="STUDY">STUDY</Option>
                <Option value="TITP">TITP (TECHNICAL INTERN TRAINING PROGRAM)</Option>
                <Option value="SSW">SSW (SPECIFIED SKILLED WORKER)</Option>
                <Option value="INTERNATIONAL_JOB">INTERNATIONAL JOB</Option>
                <Option value="NO_SKILL">NO SKILL</Option>
              </Select>
            </Form.Item>
            
            <Form.Item
              name="japaneseLanguagePassedLevel"
              label="JAPANESE LANGUAGE PASSED LEVEL"
              className="col-span-full">
              <Select placeholder="Select level" size="large">
                <Option value="NO_LEVEL">NO LEVEL</Option>
                <Option value="JLPT_N5">JLPT N5</Option>
                <Option value="JLPT_N4">JLPT N4</Option>
                <Option value="JLPT_N3">JLPT N3</Option>
                <Option value="NAT_N5">NAT N5</Option>
                <Option value="NAT_N4">NAT N4</Option>
                <Option value="NAT_N3">NAT N3</Option>
                <Option value="JFT_A2">JFT A2</Option>
                <Option value="J_TEST_N5">J TEST N5</Option>
                <Option value="J_TEST_N4">J TEST N4</Option>
                <Option value="J_TEST_N3">J TEST N3</Option>
                <Option value="JPT_N5">JPT N5</Option>
              </Select>
            </Form.Item>
            
            <Form.Item
              name="sswSkillTestPassed"
              label="DO YOU HAVE ANY SKILL TEST PASS FOR SSW"
              className="col-span-full">
              <Select placeholder="Select skill test" size="large">
                <Option value="CARE_GIVER">CARE GIVER</Option>
                <Option value="AGRICULTURE_CROP">AGRICULTURE (CROP FARMING)</Option>
                <Option value="AGRICULTURE_LIVESTOCK">AGRICULTURE (LIVESTOCK FARMING)</Option>
                <Option value="CONSTRUCTION_CIVIL">CONSTRUCTION (CIVIL ENGINEERING)</Option>
                <Option value="CONSTRUCTION_BUILDING">CONSTRUCTION (BUILDING MAKING)</Option>
                <Option value="CONSTRUCTION_LIFE_LINE">CONSTRUCTION (LIFE LINE)</Option>
                <Option value="DRIVING">DRIVING</Option>
                <Option value="SHIP_BUILDING">SHIP BUILDING</Option>
                <Option value="BUILDING_CLEANING">BUILDING CLEANING</Option>
                <Option value="AUTOMOBILE">AUTOMOBILE</Option>
                <Option value="OTHERS">OTHERS</Option>
                <Option value="NO_LEVEL_PASSED">NO LEVEL PASSED</Option>
              </Select>
            </Form.Item>
            
            <Form.Item
              name="hasDrivingLicense"
              label="DO YOU HAVE DRIVING LICENCE?"
              className="col-span-full md:col-span-1">
              <Radio.Group size="large">
                <Radio value="YES">YES</Radio>
                <Radio value="NO">NO</Radio>
              </Radio.Group>
            </Form.Item>
          </div>
        </div>
        
        {/* Family Information */}
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg border-t-4 border-red-500">
          <Title level={4} className="mb-6 text-green-600 flex items-center">
            <TeamOutlined className="mr-2" /> FAMILY INFORMATION
          </Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <Form.Item
              name="fathersName"
              label="FATHER'S NAME">
              <Input size="large" />
            </Form.Item>
            
            <Form.Item
              name="fathersMobileNumber"
              label="FATHER'S MOBILE NUMBER">
              <Input size="large" />
            </Form.Item>
            
            <Form.Item
              name="fathersOccupation"
              label="FATHER'S OCCUPATION / PROFESSION">
              <Input size="large" />
            </Form.Item>
            
            <Form.Item
              name="mothersName"
              label="MOTHER'S NAME">
              <Input size="large" />
            </Form.Item>
            
            <Form.Item
              name="mothersMobileNumber"
              label="MOTHER'S MOBILE NUMBER">
              <Input size="large" />
            </Form.Item>
            
            <Form.Item
              name="mothersOccupation"
              label="MOTHER'S OCCUPATION / PROFESSION">
              <Input size="large" />
            </Form.Item>
            
            <Form.Item
              name="referralSource"
              label="FROM WHAT MEDIUM DID YOU LEARN ABOUT US"
              className="col-span-full">
              <Input size="large" />
            </Form.Item>
          </div>
        </div>

        {/* Submit Button */}
        <Form.Item>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            loading={loading}
            className="w-full py-6 text-lg font-bold mt-6 bg-gradient-to-r from-red-500 to-green-600 hover:from-red-600 hover:to-green-700 border-0 shadow-xl">
            SUBMIT REGISTRATION
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
}
