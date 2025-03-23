"use client";

import React, { useState } from "react";
import { Card, Row, Col, Tag, Pagination, Image, Button, Typography, Divider, Input, List, Space } from "antd";
import { 
  CalendarOutlined, 
  EyeOutlined, 
  ArrowRightOutlined, 
  SearchOutlined,
  FireOutlined,
  TagOutlined,
  AppstoreOutlined 
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;
const { Search } = Input;

// Sample news data - replace with your actual data
const newsItems = [
  {
    id: 1,
    title: "Japan Ambition Delegation Attends International Education Conference",
    date: "January 15, 2024",
    category: "Events",
    image: "/placeholder-image.webp",
    excerpt: "Our team participated in the annual International Education Conference in Tokyo, discussing latest trends in global education and employment opportunities.",
    content: "Japan Ambition was proud to send a delegation to the International Education Conference held in Tokyo last week. The conference, which gathered education professionals from around the world, focused on emerging trends in international education and employment opportunities across borders. Our representatives had the opportunity to showcase our programs and establish new partnerships with institutions across Asia.",
    views: 245
  },
  {
    id: 2,
    title: "New Language Training Programs Launched for SSW Applicants",
    date: "December 10, 2023",
    category: "Programs",
    image: "/placeholder-image.webp",
    excerpt: "Japan Ambition introduces intensive Japanese language courses specifically designed for Specified Skilled Worker visa applicants.",
    content: "We're excited to announce the launch of our specialized Japanese language training programs tailored specifically for Specified Skilled Worker (SSW) visa applicants. These accelerated courses are designed to help students achieve the required language proficiency levels in a shorter timeframe. The curriculum focuses on practical language skills needed in specific industries, including healthcare, construction, and hospitality.",
    views: 189
  },
  {
    id: 3,
    title: "Success Story: Bangladesh Students Excel in Technical Skills Assessment",
    date: "November 25, 2023",
    category: "Success Stories",
    image: "/placeholder-image.webp",
    excerpt: "A group of 15 students from our TITP program achieved top scores in their technical skills assessment in Japan.",
    content: "We're proud to share that 15 students from our Technical Intern Training Program (TITP) have achieved outstanding results in their recent technical skills assessment in Japan. The students, who came from various regions in Bangladesh, scored in the top percentile in areas including manufacturing, construction, and agricultural operations. Their success highlights the quality of our training programs and the dedication of our students.",
    views: 312
  },
  {
    id: 4,
    title: "Japan's Labor Ministry Announces New Quotas for Foreign Workers",
    date: "October 18, 2023",
    category: "Policy Updates",
    image: "/placeholder-image.webp",
    excerpt: "Recent policy changes in Japan will increase the number of foreign workers allowed in several key industries.",
    content: "Japan's Ministry of Labor has announced new quotas for foreign workers in several key industries experiencing labor shortages. The updated policy will increase the number of available positions in healthcare, construction, food service, and agriculture sectors. This change represents a significant opportunity for qualified applicants through programs like SSW and TITP. Japan Ambition is preparing to help more candidates take advantage of these new opportunities.",
    views: 276
  },
  {
    id: 5,
    title: "Orientation Session for New TITP Applicants",
    date: "September 5, 2023",
    category: "Events",
    image: "/placeholder-image.webp",
    excerpt: "Japan Ambition will host an orientation session for prospective Technical Intern Training Program applicants next month.",
    content: "We will be hosting a comprehensive orientation session for prospective Technical Intern Training Program (TITP) applicants on October 10th. The session will cover program requirements, application processes, training schedules, and life in Japan. Current TITP participants will join to share their experiences and offer advice. Interested candidates should register through our website or contact our office directly.",
    views: 198
  },
  {
    id: 6,
    title: "New Partnerships with Japanese Agricultural Enterprises",
    date: "August 22, 2023",
    category: "Partnerships",
    image: "/placeholder-image.webp",
    excerpt: "Japan Ambition has established new partnerships with five major agricultural enterprises in Japan.",
    content: "We're pleased to announce new collaborative partnerships with five major agricultural enterprises across Japan. These partnerships will create additional opportunities for our TITP and SSW candidates interested in agricultural work. The participating companies specialize in various areas including crop farming, livestock management, and agricultural technology. These new relationships will help us place more qualified candidates in rewarding positions throughout Japan's agricultural sector.",
    views: 167
  }
];

// Categories for sidebar
const categories = [
  { name: "Events", count: 2 },
  { name: "Programs", count: 1 },
  { name: "Success Stories", count: 1 },
  { name: "Policy Updates", count: 1 },
  { name: "Partnerships", count: 1 }
];

// Popular posts for sidebar
const popularPosts = [
  {
    id: 3,
    title: "Success Story: Bangladesh Students Excel in Technical Skills Assessment",
    date: "November 25, 2023",
    views: 312
  },
  {
    id: 4,
    title: "Japan's Labor Ministry Announces New Quotas for Foreign Workers",
    date: "October 18, 2023",
    views: 276
  },
  {
    id: 1,
    title: "Japan Ambition Delegation Attends International Education Conference",
    date: "January 15, 2024",
    views: 245
  }
];

const categoryColors = {
  "Events": "#1890ff",
  "Programs": "#52c41a",
  "Success Stories": "#722ed1",
  "Policy Updates": "#fa8c16",
  "Partnerships": "#eb2f96"
};

export default function News() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;
  const { t } = useTranslation();
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onSearch = (value) => {
    console.log('Search:', value);
    // Implementation for search functionality
  };

  // Calculate current items
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentItems = newsItems.slice(indexOfFirstItem, indexOfLastItem);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-8 md:py-16 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            <Title level={1} className="text-4xl md:text-5xl font-bold mb-4">
              
            Latest News
            </Title>
            <Divider className="mb-6">
              <span className="text-gray-500 text-lg">Stay informed about our activities and opportunities</span>
            </Divider>
          </motion.div>
        </div>
        
        <Row gutter={[32, 32]}>
          {/* Main Content */}
          <Col xs={24} lg={18}>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show">
              <List
                itemLayout="vertical"
                size="large"
                dataSource={currentItems}
                renderItem={(news) => (
                  <motion.div variants={item} key={news.id}>
                    <List.Item
                      key={news.id}
                      className="mb-8 bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      <Row gutter={[0, 0]} className="w-full">
                        <Col xs={24} md={8} className="overflow-hidden">
                          <div className="h-full relative">
                            <Image
                              alt={news.title}
                              src={news.image}
                              preview={false}
                              className="object-cover w-full h-full"
                            />
                            <Tag 
                              color={categoryColors[news.category]} 
                              className="absolute top-3 left-3 m-0 font-medium">
                              {news.category}
                            </Tag>
                          </div>
                        </Col>
                        <Col xs={24} md={16} className="p-6">
                          <div className="flex flex-col h-full">
                            <div className="mb-2">
                              <Title level={3} className="mb-3">
                                <a href={`/news/${news.id}`} className="text-gray-800 hover:text-red-600 transition-colors">
                                  {news.title}
                                </a>
                              </Title>
                              <Space className="text-sm text-gray-500 mb-3">
                                <span className="flex items-center">
                                  <CalendarOutlined className="mr-1" /> {news.date}
                                </span>
                                <span className="flex items-center">
                                  <EyeOutlined className="mr-1" /> {news.views} views
                                </span>
                              </Space>
                            </div>
                            
                            <Paragraph className="text-gray-600 mb-4 flex-grow">
                              {news.excerpt}
                            </Paragraph>
                            
                            <Button 
                              type="primary" 
                              size="middle"
                              className="self-start mt-auto bg-red-600 hover:bg-red-700 border-0"
                              icon={<ArrowRightOutlined />}
                              href={`/news/${news.id}`}>
                              Read More
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </List.Item>
                  </motion.div>
                )}
              />
              
              <div className="mt-12 mx-auto w-1/3 text-center">
                <Pagination
                  current={currentPage}
                  pageSize={pageSize}
                  total={newsItems.length}
                  onChange={handlePageChange}
                  showSizeChanger={false}
                />
              </div>
            </motion.div>
          </Col>
          
          {/* Sidebar */}
          <Col xs={24} lg={6}>
            <div className="space-y-8">
              {/* Search Box */}
             
              
              
              
              {/* Popular Posts */}
              <div className="bg-white p-5 rounded-lg shadow-md">
                <Title level={4} className="mb-4 flex items-center">
                  <FireOutlined className="mr-2" /> Popular Posts
                </Title>
                <List
                  itemLayout="horizontal"
                  dataSource={popularPosts}
                  renderItem={item => (
                    <List.Item className="py-3 border-b last:border-b-0">
                      <List.Item.Meta
                        title={
                          <a href={`/news/${item.id}`} className="text-gray-800 hover:text-red-600 transition-colors line-clamp-2">
                            {item.title}
                          </a>
                        }
                        description={
                          <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
                            <span><CalendarOutlined className="mr-1" /> {item.date}</span>
                            <span><EyeOutlined className="mr-1" /> {item.views} views</span>
                          </div>
                        }
                      />
                    </List.Item>
                  )}
                />
              </div>
              {/* Categories */}
              <div className="bg-white p-5 rounded-lg shadow-md">
                <Title level={4} className="mb-4 flex items-center">
                  <AppstoreOutlined className="mr-2" /> Categories
                </Title>
                <List
                  dataSource={categories}
                  renderItem={item => (
                    <List.Item className="py-2 border-b last:border-b-0">
                      <a href={`/news/category/${item.name.toLowerCase().replace(' ', '-')}`} className="flex justify-between w-full text-gray-700 hover:text-red-600 transition-colors">
                        <span className="flex items-center">
                          <TagOutlined className="mr-2" /> {item.name}
                        </span>
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                          {item.count}
                        </span>
                      </a>
                    </List.Item>
                  )}
                />
              </div>
              
              
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}