import React from 'react';
import { Row, Col } from 'antd';

const GalleryPage = () => {
  const images = [
    'gallery-1.jpg', 'gallery-2.jpg', 'gallery-3.jpg', 'gallery-4.jpg', 'gallery-5.jpg', 'gallery-6.jpg'
  ];

  return (
    <div className="container mx-auto py-6 px-4">
      <h2 className="text-3xl text-center font-bold mb-8">Gallery</h2>
      <Row gutter={[16, 16]}>
        {/* First row: img1, img2, img3 */}
        <Col xs={24} sm={8} md={8} lg={8}>
          <img
            src={`/images/${images[0]}`}
            alt="Gallery 1"
            className="w-full h-[350px] object-cover rounded-lg shadow-md"
          />
        </Col>
        <Col xs={24} sm={8} md={8} lg={8}>
          <img
            src={`/images/${images[1]}`}
            alt="Gallery 2"
            className="w-full h-[350px] object-cover rounded-lg shadow-md"
          />
        </Col>
        <Col xs={24} sm={8} md={8} lg={8}>
          <img
            src={`/images/${images[2]}`}
            alt="Gallery 3"
            className="w-full h-[350px] object-cover rounded-lg shadow-md"
          />
        </Col>

        {/* Second row: img4, img5 */}
        <Col xs={24} sm={12} md={12} lg={12}>
          <img
            src={`/images/${images[3]}`}
            alt="Gallery 4"
            className="w-full h-[350px] object-cover rounded-lg shadow-md"
          />
        </Col>
        <Col xs={24} sm={12} md={12} lg={12}>
          <img
            src={`/images/${images[4]}`}
            alt="Gallery 5"
            className="w-full h-[350px] object-cover rounded-lg shadow-md"
          />
        </Col>

        {/* Third row: img6 */}
        <Col xs={24} sm={24} md={24} lg={24}>
          <img
            src={`/images/${images[5]}`}
            alt="Gallery 6"
            className="w-full h-[350px] object-cover rounded-lg shadow-md"
          />
        </Col>
      </Row>
    </div>
  );
};

export default GalleryPage;
