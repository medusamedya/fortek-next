import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import Content from "@/src/data/pages/services/damper-uretimi.json";
import PartnersSection from "../components/sections/Partners";
import { useTranslation, Trans } from "react-i18next";

const Hizmetlerimiz = () => {

    const { t } = useTranslation('service');

    return (
        <Layouts footer={2}>
            <PageBanner
                pageName={`${t("page_title")}`}
                pageTitle={`${t("page_title")}`}
                srcLink="/img/banner/bc-1.jpg"
            />
            {/* call to action */}
            <div className="container">
                <div className="mil-divider" />
            </div>
            {/* steps */}
            <section className="mil-p-120-90">
                <div
                    className="mil-deco"
                    style={{ bottom: 0, right: "35%", transform: "rotate(180deg)" }}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-12 mil-mb-90">
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                                {t('page_subtitle')}
                            </span>
                            <h2 className="mil-mb-30">
                                {t('main_title')}
                            </h2>
                            <p className="mil-dark">
                                <Trans
                                    i18nKey="main_description"
                                    t={t}
                                    components={{ 1: <strong /> }}
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* steps end */}
            <div className="container">
                <div className="mil-divider" />
            </div>
            <section className="mil-p-120-90">
                <div className="container ">
                    <div className="row">
                        <div className="col-12 mil-mb-90">
                            <p className="mil-dark">
                                {t('mid_description')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="mil-divider" />
            </div>
            {/* services */}
            <section className="mil-services mil-p-120-90">
                <div
                    className="mil-deco"
                    style={{ bottom: 0, right: "40%", transform: "rotate(180deg)" }}
                />
                <div className="container">
                    {/* <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            High Quality and Performance
          </span> */}
                    <h2 className="mil-mb-90">
                        {t('section_main_title')}
                    </h2>
                    <div className="row mil-mb-30-adapt">
                        <div className="col-lg-6 col-xl-6">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <img src="/img/icons/md/1.svg" alt="icon" />
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">01</span> {t('section_li_1_title')}
                                    </h5>
                                    <p>
                                        {t('section_li_1_description')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <img src="/img/icons/md/2.svg" alt="icon" />
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">02</span> {t('section_li_2_title')}
                                    </h5>
                                    <p>
                                        {t('section_li_2_description')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <img src="/img/icons/md/3.svg" alt="icon" />
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">03</span> {t('section_li_3_title')}
                                    </h5>
                                    <p>
                                        {t('section_li_3_description')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* services end */}
            {/* services */}
            <section>
                <div className="container mil-mb-120">
                    <div className="row">
                        <div className="mil-mb-60">
                            <h2 className="mil-mb-30">
                                {t('project_main_title')}
                            </h2>
                            <p className="mil-dark">
                                <Trans
                                    i18nKey="project_main_description"
                                    t={t}
                                    components={{ 1: <strong /> }}
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mil-mb-120">
                    <div className="row">
                        <div className="mil-mb-60">
                            <h2 className="mil-mb-30">
                                {t('product_main_title')}
                            </h2>
                            <p className="mil-dark">
                                <Trans
                                    i18nKey="product_main_description"
                                    t={t}
                                    components={{ 1: <strong /> }}
                                />
                            </p>
                        </div>
                    </div>
                    <div className="row mil-mb-30-adapt">
                        <div className="col-lg-4 col-xl-4">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">01</span> {t('product_li_1_title')}
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-4">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">02</span> {t('product_li_2_title')}
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-4">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">03</span> {t('product_li_3_title')}
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-4">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">04</span> {t('product_li_4_title')}
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-4">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">05</span> {t('product_li_5_title')}
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-4">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">06</span> {t('product_li_6_title')}
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-4">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">07</span> {t('product_li_7_title')}
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-4">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">08</span> {t('product_li_8_title')}
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-4">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">09</span> {t('product_li_9_title')}
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-4">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">10</span> {t('product_li_10_title')}
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-4">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">11</span> {t('product_li_11_title')}
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-4">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">12</span> {t('product_li_12_title')}
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-4">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">13</span> {t('product_li_13_title')}
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-4">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">14</span> {t('product_li_14_title')}
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-4">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">15</span> {t('product_li_15_title')}
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-4">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">16</span> {t('product_li_16_title')}
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-4">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">17</span> {t('product_li_17_title')}
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-4">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">18</span> {t('product_li_18_title')}
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-4">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">19</span> {t('product_li_19_title')}
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layouts>
    );
};
export default Hizmetlerimiz;
