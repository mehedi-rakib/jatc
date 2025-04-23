import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const services = [
    {
      title: t("services.titp.title"),
      description: t("services.titp.description")
    },
    {
      title: t("services.ssw.title"),
      description: t("services.ssw.description")
    },
    {
      title: t("services.studentVisa.title"),
      description: t("services.studentVisa.description")
    },
    {
      title: t("services.internationalJobVisa.title"),
      description: t("services.internationalJobVisa.description")
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-red-600">{t("our")}</span> <span className="text-green-600">{t("servicesTitle")}</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            {t("servicesDescription")}
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
