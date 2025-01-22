"use client";

import React from "react";
import { Form, Input, Button } from "antd";

const { TextArea } = Input;

export default function ContactForm() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form submitted:", values);
    form.resetFields();
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-gray-50 p-8 rounded-lg border border-orange-200">
          <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                name="firstName"
                rules={[
                  { required: true, message: "Please input your first name!" },
                ]}>
                <Input
                  placeholder="First Name"
                  className="py-2 px-4 rounded-md"
                />
              </Form.Item>

              <Form.Item
                name="lastName"
                rules={[
                  { required: true, message: "Please input your last name!" },
                ]}>
                <Input
                  placeholder="Last Name"
                  className="py-2 px-4 rounded-md"
                />
              </Form.Item>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}>
                <Input
                  placeholder="Email Address"
                  className="py-2 px-4 rounded-md"
                />
              </Form.Item>

              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}>
                <Input placeholder="Phone" className="py-2 px-4 rounded-md" />
              </Form.Item>
            </div>

            <Form.Item
              name="message"
              rules={[
                { required: true, message: "Please input your message!" },
              ]}>
              <TextArea
                placeholder="Message"
                rows={6}
                className="py-2 px-4 rounded-md"
              />
            </Form.Item>

            <Form.Item>
              <Button
                htmlType="submit"
                className="w-full bg-amber-400 hover:bg-amber-500 text-white font-semibold py-3 rounded-md border-none">
                SUBMIT
              </Button>
            </Form.Item>
          </Form>
        </div>

        {/* Map */}
        <div className="h-[500px] lg:h-auto rounded-lg overflow-hidden">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d327.1807634163489!2d90.44129654826517!3d23.834712632969513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77d72c1d459%3A0xbbaa446958c9a1f!2sAli%20Market!5e0!3m2!1sen!2sbd!4v1736834657508!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"></iframe> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d327.1807634163489!2d90.44129654826517!3d23.834712632969513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77d72c1d459%3A0xbbaa446958c9a1f!2sAli%20Market!5e0!3m2!1sen!2sbd!4v1736834657508!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: 0 }} // Converted to JSX object
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
