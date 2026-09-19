"use client";

import { useState } from "react";
import { Form, Input, Button, Modal, App } from "antd";
import { motion } from "framer-motion";
import { FaCheckCircle, FaIdCard, FaShieldAlt } from "react-icons/fa";
import PageHero from "../ui/PageHero";

// Demo records — swap for a real lookup when the verification API is ready.
const studentDatabase = {
  LTC001: {
    name: "John Doe",
    enrollmentDate: "2023-01-15",
    course: "Japanese Proficiency (N4)",
    status: "Active",
  },
  LTC002: {
    name: "Jane Smith",
    enrollmentDate: "2023-02-01",
    course: "Japanese Proficiency (N5)",
    status: "Active",
  },
  LTC003: {
    name: "Mike Johnson",
    enrollmentDate: "2022-09-10",
    course: "Long Intensive Course",
    status: "Graduated",
  },
};

const statusStyles = {
  Active: "bg-emerald-50 text-emerald-700",
  Graduated: "bg-sky-500/10 text-sky-600",
};

export default function StudentIDVerification() {
  const [form] = Form.useForm();
  const { message } = App.useApp();
  const [open, setOpen] = useState(false);
  const [studentInfo, setStudentInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const onFinish = async ({ studentId }) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 400));

    const id = studentId.trim().toUpperCase();
    const found = studentDatabase[id];
    setLoading(false);

    if (found) {
      setStudentInfo({ ...found, id });
      setOpen(true);
    } else {
      message.error("Student ID not found. Please check and try again.");
    }
  };

  const closeModal = () => {
    setOpen(false);
    form.resetFields();
  };

  return (
    <>
      <PageHero
        eyebrow="Student Portal"
        title="Verify a Student ID"
        description="Confirm that an enrolment at Japan Ambition Training Center is genuine."
        breadcrumbs={[{ label: "Students" }, { label: "Verify ID" }]}
      />

      <section className="section mx-auto max-w-lg px-6">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl bg-white p-7 shadow-soft ring-1 ring-ink-100 md:p-9">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-500">
            <FaShieldAlt className="h-6 w-6" />
          </div>

          <h2 className="mt-5 text-center text-xl font-bold md:text-2xl">
            Student ID Verification
          </h2>
          <p className="mt-2 text-center text-sm text-[color:var(--muted)]">
            IDs follow the format LTC followed by three digits.
          </p>

          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            requiredMark={false}
            className="mt-7">
            <Form.Item
              name="studentId"
              label="Student ID"
              rules={[
                { required: true, message: "Please enter a Student ID" },
                {
                  pattern: /^LTC\d{3}$/i,
                  message: "Use the format LTC followed by 3 digits, e.g. LTC001",
                },
              ]}>
              <Input
                size="large"
                placeholder="LTC001"
                prefix={<FaIdCard className="h-3.5 w-3.5 text-ink-300" />}
              />
            </Form.Item>

            <Form.Item className="!mb-0">
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                loading={loading}
                className="!h-12 !w-full !font-bold !uppercase !tracking-wide">
                Verify ID
              </Button>
            </Form.Item>
          </Form>

          <p className="mt-5 text-center text-xs text-[color:var(--muted)]">
            Try <code className="rounded bg-ink-50 px-1.5 py-0.5">LTC001</code>,{" "}
            <code className="rounded bg-ink-50 px-1.5 py-0.5">LTC002</code> or{" "}
            <code className="rounded bg-ink-50 px-1.5 py-0.5">LTC003</code>.
          </p>
        </motion.div>
      </section>

      <Modal
        open={open}
        onCancel={closeModal}
        title={null}
        centered
        footer={[
          <Button key="close" type="primary" onClick={closeModal}>
            Close
          </Button>,
        ]}>
        {studentInfo && (
          <div className="pt-2">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 280, damping: 18 }}
              className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-50">
              <FaCheckCircle className="h-8 w-8 text-emerald-500" />
            </motion.div>

            <h3 className="mt-4 text-center text-lg font-bold">
              ID Verified Successfully
            </h3>
            <p className="mt-1 text-center text-sm text-[color:var(--muted)]">
              {studentInfo.id} is a genuine Japan Ambition Training Center ID.
            </p>

            <dl className="mt-6 space-y-2.5">
              {[
                ["Name", studentInfo.name],
                ["Course", studentInfo.course],
                ["Enrolment Date", studentInfo.enrollmentDate],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-xl bg-[color:var(--surface)] px-4 py-3">
                  <dt className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
                    {label}
                  </dt>
                  <dd className="text-sm font-semibold text-ink-900">{value}</dd>
                </div>
              ))}
              <div className="flex items-center justify-between rounded-xl bg-[color:var(--surface)] px-4 py-3">
                <dt className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">
                  Status
                </dt>
                <dd>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      statusStyles[studentInfo.status] ?? "bg-ink-50 text-ink-700"
                    }`}>
                    {studentInfo.status}
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        )}
      </Modal>
    </>
  );
}
