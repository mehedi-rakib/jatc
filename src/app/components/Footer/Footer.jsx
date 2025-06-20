"use client";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const quickLinks = [
    { name: t('footer.home'), href: "/" },
    { name: t('footer.about'), href: "/about-us" },
    { name: t('footer.blog'), href: "/blog" },
    { name: t('footer.notice'), href: "/notice" },
    { name: t('footer.admission'), href: "/student-apply" },
    { name: t('footer.links'), href: "/#" },
    { name: t('footer.contact'), href: "/contact-us" },
  ];

  const openingHours = [
    { day: t('footer.sunday'), time: "10:00 - 19:00" },
    { day: t('footer.monday'), time: "10:00 - 19:00" },
    { day: t('footer.tuesday'), time: "10:00 - 19:00" },
    { day: t('footer.wednesday'), time: "10:00 - 19:00" },
    { day: t('footer.thursday'), time: "10:00 - 19:00" },
    { day: t('footer.friday'), time: t('footer.closed') },
    { day: t('footer.saturday'), time: "10:00 - 19:00" },
  ];

  const socialLinks = [
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/profile.php?id=61575961845133",
      target: "_blank",
      color: "bg-[#3b5998]",
    },
    { icon: FaTwitter, href: "/#", color: "bg-[#1da1f2]" },
    { icon: FaInstagram, href: "/#", color: "bg-[#e1306c]" },
    { icon: FaYoutube, href: "/#", color: "bg-[#ff0000]" },
  ];

  return (
    <>
      <footer className="bg-[#1E2832] text-white">
        <div className="container w-3/4 mx-auto px-4 py-0 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            {/* Logo and Description */}
            <div className="space-y-4 relative">
              <Link href="/#" className="inline-block">
                <div className="relative w-48 h-16">
                  <img
                    src="/logo.png"
                    alt="International School System"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              {/* Beta Version Tag */}
              {/* <span className="absolute top-6 left-1 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                {t('footer.betaVersion', 'Beta')}
              </span> */}
              <p className="text-gray-300 text-sm">
                {t('footer.description', 'Japan Ambition Training Center is a leading Japanese language school in Bangladesh, offering comprehensive language courses and cultural programs.')}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">{t('footer.quickLinks')}</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="text-xl font-semibold mb-4">{t('footer.openingHours')}</h3>
              <ul className="space-y-2">
                {openingHours.map((item, index) => (
                  <li key={index} className="text-gray-300">
                    <span className="flex justify-between">
                      <span>{item.day}</span>
                      <span>{item.time}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">{t('footer.contactInfo')}</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <span className="font-medium">{t('footer.address')}:</span> {t('footer.addressValue')}
                </li>
                <li>
                  <span className="font-medium">{t('footer.phone')}:</span> +880 1715-458036
                </li>
                <li>
                  <span className="font-medium text-[#1E2832]">{t('footer.phone')}:</span> +880 1325-661767
                </li>
                <li>
                  <span className="font-medium">{t('footer.email')}:</span>{" "}
                  info@japanambition.com
                </li>
              </ul>

              {/* Social Links */}
              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-2">{t('footer.followUs')}</h4>
                <div className="flex space-x-2">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={index}
                        href={link.href}
                        target={link.target || "_self"}
                        className={`${link.color} p-2 rounded-full text-white hover:opacity-80 transition-opacity`}
                      >
                        <Icon size={16} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm ">
            <p>{t('footer.copyright')}</p>
            {/* <p className="mt-2">{t('footer.betaVersion', 'Beta Version')}</p> */}
          </div>
        </div>
      </footer>
    </>
  );
}
