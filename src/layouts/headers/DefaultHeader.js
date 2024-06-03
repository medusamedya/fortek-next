import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import LanguageSwitcher from "@/src/components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const DefaultHeader = ({ transparent, headerTop, extarClass }) => {

  const { t } = useTranslation('common');


  const [toggle, setToggle] = useState(false);
  const [imageWidth, setImageWidth] = useState(400); // Default width
  const [imageHeight, setImageHeight] = useState(400); // Default width

  const updateImageWidth = () => {
    // Get the screen width
    const screenWidth = window.innerWidth;


    

    // Set different image widths based on screen size
    if (screenWidth <= 768) {
      setImageWidth(220); // Adjust the width for smaller screens
      setImageHeight(110); // Adjust the width for smaller screens
    } 

    if (screenWidth < 1024 && screenWidth > 768) {
      setImageWidth(280); // Adjust the width for smaller screens
      setImageHeight(120); // Adjust the width for smaller screens
    } else if (screenWidth > 1024) {
      setImageWidth(400); // Default width for larger screens
      setImageHeight(180); // Adjust the width for smaller screens
    }

  };

  // Listen for window resize events to update image width dynamically
  useEffect(() => {
    // Call the function initially
    updateImageWidth();

    // Add event listener for window resize
    window.addEventListener('resize', updateImageWidth);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateImageWidth);
    };
  }, []); // Empty dependency array to run only once on component mount

  return (
    <div
      className={`mil-top-position mil-fixed ${extarClass ? extarClass : ""}`}
    >
      <div
        className={`mil-top-panel ${
          transparent ? "mil-top-panel-transparent mil-animated" : ""
        }`}
      >
        {/* mil-top-panel-transparent */}
        <div className="container">
          <Link
            href="/"
            legacyBehavior
          >
           <Image 
           src={"/img/logo/061ec7a667-removebg-preview.png"}
           width={imageWidth}
           height={imageHeight}
           />

           
          </Link>
          <div className={`mil-navigation ${toggle ? "mil-active" : ""}`}>
            <nav>
              <ul>
                <li>
                  <Link href="/">{t("home")}</Link>
                  {/* <ul>
                    <li>
                      <Link href="home-2">Home V2</Link>
                    </li>
                    <li>
                      <Link href="about">About us</Link>
                    </li>
                    <li>
                      <Link href="team">Team</Link>
                    </li>
                    <li>
                      <Link href="team-single">Team Member</Link>
                    </li>
                    <li>
                      <Link href="careers">Careers</Link>
                    </li>
                    <li>
                      <Link href="prices">Prices</Link>
                    </li>
                    <li>
                      <Link href="faq">FAQ</Link>
                    </li>
                    <li>
                      <Link href="event">Event</Link>
                    </li>
                  </ul> */}
                </li>
                {/* <li>
                  <Link href="portfolio">Case Studies</Link>
                </li> */}
                {/* <li>
                  <Link href="/about">Hakkımızda</Link>
                </li> */}
                <li className="mil-has-children">
                  <Link href={"/hizmetlerimiz"}> {t("services")}</Link>
                </li>
                <li className="mil-has-children">
                  <Link href="/urunlerimiz">{t("products")}</Link>
                  <ul>
                    <li>
                      <Link href="/iki-yollu-damper">{t("2-way-damper")}</Link>
                    </li>
                    <li>
                      <Link href="/uc-yollu-damper">{t("3-way-damper")}</Link>
                    </li>
                    <li>
                      <Link href="/giyotin-damper">{t("guillotine-damper")}</Link>
                    </li>
                    <li>
                      <Link href="/cok-kanatli-damper">{t("multi-damper")}</Link>
                    </li>
                    <li>
                      <Link href="/sizdirmazlik-hava-damper">{t("sealing-damper")}</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/referanslarimiz">{t("certificates")}</Link>
                </li>
                <li>
                  <Link href="/blog">{t("blog")}</Link>
                </li>
                <li>
                  <Link href="/contact">{t("contact_us")}</Link>
                </li>
                <li>
                  <LanguageSwitcher />
                </li>
                {/* <li className="mil-has-children">
                  <Link href="#.">Other</Link>
                  <ul>
                    <li>
                      <Link href="coming-soon">Coming Soon</Link>
                    </li>
                    <li>
                      <Link href="404">404</Link>
                    </li>
                  </ul>
                </li> */}
              </ul>
              {/* <div className="mil-search-icon">
                <svg
                  width={21}
                  height={20}
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.5848 19.7029C20.3908 19.8999 20.1358 19.997 19.8808 19.997C19.6268 19.997 19.3718 19.8999 19.1778 19.7029L15.5118 16.2199C13.9778 17.2549 12.3798 17.997 9.92584 17.997C4.98484 17.997 0.964844 13.959 0.964844 8.99695C0.964844 4.34995 4.98484 0.199951 9.92584 0.199951C14.8668 0.199951 18.8858 4.34995 18.8858 8.99695C18.8858 11.118 18.1468 13.68 16.9188 14.608L20.5848 18.29C20.9738 18.681 20.9738 19.3129 20.5848 19.7029ZM9.92584 1.99695C6.82984 1.99695 2.95684 5.13695 2.95684 8.99695C2.95684 12.857 6.82984 15.998 9.92584 15.998C11.8398 15.998 13.5758 15.217 14.8368 13.957C14.8408 13.952 14.8418 13.945 14.8468 13.941C14.8518 13.936 14.8578 13.935 14.8628 13.93C16.1168 12.663 16.8948 10.92 16.8948 8.99695C16.8948 5.13695 13.7678 1.99695 9.92584 1.99695Z"
                  />
                </svg>
              </div> */}
            </nav>
          </div>
          {/* mobile menu button */}
          <div
            className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <span />
          </div>
          {/* mobile menu button end */}
        </div>
      </div>
    </div>
  );
};
export default DefaultHeader;
