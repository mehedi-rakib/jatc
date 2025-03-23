"use client";

import React, { useState } from "react";
import { Row, Col, Typography, Tabs, Image, Divider, Button } from "antd";
import { motion } from "framer-motion";
import { PictureOutlined, VideoCameraOutlined, EnvironmentOutlined, CalendarOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const { TabPane } = Tabs;

// Sample gallery data - replace with your actual data
const galleryItems = {
  photos: [
    { 
      id: 1, 
      src: "/images/gallery-3.jpg", 
      alt: "Group photo of students at graduation ceremony", 
      location: "Tokyo, Japan",
      date: "January 2024",
      category: "Events"
    },
    { 
      id: 2, 
      src: "/images/gallery-2.jpg", 
      alt: "Students in classroom learning Japanese", 
      location: "Dhaka, Bangladesh",
      date: "December 2023",
      category: "Training"
    },
    { 
      id: 3, 
      src: "/images/slider-1.jpg", 
      alt: "Staff meeting with Japanese representatives", 
      location: "Osaka, Japan",
      date: "November 2023",
      category: "Partnerships"
    },
    { 
      id: 4, 
      src: "/images/gallery-1.jpg", 
      alt: "Cultural exchange program participants", 
      location: "Kyoto, Japan",
      date: "October 2023",
      category: "Cultural"
    },
    { 
      id: 5, 
      src: "/images/slider-2.jpg", 
      alt: "Technical training workshop", 
      location: "Chittagong, Bangladesh",
      date: "September 2023",
      category: "Training"
    },
    { 
      id: 6, 
      src: "/images/gallery-4.jpg", 
      alt: "Office inauguration ceremony", 
      location: "Dhaka, Bangladesh",
      date: "August 2023",
      category: "Events"
    },
    { 
      id: 7, 
      src: "/images/gallery-5.jpg", 
      alt: "Students visiting Japanese company", 
      location: "Nagoya, Japan",
      date: "July 2023",
      category: "Partnerships"
    },
    { 
      id: 8, 
      src: "/images/gallery-6.jpg", 
      alt: "Language proficiency test participants", 
      location: "Dhaka, Bangladesh",
      date: "June 2023",
      category: "Training"
    },
    { 
      id: 9, 
      src: "/images/slider-4.jpg", 
      alt: "Sakura festival celebration", 
      location: "Tokyo, Japan",
      date: "April 2023",
      category: "Cultural"
    },
  ],
  videos: [
    {
      id: 1,
      thumbnail: "/upload/placeholder-image.webp",
      title: "Student Success Stories in Japan",
      description: "Hear from our students about their experiences working in Japan.",
      videoUrl: "https://www.youtube.com/watch?v=example1",
      duration: "5:32",
      date: "January 2024"
    },
    {
      id: 2,
      thumbnail: "/upload/placeholder-image.webp",
      title: "Japanese Language Learning Tips",
      description: "Our instructors share effective strategies for mastering Japanese.",
      videoUrl: "https://www.youtube.com/watch?v=example2",
      duration: "8:15",
      date: "November 2023"
    },
    {
      id: 3,
      thumbnail: "/upload/placeholder-image.webp",
      title: "Guide to Working in Japan",
      description: "Everything you need to know about working culture in Japan.",
      videoUrl: "https://www.youtube.com/watch?v=example3",
      duration: "12:47",
      date: "September 2023"
    },
    {
      id: 4,
      thumbnail: "/upload/placeholder-image.webp",
      title: "TITP Program Explained",
      description: "Detailed walkthrough of the Technical Intern Training Program.",
      videoUrl: "https://www.youtube.com/watch?v=example4",
      duration: "15:03",
      date: "July 2023"
    },
  ]
};

// Filter categories for photos
const photoCategories = ["All", ...new Set(galleryItems.photos.map(item => item.category))];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("photos");
  const [photoFilter, setPhotoFilter] = useState("All");
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  
  // Filter photos based on selected category
  const filteredPhotos = photoFilter === "All" 
    ? galleryItems.photos 
    : galleryItems.photos.filter(photo => photo.category === photoFilter);

  const showPreview = (imageSrc) => {
    setPreviewImage(imageSrc);
    setPreviewVisible(true);
  };

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
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            <Title level={1} className="text-4xl md:text-5xl font-bold mb-4">
            Our Gallery
            </Title>
            <Divider className="mb-6">
              <span className="text-gray-500 text-lg">Explore our moments and achievements</span>
            </Divider>
          </motion.div>
        </div>
        
        <Tabs 
          activeKey={activeTab} 
          onChange={setActiveTab}
          centered
          size="large"
          className="gallery-tabs mb-8"
          tabBarStyle={{ 
            marginBottom: 32, 
            fontWeight: 'bold',
            borderBottom: '2px solid #eaeaea' 
          }}>
          <TabPane 
            tab={<span className="px-4 py-2 text-lg"><PictureOutlined className="mr-2" />Photos</span>} 
            key="photos">
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center mb-10 gap-2">
              {photoCategories.map(category => (
                <Button
                  key={category}
                  type={photoFilter === category ? "primary" : "default"}
                  onClick={() => setPhotoFilter(category)}
                  size="large"
                  className={`${photoFilter === category ? 'bg-red-600 border-red-600' : ''} min-w-[100px]`}>
                  {category}
                </Button>
              ))}
            </div>
            
            {/* Photo Grid */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show">
              <Row gutter={[24, 24]}>
                {filteredPhotos.map((photo) => (
                  <Col xs={24} sm={12} md={8} key={photo.id}>
                    <motion.div variants={item}>
                      <div className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer h-[250px] transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]" onClick={() => showPreview(photo.src)}>
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          preview={false}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                          <Text className="text-lg font-semibold mb-1">{photo.alt}</Text>
                          <div className="flex justify-between text-sm">
                            <span className="flex items-center">
                              <EnvironmentOutlined className="mr-1" /> {photo.location}
                            </span>
                            <span className="flex items-center">
                              <CalendarOutlined className="mr-1" /> {photo.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>
          </TabPane>
          
          <TabPane 
            tab={<span className="px-4 py-2 text-lg"><VideoCameraOutlined className="mr-2" />Videos</span>} 
            key="videos">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show">
              <Row gutter={[32, 32]}>
                {galleryItems.videos.map((video) => (
                  <Col xs={24} md={12} key={video.id}>
                    <motion.div variants={item}>
                      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                        <div className="relative cursor-pointer" onClick={() => window.open(video.videoUrl, '_blank')}>
                          <Image
                            src={video.thumbnail}
                            preview={false}
                            alt={video.title}
                            className="w-full aspect-video object-cover"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                            </div>
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                            {video.duration}
                          </div>
                        </div>
                        <div className="p-5">
                          <Title level={4} className="mb-2">{video.title}</Title>
                          <Text className="text-gray-600 block mb-3">{video.description}</Text>
                          <div className="text-sm text-gray-500 flex justify-between">
                            <span><CalendarOutlined className="mr-1" /> {video.date}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>
          </TabPane>
        </Tabs>
      </div>
      
      {/* Image Preview Modal */}
      <div style={{ display: 'none' }}>
        <Image
          preview={{
            visible: previewVisible,
            onVisibleChange: (visible) => setPreviewVisible(visible),
            src: previewImage
          }}
        />
      </div>
    </section>
  );
} 