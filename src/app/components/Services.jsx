import React from 'react';

const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-6 border-t-4 border-red-600 transition-all hover:shadow-lg hover:border-green-600">
      <h3 className="text-xl font-semibold text-red-700 mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <div className="mt-4 text-green-600 font-medium text-sm">
        Learn more →
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "TITP (Technical Intern Training Program)",
      description: "Comprehensive support for Technical Intern Training Program applicants, including documentation preparation, training, and placement with Japanese companies."
    },
    {
      title: "SSW (Specified Skilled Worker)",
      description: "End-to-end assistance for Specified Skilled Worker visa applications, helping qualified workers find opportunities in Japan's industries with labor shortages."
    },
    {
      title: "Student Visa",
      description: "Complete guidance for international students seeking to study in Japan, from school selection and application to visa processing and pre-departure orientation."
    },
    {
      title: "International Job Visa",
      description: "Professional support for skilled workers looking to secure employment in Japan, including job matching, interview preparation, and visa application assistance."
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-red-600">Our</span> <span className="text-green-600">Services</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            We offer comprehensive support for various pathways to work and study in Japan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
