"use client"; // ✅ Ensure this is a client component

import { Dropdown, Space } from "antd";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const changeLanguage = (lang) => {
    const params = new URLSearchParams(searchParams);
    params.set("locale", lang); // Set the locale query parameter
    router.push(`${pathname}?${params.toString()}`); // Navigate with the updated query
  };

  const languageOptions = [
    {
      key: "en",
      label: <span onClick={() => changeLanguage("en")}>English</span>,
    },
    {
      key: "ja",
      label: <span onClick={() => changeLanguage("ja")}>日本語</span>,
    },
    {
      key: "bn",
      label: <span onClick={() => changeLanguage("bn")}>বাংলা</span>,
    },
  ];

  return (
    <Dropdown menu={{ items: languageOptions }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space className="nav-item  px-3 py-2 rounded-md">Language</Space>
      </a>
    </Dropdown>
  );
};

export default LanguageSwitcher;
