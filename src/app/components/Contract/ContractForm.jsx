"use client";

import { useState } from "react";
import { Form, Input, Button, App } from "antd";
import { motion } from "framer-motion";
import { FaPaperPlane, FaMapMarkerAlt } from "react-icons/fa";
import Reveal from "../motion/Reveal";
import { contactDetails } from "../Header/navigation";

const { TextArea } = Input;

export default function ContactForm() {
  const [form] = Form.useForm();
  const { message } = App.useApp();
  const [submitting, setSubmitting] = useState(false);

  const onFinish = async (values) => {
    setSubmitting(true);

    // No form backend yet — fall back to the visitor's mail client so the
    // message still reaches us instead of vanishing.
    const body = [
      `Name: ${values.firstName} ${values.lastName}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      "",
      values.message,
    ].join("\n");

    const mailto = `mailto:${contactDetails.email}?subject=${encodeURIComponent(
      `Website enquiry from ${values.firstName} ${values.lastName}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    setSubmitting(false);
    message.success("Opening your email app with the message ready to send.");
    form.resetFields();
  };

  return (
    <section className="section bg-[color:var(--surface)]">
      <div className="mx-auto max-w-[90rem] px-4 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <Reveal direction="right">
            <div className="rounded-3xl bg-white p-7 shadow-soft ring-1 ring-ink-100 md:p-9">
              <span className="eyebrow">Send a Message</span>
              <h2 className="mt-4 text-2xl font-bold md:text-3xl">
                Get In Touch
              </h2>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                Tell us what you need and we&apos;ll get back to you within one
                working day.
              </p>

              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                requiredMark={false}
                className="mt-7">
                <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2">
                  <Form.Item
                    name="firstName"
                    label="First name"
                    rules={[{ required: true, message: "Please enter your first name" }]}>
                    <Input placeholder="Rakib" size="large" />
                  </Form.Item>

                  <Form.Item
                    name="lastName"
                    label="Last name"
                    rules={[{ required: true, message: "Please enter your last name" }]}>
                    <Input placeholder="Hasan" size="large" />
                  </Form.Item>
                </div>

                <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2">
                  <Form.Item
                    name="email"
                    label="Email address"
                    rules={[
                      { required: true, message: "Please enter your email" },
                      { type: "email", message: "That doesn't look like a valid email" },
                    ]}>
                    <Input placeholder="you@example.com" size="large" />
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
                    <Input placeholder="01XXXXXXXXX" size="large" />
                  </Form.Item>
                </div>

                <Form.Item
                  name="message"
                  label="Your message"
                  rules={[{ required: true, message: "Please write a short message" }]}>
                  <TextArea
                    placeholder="I'd like to know about the next intake for the short course…"
                    rows={5}
                  />
                </Form.Item>

                <Form.Item className="!mb-0">
                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      htmlType="submit"
                      type="primary"
                      size="large"
                      loading={submitting}
                      icon={!submitting && <FaPaperPlane className="h-3 w-3" />}
                      className="!h-12 !w-full !font-bold !uppercase !tracking-wide">
                      Send Message
                    </Button>
                  </motion.div>
                </Form.Item>
              </Form>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal direction="left" className="flex flex-col gap-4">
            <div className="relative min-h-[420px] flex-1 overflow-hidden rounded-3xl shadow-lift ring-1 ring-ink-100">
              <iframe
                title="Japan Ambition Training Center location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d327.1807634163489!2d90.44129654826517!3d23.834712632969513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77d72c1d459%3A0xbbaa446958c9a1f!2sAli%20Market!5e0!3m2!1sen!2sbd!4v1736834657508!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", inset: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-ink-100">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-500 text-white">
                <FaMapMarkerAlt className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-bold text-ink-900">Visit our campus</p>
                <p className="mt-1 text-sm leading-relaxed text-[color:var(--muted)]">
                  {contactDetails.address}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
