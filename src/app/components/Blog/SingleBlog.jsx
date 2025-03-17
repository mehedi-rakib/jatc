"use client";
import React from "react";
import { Typography, Tag, Divider, Avatar, Space, Button, Form, Input } from "antd";
import { useTranslation } from "react-i18next";
import {
  CalendarOutlined,
  UserOutlined,
  CommentOutlined,
  ShareAltOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const BlogPost = () => {
  const { t } = useTranslation();

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <Typography>
        <Title level={1}>
          The Future of Online Learning in Higher Education
        </Title>

        <Space size={[0, 8]} wrap className="my-4">
          <Tag color="blue">Education</Tag>
          <Tag color="green">Technology</Tag>
          <Tag color="orange">Future</Tag>
        </Space>

        <Space size="large" className="my-4">
          <Space>
            <CalendarOutlined />
            <span>{t('blog.date')}: December 15, 2023</span>
          </Space>
          <Space>
            <UserOutlined />
            <span>{t('blog.author')}: Dr. Jane Smith</span>
          </Space>
          <Space>
            <CommentOutlined />
            <span>12 {t('blog.comments')}</span>
          </Space>
        </Space>

        <img
          src="/images/gallery-6.jpg"
          height={400}
          width={800}
          preview={false}
          alt="Students using laptops in a modern classroom"
          className="w-full rounded-lg my-6 object-cover"
        />

        <Paragraph className="text-lg leading-relaxed my-6">
          The landscape of higher education is rapidly evolving, with online learning becoming increasingly central to the academic experience. As we look toward the future, several key trends are emerging that will shape how students learn and how institutions deliver education.
        </Paragraph>

        <Title level={2} className="mt-8 mb-4">
          Personalized Learning Experiences
        </Title>
        <Paragraph className="text-lg leading-relaxed">
          One of the most significant advantages of online education is the ability to tailor learning experiences to individual students. Advanced algorithms can analyze student performance and adapt content delivery to match their learning pace and style. This personalization can lead to better outcomes and higher engagement rates.
        </Paragraph>

        <Title level={2} className="mt-8 mb-4">
          Virtual Reality and Immersive Learning
        </Title>
        <Paragraph className="text-lg leading-relaxed">
          Virtual reality (VR) and augmented reality (AR) technologies are opening new possibilities for immersive learning experiences. Medical students can practice surgeries in virtual operating rooms, while history students can walk through ancient civilizations. These technologies bridge the gap between theoretical knowledge and practical application.
        </Paragraph>

        <Divider />

        <div className="flex justify-between items-center my-6">
          <div>
            <Text strong>{t('blog.tags')}:</Text>
            <Space size={[0, 8]} wrap className="ml-2">
              <Tag color="blue">Education</Tag>
              <Tag color="green">Technology</Tag>
              <Tag color="orange">Future</Tag>
            </Space>
          </div>
          <div>
            <Text strong className="mr-2">{t('blog.sharePost')}:</Text>
            <Space>
              <Button
                type="text"
                icon={<FacebookOutlined />}
                className="text-blue-600"
              />
              <Button
                type="text"
                icon={<TwitterOutlined />}
                className="text-blue-400"
              />
              <Button
                type="text"
                icon={<LinkedinOutlined />}
                className="text-blue-800"
              />
            </Space>
          </div>
        </div>

        <Divider />

        <div className="my-8">
          <Title level={3}>{t('blog.relatedPosts')}</Title>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {/* Related post cards would go here */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="border rounded-lg overflow-hidden">
                <img
                  src={`/images/gallery-${item}.jpg`}
                  alt="Related post"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold mb-2">
                    Related Article Title Here
                  </h4>
                  <p className="text-sm text-gray-500">December 10, 2023</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        <div className="my-8">
          <Title level={3}>12 {t('blog.comments')}</Title>
          {/* Comments would go here */}
          <div className="space-y-6 mt-4">
            {[1, 2].map((item) => (
              <div key={item} className="flex space-x-4">
                <Avatar size={48} icon={<UserOutlined />} />
                <div className="flex-1">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between">
                      <Text strong>Comment Author</Text>
                      <Text type="secondary">December 16, 2023</Text>
                    </div>
                    <Paragraph className="mt-2">
                      This is a sample comment on the blog post. It could discuss
                      the content, ask questions, or provide additional insights.
                    </Paragraph>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        <div className="my-8">
          <Title level={3}>{t('blog.leaveComment')}</Title>
          <Form layout="vertical" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                name="name"
                label={t('blog.yourName')}
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="email"
                label={t('blog.yourEmail')}
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
            <Form.Item
              name="comment"
              label={t('blog.yourComment')}
              rules={[
                { required: true, message: "Please input your comment!" },
              ]}
            >
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                {t('blog.submit')}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Typography>
    </article>
  );
};

export default BlogPost;
