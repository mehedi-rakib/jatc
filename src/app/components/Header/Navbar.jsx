// import { Link } from "react-router-dom";
import Link from "next/link";
import CustomDropdown from "../Controler/CustomDropdown.js";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  
  const Student = [
    {
      key: "1",
      label: <a href="./student-result">{t('navbar.studentResult')}</a>,
    },
    {
      key: "2",
      label: <a href="./student-verify">{t('navbar.studentVerify')}</a>,
    },
    {
      key: "3",
      label: <a href="./student-apply">{t('navbar.studentApply')}</a>,
    },
  ];
  const Course = [
    {
      key: "1",
      label: <a href="./">{t('navbar.longTerm')}</a>,
    },
    {
      key: "2",
      label: <a href="./">{t('navbar.shortTerm')}</a>,
    },
    {
      key: "3",
      label: <a href="./">{t('navbar.privateLesson')}</a>,
    },
  ];
  const Test = [
    {
      key: "1",
      label: <a href="./">{t('navbar.test1')}</a>,
    },
    {
      key: "2",
      label: <a href="./">{t('navbar.test2')}</a>,
    },
    {
      key: "3",
      label: <a href="./">{t('navbar.test3')}</a>,
    },
  ];

  return (
    <div className="flex space-x-4 text-sm font-semibold p-0">
      <Link className="nav-item" href="./">
        {t('navbar.home')}
      </Link>
      <CustomDropdown className="nav-item" label={t('navbar.course')} items={Course} />
      <Link className="nav-item" href="./">
        {t('navbar.schedule')}
      </Link>
      <Link className="nav-item" href="./notice">{t('navbar.notice')}</Link>
      <CustomDropdown
        className="nav-item"
        label={t('navbar.studentInfo')}
        items={Student}
      />
      <CustomDropdown className="nav-item" label={t('navbar.jlptTest')} items={Test} />
      <Link className="nav-item" href="./news">
        {t('navbar.importantLinks')}
      </Link>
      <Link className="nav-item" href="./contact-us">
        {t('navbar.contactUs')}
      </Link>
    </div>
  );
};

export default Navbar;
