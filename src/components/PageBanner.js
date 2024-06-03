import Link from "next/link";
import { useTranslation } from "react-i18next";

const PageBanner = ({ pageTitle, pageName, srcLink = "" }) => {
  const { t } = useTranslation("common")

  return (
    <div className="mil-banner-sm mil-deep-bg">
      <img
        src={srcLink}
        alt="background"
        className="mil-background-image"
      />
      <div
        className="mil-deco mil-deco-accent"
        style={{ top: "47%", right: "10%", transform: "rotate(90deg)" }}
      />
      <div className="mil-banner-content">
        <div className="container mil-relative">
          <ul className="mil-breadcrumbs mil-mb-30">
            <li>
              <Link href="/">{t("home")}</Link>
            </li>
            <li>
              <a href="#">{pageName}</a>
            </li>
          </ul>
          <h2 className="mil-uppercase">{pageTitle}</h2>
        </div>
      </div>
    </div>
  );
};
export default PageBanner;
