"use client";

import { useState } from "react";
import {
  Form,
  Input,
  Select,
  DatePicker,
  Radio,
  Upload,
  Button,
  Steps,
  App,
} from "antd";
import {
  UploadOutlined,
  UserOutlined,
  IdcardOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { AnimatePresence, motion } from "framer-motion";
import { FaCheckCircle, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import PageHero from "../ui/PageHero";

const { TextArea } = Input;

const steps = [
  { title: "Personal", description: "About you" },
  { title: "Address", description: "Where you live" },
  { title: "Identification", description: "NID / passport" },
  { title: "Course", description: "What you'll study" },
];

/** Fields validated before each step is allowed to advance. */
const stepFields = [
  [
    "firstName",
    "lastName",
    "fatherName",
    "motherName",
    "email",
    "phone",
    "dateOfBirth",
    "gender",
    "bloodGroup",
  ],
  ["currentAddress", "permanentAddress"],
  ["nid", "passportNumber"],
  ["courseLanguage", "proficiencyLevel", "courseType"],
];

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const stepVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
};

export default function StudentRegistrationForm() {
  const [form] = Form.useForm();
  const { message } = App.useApp();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const normFile = (e) => (Array.isArray(e) ? e : e?.fileList);

  const next = async () => {
    try {
      await form.validateFields(stepFields[current]);
      setDirection(1);
      setCurrent((c) => c + 1);
      window.scrollTo({ top: 180, behavior: "smooth" });
    } catch {
      message.warning("Please complete the highlighted fields first.");
    }
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => c - 1);
    window.scrollTo({ top: 180, behavior: "smooth" });
  };

  const onFinish = async (values) => {
    setLoading(true);
    // No admissions backend yet — this is where the POST will go.
    console.log("Registration values:", values);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
    message.success("Registration submitted successfully!");
    form.resetFields();
  };

  if (submitted) {
    return (
      <>
        <PageHero
          eyebrow="Admission"
          title="Application Received"
          breadcrumbs={[{ label: "Students" }, { label: "Apply" }]}
        />
        <section className="section mx-auto max-w-lg px-6 text-center">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-emerald-50">
            <FaCheckCircle className="h-10 w-10 text-emerald-500" />
          </motion.div>
          <h2 className="mt-6 text-2xl font-bold">Thank you for applying!</h2>
          <p className="mt-3 text-[color:var(--muted)]">
            Our program coordinator will contact you within one working day to
            confirm your seat and next steps.
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setCurrent(0);
            }}
            className="btn-outline mt-8">
            Submit another application
          </button>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Admission"
        title="Student Registration"
        description="Four short steps — takes about three minutes. Your progress is kept as you move between steps."
        breadcrumbs={[{ label: "Students" }, { label: "Apply" }]}
      />

      <section className="section mx-auto max-w-3xl px-6">
        {/* Progress */}
        <div className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-ink-100 md:p-8">
          <Steps
            current={current}
            items={steps}
            responsive
            size="small"
            className="!mb-2"
          />
        </div>

        <Form
          form={form}
          name="studentRegistration"
          onFinish={onFinish}
          layout="vertical"
          requiredMark={false}
          scrollToFirstError
          className="mt-6">
          <div className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-ink-100 md:p-8">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}>
                {/* ---------- Step 1: Personal ---------- */}
                <div className={current === 0 ? "block" : "hidden"}>
                  <h2 className="text-xl font-bold">Personal Information</h2>
                  <p className="mt-1.5 text-sm text-[color:var(--muted)]">
                    Enter your details exactly as they appear on your NID.
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-x-5 md:grid-cols-2">
                    <Form.Item
                      name="firstName"
                      label="First name"
                      rules={[{ required: true, message: "Please enter your first name" }]}>
                      <Input size="large" prefix={<UserOutlined />} />
                    </Form.Item>
                    <Form.Item
                      name="lastName"
                      label="Last name"
                      rules={[{ required: true, message: "Please enter your last name" }]}>
                      <Input size="large" prefix={<UserOutlined />} />
                    </Form.Item>
                    <Form.Item
                      name="fatherName"
                      label="Father's name"
                      rules={[{ required: true, message: "Please enter your father's name" }]}>
                      <Input size="large" prefix={<UserOutlined />} />
                    </Form.Item>
                    <Form.Item
                      name="motherName"
                      label="Mother's name"
                      rules={[{ required: true, message: "Please enter your mother's name" }]}>
                      <Input size="large" prefix={<UserOutlined />} />
                    </Form.Item>
                    <Form.Item
                      name="email"
                      label="Email address"
                      rules={[
                        { required: true, message: "Please enter your email" },
                        { type: "email", message: "That doesn't look like a valid email" },
                      ]}>
                      <Input size="large" placeholder="you@example.com" />
                    </Form.Item>
                    <Form.Item
                      name="phone"
                      label="Phone number"
                      rules={[
                        { required: true, message: "Please enter your phone number" },
                        {
                          pattern: /^[0-9+\-\s()]{7,}$/,
                          message: "Please enter a valid phone number",
                        },
                      ]}>
                      <Input size="large" placeholder="01XXXXXXXXX" />
                    </Form.Item>
                    <Form.Item
                      name="dateOfBirth"
                      label="Date of birth"
                      rules={[{ required: true, message: "Please select your date of birth" }]}>
                      <DatePicker
                        size="large"
                        className="w-full"
                        placeholder="Select date"
                        disabledDate={(d) => d && d.valueOf() > Date.now()}
                      />
                    </Form.Item>
                    <Form.Item
                      name="bloodGroup"
                      label="Blood group"
                      rules={[{ required: true, message: "Please select your blood group" }]}>
                      <Select
                        size="large"
                        placeholder="Select blood group"
                        options={bloodGroups.map((g) => ({ value: g, label: g }))}
                      />
                    </Form.Item>
                  </div>

                  <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[{ required: true, message: "Please select your gender" }]}>
                    <Radio.Group>
                      <Radio value="male">Male</Radio>
                      <Radio value="female">Female</Radio>
                      <Radio value="other">Other</Radio>
                    </Radio.Group>
                  </Form.Item>
                </div>

                {/* ---------- Step 2: Address ---------- */}
                <div className={current === 1 ? "block" : "hidden"}>
                  <h2 className="text-xl font-bold">Address Information</h2>
                  <p className="mt-1.5 text-sm text-[color:var(--muted)]">
                    Where can we reach you by post?
                  </p>

                  <div className="mt-6">
                    <Form.Item
                      name="currentAddress"
                      label="Current address"
                      rules={[{ required: true, message: "Please enter your current address" }]}>
                      <TextArea rows={3} placeholder="House, road, area, city" />
                    </Form.Item>
                    <Form.Item
                      name="permanentAddress"
                      label="Permanent address"
                      rules={[{ required: true, message: "Please enter your permanent address" }]}>
                      <TextArea rows={3} placeholder="House, road, area, district" />
                    </Form.Item>
                  </div>
                </div>

                {/* ---------- Step 3: Identification ---------- */}
                <div className={current === 2 ? "block" : "hidden"}>
                  <h2 className="text-xl font-bold">Identification</h2>
                  <p className="mt-1.5 text-sm text-[color:var(--muted)]">
                    A passport number is optional, but helpful if you plan to
                    travel to Japan.
                  </p>

                  <div className="mt-6">
                    <Form.Item
                      name="nid"
                      label="National ID number"
                      rules={[
                        { required: true, message: "Please enter your National ID number" },
                        {
                          pattern: /^\d{10,17}$/,
                          message: "NID numbers are 10–17 digits",
                        },
                      ]}>
                      <Input size="large" prefix={<IdcardOutlined />} />
                    </Form.Item>
                    <Form.Item
                      name="passportNumber"
                      label="Passport number (optional)">
                      <Input size="large" prefix={<GlobalOutlined />} />
                    </Form.Item>
                  </div>
                </div>

                {/* ---------- Step 4: Course ---------- */}
                <div className={current === 3 ? "block" : "hidden"}>
                  <h2 className="text-xl font-bold">Course Information</h2>
                  <p className="mt-1.5 text-sm text-[color:var(--muted)]">
                    Tell us what you want to study and where you&apos;re starting from.
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-x-5 md:grid-cols-2">
                    <Form.Item
                      name="courseLanguage"
                      label="Course"
                      rules={[{ required: true, message: "Please select a course" }]}>
                      <Select
                        size="large"
                        placeholder="Select a course"
                        options={[
                          { value: "long", label: "Long Intensive Course" },
                          { value: "short", label: "Short Intensive Course" },
                          { value: "private", label: "Private Course" },
                          { value: "jlpt", label: "JLPT Preparation" },
                        ]}
                      />
                    </Form.Item>
                    <Form.Item
                      name="proficiencyLevel"
                      label="Current level"
                      rules={[{ required: true, message: "Please select your current level" }]}>
                      <Select
                        size="large"
                        placeholder="Select your level"
                        options={[
                          { value: "beginner", label: "Complete beginner" },
                          { value: "n5", label: "JLPT N5" },
                          { value: "n4", label: "JLPT N4" },
                          { value: "n3", label: "JLPT N3" },
                          { value: "advanced", label: "N2 or above" },
                        ]}
                      />
                    </Form.Item>
                  </div>

                  <Form.Item
                    name="courseType"
                    label="Preferred shift"
                    rules={[{ required: true, message: "Please select a shift" }]}>
                    <Radio.Group>
                      <Radio value="morning">Morning</Radio>
                      <Radio value="day">Day</Radio>
                      <Radio value="evening">Evening</Radio>
                      <Radio value="weekend">Weekend</Radio>
                    </Radio.Group>
                  </Form.Item>

                  <Form.Item
                    name="previousExperience"
                    label="Previous language learning experience (optional)">
                    <TextArea rows={3} />
                  </Form.Item>

                  <Form.Item name="learningGoals" label="Your learning goals (optional)">
                    <TextArea
                      rows={3}
                      placeholder="e.g. I want to work in Japan within two years"
                    />
                  </Form.Item>

                  <Form.Item
                    name="profilePicture"
                    label="Profile picture (optional)"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}>
                    <Upload
                      name="profilePicture"
                      listType="picture"
                      maxCount={1}
                      beforeUpload={() => false}
                      accept="image/*">
                      <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                  </Form.Item>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between gap-4 border-t border-ink-100 pt-6">
              <Button
                size="large"
                onClick={prev}
                disabled={current === 0}
                icon={<FaArrowLeft className="h-3 w-3" />}>
                Back
              </Button>

              <span className="text-xs text-[color:var(--muted)]">
                Step {current + 1} of {steps.length}
              </span>

              {current < steps.length - 1 ? (
                <Button type="primary" size="large" onClick={next} className="!font-bold">
                  Continue
                  <FaArrowRight className="h-3 w-3" />
                </Button>
              ) : (
                <Button
                  type="primary"
                  size="large"
                  htmlType="submit"
                  loading={loading}
                  className="!font-bold">
                  Submit Registration
                </Button>
              )}
            </div>
          </div>
        </Form>
      </section>
    </>
  );
}
