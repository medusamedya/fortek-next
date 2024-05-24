import ContactForm from "@/src/components/ContactForm";
import PageBanner from "@/src/components/PageBanner";
import Divider from "@/src/components/sections/Divider";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
import PartnersSection from "../components/sections/Partners";
import dynamic from "next/dynamic";
import { useTranslation, Trans } from 'next-i18next';
import { useEffect, useState } from "react";

const HeroSlideshowSlider = dynamic( () => import("../components/sliders/HeroSlideshow"), { ssr: false } );

const Index = () => {

  const { t } = useTranslation('home');

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
      return null
  }

  return (
    <Layouts>
      <HeroSlideshowSlider />

      {/* call to action */}
      <section className="mil-p-120-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-xl-6">
              <h4 className="mil-mb-60">
                <Trans
                  i18nKey="about_text"
                  t={t}
                  components={{ 1: <span className="mil-accent" /> }}
                />
              </h4>
            </div>
            <div className="col-lg-12 col-xl-6">
            
            </div>
          </div>
        </div>
      </section>
      {/* call to action end */}
      {/* about */}
      <section className="mil-deep-bg mil-p-120-60">
        <div
          className="mil-deco"
          style={{ top: 0, left: "35%" }}
        />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-60">
              <div className="mil-circle-illustration">
                <div className="mil-circle-bg" />
                <div className="mil-image-frame">
                  <img
                    src="/uploads/biz kimiz.png"
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {/* <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Fortek:
              </span> */}
              <h2 className="mil-mb-50">
                <Trans
                  i18nKey="intro_title"
                  t={t}
                  components={{ 1: <span className="mil-accent" /> }}
                />
              </h2>
              <p className="mil-mb-50">
                {t('intro_description')}
              </p>
              <div className="row align-items-end">
                <div className="col-xl-7">
                  <ul className="mil-check-icon-list mil-mb-60">
                    <li>
                      <img
                        src="/img/icons/sm/12.svg"
                        alt="icon"
                      />
                      <span className="mil-dark">
                        {t('intro_li_1')}
                      </span>
                    </li>
                    <li>
                      <img
                        src="/img/icons/sm/12.svg"
                        alt="icon"
                      />
                      <span className="mil-dark">
                        {t('intro_li_2')}
                      </span>
                    </li>
                    <li>
                      <img
                        src="/img/icons/sm/12.svg"
                        alt="icon"
                      />
                      <span className="mil-dark">
                        {t('intro_li_3')}
                      </span>
                    </li>
                    <li>
                      <img
                        src="/img/icons/sm/12.svg"
                        alt="icon"
                      />
                      <span className="mil-dark">
                        {t('intro_li_4')}
                      </span>
                    </li>
                  </ul>
                </div>
                {/* <div className="col-xl-5">
                  <Link
                    href="team-single"
                    className="mil-post-sm mil-mb-60"
                  >
                    <div className="mil-cover-frame">
                      <img
                        src="img/faces/1.jpg"
                        alt="cover"
                      />
                    </div>
                    <div className="mil-description">
                      <h4 className="mil-font-3 mil-accent">Jane Meldrum</h4>
                      <p className="mil-text-sm">CEO &amp; Co-Founder</p>
                    </div>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about end */}
      {/* counters */}
      <section className="mil-p-120-60">
        <div
          className="mil-deco"
          style={{ top: 0, left: "25%" }}
        />
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              {/* <div className="mil-h1">
                20<span className="mil-accent">+</span>
              </div>
              <h6 className="mil-mb-60">Yıllık Deneyim</h6> */}
              <h2 className="mil-mb-60">
                {t('info_title')}
              </h2>
            </div>
            <div className="col-lg-6">
              <h3 className="mil-mb-60">
                <Trans
                  i18nKey="info_description"
                  t={t}
                  components={{ 1: <span className="mil-accent" /> }}
                />
              </h3>
              <div className="row align-items-end">
                <div className="col-xl-7">
                  <ul className="mil-check-icon-list mil-mb-60">
                    <li>
                      <img
                        src="/img/icons/sm/12.svg"
                        alt="icon"
                      />
                      <span className="mil-dark">
                          {t('info_li_1')}
                      </span>
                    </li>
                    <li>
                      <img
                        src="/img/icons/sm/12.svg"
                        alt="icon"
                      />
                      <span className="mil-dark">
                        {t('info_li_2')}
                      </span>
                    </li>
                    <li>
                      <img
                        src="/img/icons/sm/12.svg"
                        alt="icon"
                      />
                      <span className="mil-dark">
                        {t('info_li_3')}
                      </span>
                    </li>
                    <li>
                      <img
                        src="/img/icons/sm/12.svg"
                        alt="icon"
                      />
                      <span className="mil-dark">
                        {t('info_li_4')}
                      </span>
                    </li>
                  </ul>
                </div>
                {/* <div className="col-xl-5">
                  <Link
                    href="team-single"
                    className="mil-post-sm mil-mb-60"
                  >
                    <div className="mil-cover-frame">
                      <img
                        src="img/faces/1.jpg"
                        alt="cover"
                      />
                    </div>
                    <div className="mil-description">
                      <h4 className="mil-font-3 mil-accent">Jane Meldrum</h4>
                      <p className="mil-text-sm">CEO &amp; Co-Founder</p>
                    </div>
                  </Link>
                </div> */}
              </div>
              {/* <div className="row">
                <div className="col-lg-6">
                  <h6 className="mil-mb-30">
                    <span className="mil-accent">16+</span>&nbsp; Software
                    Development
                  </h6>
                  <div className="mil-divider mil-divider-left mil-mb-60" />
                </div>
                <div className="col-lg-6">
                  <h6 className="mil-mb-30">
                    <span className="mil-accent">3+</span>&nbsp; Years Client
                    Engagement
                  </h6>
                  <div className="mil-divider mil-divider-left mil-mb-60" />
                </div>
                <div className="col-lg-6">
                  <h6 className="mil-mb-30">
                    <span className="mil-accent">360+</span>&nbsp; App
                    Development
                  </h6>
                  <div className="mil-divider mil-divider-left mil-mb-60" />
                </div>
                <div className="col-lg-6">
                  <h6 className="mil-mb-30">
                    <span className="mil-accent">520+</span>&nbsp; Web
                    Development
                  </h6>
                  <div className="mil-divider mil-divider-left mil-mb-60" />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* counters end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      
      {/* about */}
      <section className="mil-deep-bg mil-p-120-60">
        <div
          className="mil-deco"
          style={{ top: 0, right: "15%" }}
        />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-60">
              <div className="mil-circle-illustration">
                <div className="mil-circle-bg" />
                <div className="mil-image-frame">
                  <img
                    src="/uploads/vizyon.png"
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mil-mb-60">
              <h2 className="mil-mb-50">{t('mission_title')}</h2>
              <p className="mil-mb-50">
                {t('mission')}
              </p>
              {/* <ul className="mil-simple-list">
                <li>Accelerate innovation.</li>
                <li>With world class tech teams.</li>
                <li>Our all service offerings to enhance.</li>
              </ul> */}
              <h2 className="mil-mb-50">{t('vision_title')}</h2>
              <p className="mil-mb-50">
                {t('vision')}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* about end */}
      {/* features */}
      <section className="mil-p-120-120">
        <div className="container">
          {/* <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            Discover Our Company
          </span> */}
          <h2 className="mil-mb-120">
            {t('service_title')}
          </h2>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img
                    src="/img/icons/md/6.svg"
                    alt="icon"
                  />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">{t('service_li_1_title')}</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  {t('service_li_1_description')}
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img
                    src="/img/icons/md/10.svg"
                    alt="icon"
                  />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">{t('service_li_2_title')}</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  {t('service_li_2_description')}
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img
                    src="/img/icons/md/2.svg"
                    alt="icon"
                  />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">{t('service_li_3_title')}</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  {t('service_li_3_description')}
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img
                    src="/img/icons/md/4.svg"
                    alt="icon"
                  />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">{t('service_li_4_title')}</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  {t('service_li_4_description')}
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img
                    src="/img/icons/md/5.svg"
                    alt="icon"
                  />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">
                  {t('service_li_5_title')}
                </h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  {t('service_li_5_description')}
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
        </div>
      </section>
      <section className="mil-deep-bg mil-p-120-60">
        <div
          className="mil-deco"
          style={{ top: 0, right: "25%" }}
        />
        <div className="container">
        
          <h2 className="mil-mb-120">
              <Trans
                i18nKey="banner_title"
                t={t}
                components={{ 1: <span className="mil-accent" /> }}
              />
          </h2>
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img
                    src="/img/icons/md/10.svg"
                    alt="icon"
                  />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">ISO 9001:2015 </h4>
                  <p className="mil-box-text">
                    {t('banner_li_1_description')}{" "}
                    <a
                      href="/img/pdf/IMG_20240301_0002.pdf"
                      download
                      className="mil-accent"
                    >
                      {t('banner_li_1_link')}{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img
                    src="img/icons/md/10.svg"
                    alt="icon"
                  />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">TS ENISO 12100:2011 CE</h4>
                  <p className="mil-box-text">
                    {t('banner_li_2_description')}{" "}
                    <a
                      href="/img/pdf/IMG_20240301_0001.pdf"
                      download
                      className="mil-accent"
                    >
                      {t('banner_li_2_link')}{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img
                    src="img/icons/md/10.svg"
                    alt="icon"
                  />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">"Stack Damper" - COC</h4>
                  <p className="mil-box-text">
                    {t('banner_li_3_description')}{" "}
                    <a
                      href="/img/pdf/IMG_20240220_0001.pdf"
                      download
                      className="mil-accent"
                    >
                      {t('banner_li_3_link')}{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </section>
      {/* features end */}

      <Divider />

    
    </Layouts>
  );
};
export default Index;
