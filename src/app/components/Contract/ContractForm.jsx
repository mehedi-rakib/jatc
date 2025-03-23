"use client";

import React from "react";
import { Form, Input, Button } from "antd";
import { useTranslation } from "react-i18next";

const { TextArea } = Input;

export default function ContactForm() {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form submitted:", values);
    form.resetFields();
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className=" p-8 rounded-lg border border-orange-200">
          <h2 className="text-2xl font-semibold mb-6">{t('contact.getInTouch')}</h2>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                name="firstName"
                label={t('contact.firstName')}
                rules={[
                  { required: true, message: t('contact.pleaseInputFirstName') },
                ]}>
                <Input
                  placeholder={t('contact.firstName')}
                  className="py-2 px-4 rounded-md"
                />
              </Form.Item>

              <Form.Item
                name="lastName"
                label={t('contact.lastName')}
                rules={[
                  { required: true, message: t('contact.pleaseInputLastName') },
                ]}>
                <Input
                  placeholder={t('contact.lastName')}
                  className="py-2 px-4 rounded-md"
                />
              </Form.Item>
            </div>

            <Form.Item
              name="email"
              label={t('contact.email')}
              rules={[
                { required: true, message: t('contact.pleaseInputEmail') },
                { type: "email", message: t('contact.pleaseInputValidEmail') },
              ]}>
              <Input
                placeholder={t('contact.emailPlaceholder')}
                className="py-2 px-4 rounded-md"
              />
            </Form.Item>

            <Form.Item
              name="phone"
              label={t('contact.phone')}
              rules={[
                { required: true, message: t('contact.pleaseInputPhone') },
              ]}>
              <Input
                placeholder={t('contact.phonePlaceholder')}
                className="py-2 px-4 rounded-md"
              />
            </Form.Item>

            <Form.Item
              name="subject"
              label={t('contact.subject')}
              rules={[
                { required: true, message: t('contact.pleaseInputSubject') },
              ]}>
              <Input
                placeholder={t('contact.subjectPlaceholder')}
                className="py-2 px-4 rounded-md"
              />
            </Form.Item>

            <Form.Item
              name="message"
              label={t('contact.message')}
              rules={[
                { required: true, message: t('contact.pleaseInputMessage') },
              ]}>
              <TextArea
                rows={4}
                placeholder={t('contact.messagePlaceholder')}
                className="py-2 px-4 rounded-md"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="bg-red-600 hover:bg-red-700 border-none py-2 px-6 rounded-md">
                {t('contact.submit')}
              </Button>
            </Form.Item>
          </Form>
        </div>

        {/* Map */}
        <div className="bg-gray-100 rounded-lg overflow-hidden h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.0980525346835!2d90.42336491498255!3d23.81288088456218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7d45f832a87%3A0x6a3f9e8a5a5be561!2sKhilkhet%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1647881016796!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title={t('contact.mapTitle')}
          />
        </div>
      </div>
    </section>
  );
}
