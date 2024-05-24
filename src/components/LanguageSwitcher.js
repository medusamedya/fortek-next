import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { US, ES, TR } from 'country-flag-icons/react/3x2';
import { useState, useRef, useEffect } from 'react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    router.push({ pathname, query }, asPath, { locale: lng });
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getFlagComponent = (lng) => {
    switch (lng) {
      case 'tr':
        return <TR title="Türkçe" style={{ width: '20px' }} />;
      case 'en':
        return <US title="English" style={{ width: '20px'  }} />;
      case 'es':
        return <ES title="Español" style={{ width: '20px' }} />;
      default:
        return null;
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <button 
        onClick={() => setDropdownOpen(!dropdownOpen)} 
        style={{ 
          border: "none",
          cursor: "pointer",
          marginTop: "5px"
        }}
      >
        {getFlagComponent(i18n.language)}
      </button>
      {dropdownOpen && (
        <ul ref={dropdownRef} style={{
          listStyleType: 'none',
          margin: '0',
          position: 'absolute',
          top: '100%',
          borderRadius: "5px",
          display: "flex",
          padding: "5px",
          flexDirection: "column",
          left: '0',
          backgroundColor: 'white',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          zIndex: '1000',
        }}>
          <li onClick={() => changeLanguage('tr')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '5px' }}>
            <TR title="Türkçe" style={{ width: '20px', marginRight: '5px' }} />
            <span style={{ fontSize: "13px", color: "#000" }}>Türkçe</span>
          </li>
           <li onClick={() => changeLanguage('en')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '5px' }}>
            <US title="English" style={{ width: '20px', marginRight: '5px' }} />
            <span style={{ fontSize: "13px", color: "#000" }}>English</span>
          </li>
          <li onClick={() => changeLanguage('es')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '5px' }}>
            <ES title="Español" style={{ width: '20px', marginRight: '5px' }} />
            <span style={{ fontSize: "13px", color: "#000" }}>Espanol</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
