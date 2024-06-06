import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { LastPosts } from "../components/last-posts";
const Blog = () => {

  const { t: a } = useTranslation('blog_1');
  const { t: b } = useTranslation('blog_2');
  const { t: c } = useTranslation('blog_3');


  return (
    <Layouts footer={2}>
      <PageBanner
        pageName={"Blog"}
        pageTitle={"Blog"}
        srcLink="/img/banner/bc-2.jpg"
      />
      {/* blog */}
      <section className="mil-blog mil-p-120-0">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 col-xl-8 mil-mb-120">
              <Link
                href="/damper-inovasyon"
                className="mil-card mil-mb-60"
              >
                <div className="mil-cover-frame">
                  <img
                    src="/uploads/mühendislik çözümleri_1000x667.png"
                    alt="project"
                  />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <ul className="mil-dot-list mil-text-sm mil-mb-15">
                      <li>29 Oct. 2023</li>
                    </ul>
                    <h4>
                      {a('blog_title')}
                    </h4>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      {a('blog_text_1')}
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                href="/enerji-ve-surdurebilirlik"
                className="mil-card mil-mb-60"
              >
                <div className="mil-cover-frame">
                  <img
                    src="/uploads/enerji verimliliği_1000x667.png"
                    alt="project"
                  />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <ul className="mil-dot-list mil-text-sm mil-mb-15">
                      <li>29 Oct. 2023</li>
                    </ul>
                    <h4>
                      {b('blog_title')}
                    </h4>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      {b('blog_text_1')}
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                href="/ozellestirilmis-damper"
                className="mil-card mil-mb-60"
              >
                <div className="mil-cover-frame">
                  <img
                    src="/uploads/endüstriyel tesisler_1000x667.png"
                    alt="project"
                  />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <ul className="mil-dot-list mil-text-sm mil-mb-15">
                      <li>29 Oct. 2023</li>
                    </ul>
                    <h4>
                      {c('blog_title')}
                    </h4>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      {c('blog_text_1')}
                    </p>
                  </div>
                </div>
              </Link>
              <div className="mil-divider mil-mb-60" />
              {/* <div className="mil-pagination mil-hidden-arrows">
                <div className="mil-slider-nav">
                  <div className="mil-slider-btn-prev mil-blog-prev">
                    <i className="fas fa-arrow-left" />
                    <span className="mil-h6">Prev</span>
                  </div>
                </div>
                <ul className="mil-pagination-numbers">
                  <li className="mil-active">
                    <a href="#.">1</a>
                  </li>
                  <li>
                    <a href="#.">2</a>
                  </li>
                  <li>
                    <a href="#.">3</a>
                  </li>
                </ul>
                <div className="mil-slider-nav">
                  <div className="mil-slider-btn-next mil-blog-next">
                    <span className="mil-h6">Next</span>
                    <i className="fas fa-arrow-right" />
                  </div>
                </div>
              </div> */}
            </div>
            <div className="col-lg-4 col-xl-3 mil-mb-120">
              <LastPosts />
              <div className="mil-divider mil-mb-60" />
            </div>
          </div>
        </div>
      </section>
      {/* blog end */}
    </Layouts>
  );
};
export default Blog;
