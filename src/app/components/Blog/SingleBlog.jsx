"use client";

import React from "react";
import { Typography, Tag, Divider, Avatar, Space } from "antd";
import Image from "next/image";
import {
  CalendarOutlined,
  UserOutlined,
  CommentOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const BlogPost = () => {
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
            <span>December 15, 2023</span>
          </Space>
          <Space>
            <UserOutlined />
            <span>Dr. Jane Smith</span>
          </Space>
          <Space>
            <CommentOutlined />
            <span>12 Comments</span>
          </Space>
        </Space>

        <Image
          src="/images/gallery-6.jpg"
          height={400}
          width={800}
          preview={false}
          alt="Students using laptops in a modern classroom"
          className="w-full rounded-lg my-6 object-cover"
        />

        <Paragraph>
          The landscape of higher education is rapidly evolving, with online
          learning at the forefront of this transformation. As we move further
          into the digital age, universities and colleges are reimagining their
          approach to education, leveraging technology to create more
          accessible, flexible, and engaging learning experiences.
        </Paragraph>

        <Title level={2}>The Rise of Hybrid Learning Models</Title>

        <Paragraph>
          One of the most significant trends were seeing is the adoption of
          hybrid learning models. These models combine the best aspects of
          traditional classroom instruction with the flexibility and reach of
          online education. Students can attend lectures in person or virtually,
          participate in online discussions, and access course materials at any
          time.
        </Paragraph>

        <Paragraph>
          This approach not only caters to different learning styles but also
          makes higher education more accessible to those who may have work or
          family commitments that prevent them from attending traditional
          on-campus programs.
        </Paragraph>

        <Title level={2}>Personalized Learning Pathways</Title>

        <Paragraph>
          Artificial Intelligence AI and machine learning are playing an
          increasingly important role in online education. These technologies
          can analyze a students learning patterns, strengths, and weaknesses to
          create personalized learning pathways. This tailored approach ensures
          that each student receives the support and challenges they need to
          succeed.
        </Paragraph>

        <Title level={2}>Virtual and Augmented Reality in Education</Title>

        <Paragraph>
          Virtual Reality VR and Augmented Reality AR are set to revolutionize
          how certain subjects are taught. Imagine medical students performing
          virtual surgeries, history students walking through ancient
          civilizations, or engineering students manipulating 3D models of
          complex machinery. These immersive experiences can significantly
          enhance understanding and retention.
        </Paragraph>

        <Title level={2}>The Challenge of Digital Equity</Title>

        <Paragraph>
          As we embrace online learning, it&apos;s crucial to address the issue
          of digital equity. Not all students have equal access to the
          technology and high-speed internet required for effective online
          learning. Educational institutions and policymakers must work together
          to ensure that the shift to online education does not leave any
          students behind.
        </Paragraph>

        <Title level={2}>Conclusion</Title>

        <Paragraph>
          The future of online learning in higher education is bright and full
          of possibilities. By embracing new technologies and innovative
          teaching methods, we can create more inclusive, engaging, and
          effective educational experiences. However, it is important to
          approach this future thoughtfully, ensuring that we maintain the
          quality of education and address challenges like digital equity along
          the way.
        </Paragraph>

        <Divider />

        <Space align="center" size="large">
          <Avatar size={64} icon={<UserOutlined />} />
          <div>
            <Title level={4} style={{ margin: 0 }}>
              Dr. Jane Smith
            </Title>
            <Paragraph>
              Dr. Jane Smith is a Professor of Educational Technology at
              Evergreen University. She has been researching the impact of
              technology on education for over 15 years and is a frequent
              speaker at international conferences.
            </Paragraph>
          </div>
        </Space>
      </Typography>
    </article>
  );
};

export default BlogPost;
