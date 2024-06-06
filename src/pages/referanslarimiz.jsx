import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import dynamic from "next/dynamic";
import PartnersSection from "../components/sections/Partners";

import { getSortedPostsData } from "../lib/posts";
import { useTranslation, Trans } from "react-i18next";

const SertifikaBanner = dynamic(
  () => import("@/src/components/sliders/SertifikaBanner"),
  {
    ssr: false,
  }
);
const LatestPostsSlider = dynamic(() => import("../components/sliders/LatestPosts"), { ssr: false });

const Careers = (props) => {

  const { t } = useTranslation('certi');

  return (
    <Layouts>
      <PageBanner 
        pageName={`${t("page_tite")}`} 
        pageTitle={`${t("page_tite")}`}
        srcLink="/img/banner/bc-1.jpg"
      />

     <div className="mil-partners mil-partners-spaces">
        <div className="container">
          <div className="mil-partners-frame">
            <a href="#.">
              <img src="/img/reference/aksa.jpg" alt="partner" />
            </a>
            <a href="#.">
              <img src="/img/reference/clet.jpeg" alt="partner" />
            </a>
            <a href="#.">
              <img src="/img/reference/enpro.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="/img/reference/erdemir.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="/img/reference/hamburger.png" alt="partner" />
            </a>
            
          </div>
          <div className="mil-partners-frame">
            <a href="#.">
              <img src="/img/reference/kartonsan.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="/img/reference/kasar-dual.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="/img/reference/kastamonu.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="/img/reference/mimsan.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="/img/reference/nuh.png" alt="partner" />
            </a>
            
          </div>
          <div className="mil-partners-frame">
            <a href="#.">
              <img src="/img/reference/nuratli-karton.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="/img/reference/oyak.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="/img/reference/petkim.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="/img/reference/tosyali.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="/img/reference/tupras.png" alt="partner" />
            </a>
          </div>
        </div>
      </div>

 {/* counters */}
  <section className="mil-counters mil-deep-bg mil-p-120-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="mil-mb-30">
                <div className="mil-divider mil-divider-left mil-mb-30 mil-text-center" />
                <h5 className="mil-text-center mb-2">{t("main_li_1")}</h5>
                <div className="mil-text-center"> <img src="/img/sertifika/LRcertifiedlogo.png" style={{width : '50%'}} alt="" /> </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="mil-mb-30">
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <h5 className="mil-text-center mb-2">{t("main_li_2")}</h5>
                <div className="mil-text-center"> <img src="/img/sertifika/qualityicon.png" style={{width : '50%'}} alt="" /> </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="mil-mb-30">
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <h5 className="mil-text-center mb-2">{t("main_li_3")}</h5>
                <div className="mil-text-center"> <img src="/img/sertifika/Fortek.png" style={{width : '50%'}} alt="" /> </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="mil-mb-30">
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <h5 className="mil-text-center mb-2">{t("main_li_4")}</h5>
                <div className="mil-text-center"> <img src="/img/sertifika/recycleicon.png" style={{width : '50%'}} alt="" /> </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* counters end */}

      {/* careers */}
      <section className="mil-careers mil-p-120-50 mil-mt-60">
        <div className="container">
          <div className="col-xl-12">
            <h3 className="mil-mb-30">
                <Trans
                  i18nKey="quality_title"
                  t={t}
                  components={{ 1: <span className="mil-accent" /> }}
                />
            </h3>
            <p>
              <Trans
                  i18nKey="quality_description"
                  t={t}
                  components={{ 1: <span className="mil-accent" /> }}
              />
            </p>
          </div>
        </div>
      </section>
      {/* careers end */}


     

      {/* careers */}
      <section className="mil-careers mil-p-120-50 mil-mt-60">
        <div className="container">
          <div className="col-xl-12">
            <h3 className="mil-mb-30">
                <Trans
                  i18nKey="fortek_itp_title"
                  t={t}
                  components={{ 1: <span className="mil-accent" /> }}
                />
            </h3>
            <p>
              <Trans
                  i18nKey="fortek_itp_description"
                  t={t}
                  components={{ 1: <span className="mil-accent" /> }}
              />
            </p>
          </div>
        </div>
      </section>
      {/* careers end */}

      {/* careers */}
      <section className="mil-careers mil-p-120-50 mil-mt-60">
        <div className="container">
          <div className="col-xl-12">
           <h3 className="mil-mb-30">
                <Trans
                  i18nKey="health_title"
                  t={t}
                  components={{ 1: <span className="mil-accent" /> }}
                />
            </h3>
            <p>
              <Trans
                  i18nKey="health_description"
                  t={t}
                  components={{ 1: <span className="mil-accent" /> }}
              />
            </p>
          </div>
        </div>
      </section>
      {/* careers end */}


{/* counters */}
<section className="mil-counters mil-deep-bg mil-p-120-90 mil-mt-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="mil-mb-30">
                <div className="mil-divider mil-divider-left mil-mb-30 mil-text-center" />
                <h5 className="mil-text-center mb-2"><a href="uploads/CE_INDUSTRIALDAMPER.pdf">CE INDUSTRIAL DAMPER CERTIFICATE</a></h5>
                
              </div>
            </div>
            <div className="col-xl-3">
              <div className="mil-mb-30">
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <h5 className="mil-text-center mb-2"><a href="uploads/COC_STACKDAMPER.pdf">COC STACK DAMPER CERTIFICATE</a></h5>
               
              </div>
            </div>
            <div className="col-xl-3">
              <div className="mil-mb-30">
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <h5 className="mil-text-center mb-2"> <a href="uploads/EAC_INDUSTRIALDAMPER.pdf"> EAC INDUSTRIAL DAMPER CERTIFICATE</a></h5>
              
              </div>
            </div>
            <div className="col-xl-3">
              <div className="mil-mb-30">
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <h5 className="mil-text-center mb-2"><a href="uploads/ISO90012015.pdf">ISO 9001 2015 CERTIFICATE</a> </h5>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* counters end */}

    
      <div className="container mil-mt-60">
        <div className="mil-divider" />
      </div>

    </Layouts>
  );
};
export default Careers;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();

  return {
    props: {
      posts: allPosts,
    }
  }
}
