"use client";

import { Button } from "antd";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function FooterTop() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#E31E24] py-12">
      <div className="container mx-auto xl:w-1/2 px-4">
   
          {/* Left side content */}
          <div className="text-white text-center md:flex md:justify-between md:items-center md:text-left">
            <h2 className="text-xl md:text-3xl text-center xl:text-left font-bold mb-2">{t('footerTop.successPriority', 'Your Success is Our Top Priority')}</h2>
            <div className="w-full md:w-auto">
            <Button className="mx-auto rounded-xl text-md md:text-xl font-bold px-8 py-6 bg-green-400 text-white">
              <Link href="/contact-us  ">
                {t('footer.contact')}
              </Link>
            </Button>
            
          </div>
          </div>
          

      </div>
    </div>
  );
}
