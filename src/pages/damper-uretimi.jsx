import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import Content from "@/src/data/pages/services/damper-uretimi.json";
import PartnersSection from "../components/sections/Partners";

const Service1 = () => {
  return (
    <Layouts footer={2}>
      <PageBanner
        pageName={"Hizmetlerimiz"}
        pageTitle={`${Content.title}`}
      />
      {/* call to action */}
      <section className="mil-p-120-90">
        <div
          className="mil-deco"
          style={{ bottom: 0, right: "25%", transform: "rotate(180deg)" }}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="mil-hori-box mil-mb-30">
                <div className="mil-mr-30">
                  <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg">
                    <img src="img/icons/md/1.svg" alt="icon" />
                  </div>
                </div>
                <h5>
                    {Content.description}
                </h5>
              </div>
            </div>
            {/* <div className="col-lg-4">
              <div className="mil-adaptive-right">
                <a href="#." className="mil-button mil-border mil-mb-30">
                  <span>Get in Touch</span>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* call to action end */}
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
                {Content.section_services.pre_title}
              </span>
              <h2 className="mil-mb-30">
                {Content.section_services.title}
              </h2>
              <p className="mil-dark">
                {Content.section_services.description}  
              </p>
            </div>
          </div>
          <div className="row mil-mb-30-adapt">
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-circle mil-mb-30">
                  <span>01</span>
                </div>
                <h4 className="mil-mb-15">{Content.section_services.service01.title}</h4>
                <p>
                    {Content.section_services.service01.description}
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-lines mil-mb-30">
                  <span>02</span>
                </div>
                <h4 className="mil-mb-15">{Content.section_services.service02.title}</h4>
                <p>
                    {Content.section_services.service02.description}
                </p>

              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-mb-30">
                  <span>03</span>
                </div>
                <h4 className="mil-mb-15">{Content.section_services.service03.title}</h4>
                <p>
                    {Content.section_services.service03.description}
                </p>

              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-mb-30">
                  <span>04</span>
                </div>
                <h4 className="mil-mb-15">{Content.section_services.service04.title}</h4>
                <p>
                    {Content.section_services.service04.description}
                </p>

              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-circle mil-mb-30">
                  <span>05</span>
                </div>
                <h4 className="mil-mb-15">{Content.section_services.service05.title}</h4>
                <p>
                    {Content.section_services.service05.description}
                </p>

              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-lines mil-mb-30">
                  <span>06</span>
                </div>
                <h4 className="mil-mb-15">{Content.section_services.service06.title}</h4>
                <p>
                    {Content.section_services.service06.description}
                </p>
              </div>
            </div>
          </div>
          {/* <div className="row align-items-center">
            <div className="col-md-6 col-xl-6">
              <a href="#." className="mil-button mil-border mil-mb-30">
                <span>Tell us about your project</span>
              </a>
            </div>
            <div className="col-md-6 col-xl-6">
              <div className="mil-adaptive-right">
                <a href="#." className="mil-link mil-mb-30">
                  <span>See More</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      {/* steps end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* next step */}
      {/* <section className="mil-p-120-0">
        <div className="container">
          <div className="mil-text-center mil-mb-90">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              Safeguard Modern
            </span>
            <h2>Ready To Take The Next Step?</h2>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="mil-hover-card mil-mb-30">
                <h4 className="mil-mb-30">Get a Live Demo</h4>
                <p className="mil-mb-30">
                  Dissuade ecstatic and properly saw entirely sir why laughter
                  endeavor. In on my jointure horrible margaret suitable he
                  followed speedily. Indeed vanity excuse or mr lovers of on.
                </p>
                <a href="#." className="mil-link">
                  <span>Request a Free Demo</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mil-hover-card mil-mb-30">
                <h4 className="mil-mb-30">Start Now</h4>
                <p className="mil-mb-30">
                  Dissuade ecstatic and properly saw entirely sir why laughter
                  endeavor. In on my jointure horrible margaret suitable he
                  followed speedily. Indeed vanity excuse or mr lovers of on.
                </p>
                <a href="#." className="mil-link">
                  <span>Get In Touch</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* next step end */}

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
            {Content.section_products.title}
          </h2>
          <div className="row mil-mb-30-adapt">
            <div className="col-lg-6 col-xl-6">
              <div className="mil-service-item mil-without-lines mil-mb-60">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="img/icons/md/1.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">01</span> {Content.section_products.products1.title}
                  </h5>
                  <p>
                    {Content.section_products.products1.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="mil-service-item mil-without-lines mil-mb-60">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="img/icons/md/2.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">02</span> {Content.section_products.products2.title}   
                  </h5>
                  <p>
                    {Content.section_products.products2.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="mil-service-item mil-without-lines mil-mb-60">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="img/icons/md/3.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">03</span> {Content.section_products.products3.title}
                  </h5>
                  <p>
                    {Content.section_products.products3.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="mil-service-item mil-without-lines mil-mb-60">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="img/icons/md/4.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">04</span> {Content.section_products.products4.title}
                  </h5>
                  <p>
                    {Content.section_products.products4.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="mil-service-item mil-without-lines mil-mb-60">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="img/icons/md/5.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">05</span> {Content.section_products.products5.title}
                  </h5>
                  <p>
                    {Content.section_products.products5.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="mil-service-item mil-without-lines mil-mb-60">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="img/icons/md/6.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">06</span> {Content.section_products.products6.title}
                  </h5>
                  <p>
                    {Content.section_products.products6.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="mil-service-item mil-without-lines mil-mb-60">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src="img/icons/md/6.svg" alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">07</span> {Content.section_products.products7.title}
                  </h5>
                  <p>
                    {Content.section_products.products7.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row align-items-center">
            <div className="col-md-6 col-xl-6">
              <a href="#." className="mil-button mil-border mil-mb-30">
                <span>Talk To Our SaaS Experts</span>
              </a>
            </div>
            <div className="col-md-6 col-xl-6">
              <div className="mil-adaptive-right">
                <a href="#." className="mil-link mil-mb-30">
                  <span>See More</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      {/* services end */}
      {/* services */}
      {/* <section className="mil-gradient-bg mil-deco-right mil-p-120-0">
        <div
          className="mil-deco mil-deco-accent"
          style={{ top: 0, left: "5%" }}
        />
        <div className="container">
          <div className="mil-text-center mil-mb-90">
            <span className="mil-suptitle  mil-light mil-suptitle-2 mil-mb-30">
              Always The Best
            </span>
            <h2 className="mil-light mil-mb-30">
              Types Of <span className="mil-accent">SaaS Applications</span> We
              Deliver
            </h2>
            <p className="mil-light-soft">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor <br />
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row mil-mb-30-adapt">
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="img/icons/sm/6.svg" alt="icon" />
                </div>
                <p className="mil-light">CRMs Platforms</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="img/icons/sm/2.svg" alt="icon" />
                </div>
                <p className="mil-light">ERPs Platforms</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="img/icons/sm/7.svg" alt="icon" />
                </div>
                <p className="mil-light">Marketing Software</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="img/icons/sm/3.svg" alt="icon" />
                </div>
                <p className="mil-light">Project Management Systems</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="img/icons/sm/5.svg" alt="icon" />
                </div>
                <p className="mil-light">Accounting Systems</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="img/icons/sm/1.svg" alt="icon" />
                </div>
                <p className="mil-light">Document Auto. Solutions</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="img/icons/sm/4.svg" alt="icon" />
                </div>
                <p className="mil-light">Cybersecurity Platforms</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-icon-box-head mil-long mil-mob-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-sm mil-light">
                  <img src="img/icons/sm/8.svg" alt="icon" />
                </div>
                <p className="mil-light">HR/HRM Software</p>
              </div>
            </div>
          </div>
          <div className="mil-text-center">
            <a href="#." className="mil-button mil-border mil-light mil-mb-30">
              <span>Talk To Our SaaS Experts</span>
            </a>
          </div>
        </div>
      </section> */}
    </Layouts>
  );
};
export default Service1;
