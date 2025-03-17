"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Image, Tabs } from "antd";

const GalleryPage = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { key: "all", label: t('photoGallery.viewAll') },
    { key: "classes", label: t('photoGallery.categories.classes') },
    { key: "events", label: t('photoGallery.categories.events') },
    { key: "activities", label: t('photoGallery.categories.activities') },
    { key: "campus", label: t('photoGallery.categories.campus') },
  ];

  // Sample gallery images - replace with your actual images
  const galleryImages = [
    { id: 1, src: "/images/gallery-1.jpg", category: "classes", alt: "Japanese Class" },
    { id: 2, src: "/images/gallery-2.jpg", category: "classes", alt: "Study Group" },
    { id: 3, src: "/images/gallery-3.jpg", category: "events", alt: "Cultural Festival" },
    { id: 4, src: "/images/gallery-4.jpg", category: "events", alt: "Graduation Ceremony" },
    { id: 5, src: "/images/gallery-5.jpg", category: "activities", alt: "Group Activity" },
    { id: 6, src: "/images/gallery-6.jpg", category: "activities", alt: "Workshop" },
    // Add more images as needed
  ];

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const handleCategoryChange = (key) => {
    setActiveCategory(key);
  };

  const items = categories.map(category => ({
    key: category.key,
    label: category.label,
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">{t('photoGallery.title')}</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t('photoGallery.description')}
        </p>
      </div>

      <div className="mb-8">
        <Tabs 
          items={items} 
          activeKey={activeCategory} 
          onChange={handleCategoryChange}
          centered
          size="large"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <Image.PreviewGroup>
          {filteredImages.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="p-2">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={200}
                  style={{ objectFit: 'cover', height: '200px', width: '100%' }}
                  preview={{
                    mask: (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    ),
                  }}
                />
                <div className="p-2 bg-white">
                  <h3 className="text-lg font-medium">{image.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </Image.PreviewGroup>
      </div>
    </div>
  );
};

export default GalleryPage; 