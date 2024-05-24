import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
import { useTranslation, Trans } from "react-i18next";

const Urunlerimiz = () => {

  const { t } = useTranslation("products")

  return (
    <Layouts>
      <PageBanner pageName={`${t("page_title")}`} pageTitle={`${t("page_title")}`} />
      {/* team */}
      <section className="mil-team mil-p-120-60">
        <div className="container">
          <h3 className="mil-mb-5">
             <Trans
                i18nKey="page_subtitle"
                t={t}
                components={{ 1: <span className="mil-accent" /> }}
              />
          </h3>
          <p className="mil-mb-120">
            {t("page_description")}
          </p>
          <div className="row ">
            <div className="col-sm-6 col-lg-6">
              <Link href="iki-yollu-damper" className="mil-team-card mil-mb-60">
                <div className="mil-image-frame mil-mb-30">
                  <img src="/uploads/2YOLLUDAMPER.jpeg" alt="Team member" />
                  <div className="mil-team-circle" />
                </div>
                <h4 className="mil-mb-10">
                  {t("li_1_title")}
                </h4>
                <p style={{color: 'black'}}>
                  {t("li_1_description")}
                </p>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-6">
              <Link href="uc-yollu-damper" className="mil-team-card mil-mb-60">
                <div className="mil-image-frame mil-mb-30">
                  <img src="/uploads/3YOLLUDAMPER.jpeg" alt="Team member" />
                  <div className="mil-team-circle" />
                </div>
                 <h4 className="mil-mb-10">
                  {t("li_2_title")}
                </h4>
                <p style={{color: 'black'}}>
                  {t("li_2_description")}
                </p>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-6">
              <Link
                href="giyotin-damper"
                className="mil-team-card mil-mb-60 mil-mb-30"
              >
                <div className="mil-image-frame mil-mb-30">
                  <img src="/uploads/GİYOTİNDAMPER.jpeg" alt="Team member" />
                  <div className="mil-team-circle" />
                </div>
                 <h4 className="mil-mb-10">
                  {t("li_3_title")}
                </h4>
                <p style={{color: 'black'}}>
                  {t("li_3_description")}
                </p>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-6">
              <Link href="cok-kanatli-damper" className="mil-team-card mil-mb-60">
                <div className="mil-image-frame mil-mb-30">
                  <img src="/uploads/ÇOKKANATLIDAMPER.jpeg" alt="Team member" />
                  <div className="mil-team-circle" />
                </div>
                <h4 className="mil-mb-10">
                  {t("li_4_title")}
                </h4>
                <p style={{color: 'black'}}>
                  {t("li_4_description")}
                </p>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-6">
              <Link href="sizdirmazlik-hava-damper" className="mil-team-card mil-mb-60">
                <div className="mil-image-frame mil-mb-30">
                  <img src="/uploads/sızdırmazlık_921x950.png" alt="Team member" />
                  <div className="mil-team-circle" />
                </div>
                 <h4 className="mil-mb-10">
                  {t("li_5_title")}
                </h4>
                <p style={{color: 'black'}}>
                  {t("li_5_description")}
                </p>
              </Link>
            </div>
           
          </div>
        </div>
      </section>
      {/* team end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
     
     
    </Layouts>
  );
};
export default Urunlerimiz;
