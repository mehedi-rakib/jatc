"use client";

import { Button, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  const getCurrentLanguageFlag = () => {
    switch(i18n.language) {
      case 'en':
        return <img src="/usa.png" alt="English" width="24" height="16" className="rounded-sm" />;
      case 'ja':
        return <img src="/jp.png" alt="Japanese" width="24" height="16" className="rounded-sm" />;
      case 'bn':
        return <img src="/bd.jpg" alt="Bengali" width="24" height="16" className="rounded-sm" />;
      default:
        return <img src="/usa.png" alt="English" width="24" height="16" className="rounded-sm" />;
    }
  };
  
  const items = [
    {
      key: 'en',
      label: <img src="/usa.png" alt="English" width="24" height="16" className="rounded-sm" />,
      onClick: () => changeLanguage('en'),
    },
    {
      key: 'ja',
      label: <img src="/jp.png" alt="Japanese" width="24" height="16" className="rounded-sm" />,
      onClick: () => changeLanguage('ja'),
    },
    {
      key: 'bn',
      label: <img src="/bd.jpg" alt="Bengali" width="24" height="16" className="rounded-sm" />,
      onClick: () => changeLanguage('bn'),
    },
  ];
  
  return (
    <Dropdown menu={{ items }} placement="bottomRight" arrow>
      <Button 
        type="text" 
        className="flex items-center text-white hover:text-white/80 hover:bg-transparent"
      >
        {getCurrentLanguageFlag()}
        <DownOutlined className="ml-1" />
      </Button>
    </Dropdown>
  );
} 