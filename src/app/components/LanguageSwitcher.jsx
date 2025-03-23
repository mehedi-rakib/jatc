"use client";

import { Button, Dropdown } from 'antd';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const getCurrentLanguageFlag = () => {
    switch(i18n.language) {
      case 'en':
        return <img src="/flags/usa.svg" alt="USA" width="32" height="32" className="rounded-sm object-cover" />;
      case 'ja':
        return <img src="/flags/japan.svg" alt="Japan" width="32" height="32" className="rounded-sm object-cover" />;
      case 'bn':
        return <img src="/flags/bangladesh.svg" alt="Bangladesh" width="32" height="32" className="rounded-sm object-cover" />;
      default:
        return <img src="/flags/usa.svg" alt="USA" width="32" height="32" className="rounded-sm object-cover" />;
    }
  };

  const items = [
    {
      key: 'en',
      label: <img src="/flags/usa.svg" alt="USA" width="32" height="32" className="rounded-sm object-cover" />,
      onClick: () => changeLanguage('en'),
    },
    {
      key: 'ja',
      label: <img src="/flags/japan.svg" alt="Japan" width="32" height="32" className="rounded-sm object-cover" />,
      onClick: () => changeLanguage('ja'),
    },
    {
      key: 'bn',
      label: <img src="/flags/bangladesh.svg" alt="Bangladesh" width="32" height="32" className="rounded-sm object-cover" />,
      onClick: () => changeLanguage('bn'),
    },
  ];

  return (
    <>
      {/* Mobile view - always visible */}
      <div className="md:hidden flex gap-2 p-2">
        <Button 
          type="text" 
          onClick={() => changeLanguage('en')}
          className="p-1 hover:bg-white/10 rounded"
        >
          <img src="/flags/usa.svg" alt="USA" width="32" height="32" className="rounded-sm object-cover" />
        </Button>
        <Button 
          type="text" 
          onClick={() => changeLanguage('ja')}
          className="p-1 hover:bg-white/10 rounded"
        >
          <img src="/flags/japan.svg" alt="Japan" width="32" height="32" className="rounded-sm object-cover" />
        </Button>
        <Button 
          type="text" 
          onClick={() => changeLanguage('bn')}
          className="p-1 hover:bg-white/10 rounded"
        >
          <img src="/flags/bangladesh.svg" alt="Bangladesh" width="32" height="32" className="rounded-sm object-cover" />
        </Button>
      </div>

      {/* Desktop view - dropdown */}
      <div className="hidden md:block">
        <Dropdown 
          menu={{ items }} 
          placement="bottomRight" 
          arrow
          trigger={['click']}
        >
          <Button 
            type="text" 
            className="flex items-center text-white hover:text-white/80 hover:bg-transparent p-2"
          >
            {getCurrentLanguageFlag()}
          </Button>
        </Dropdown>
      </div>
    </>
  );
} 