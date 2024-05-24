import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const SertifikaBanner = () => {
  return (
    <section className="mil-banners mil-p-120-0">
      <div className="container">
        <Swiper
          {...sliderProps.milBannersSlider}
          className="swiper-container mil-banners-slider"
        >
          <SwiperSlide className="swiper-slide">
            <div className="mil-banner-slide">
              <img
                src="img/sertifika/sertifikaBanner1.jpg" 
                alt="banner"
                style={{ background: 'linear-gradient(90deg, rgba(243, 243, 244, 0) 17%, rgb(243, 243, 244) 59%)!important' }}
                className="mil-banner-bg"
                data-swiper-parallax={-200}
                data-swiper-parallax-scale="1.1"
              />
              <div className="mil-overlay" />
              <div className="row justify-content-end align-items-center">
                <div
                  className="col-lg-8 col-xl-6"
                  data-swiper-parallax-y={-300}
                >
                  <div className="mil-icon-box mil-sb-inner mil-relative">
                    <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                      <img src="img/icons/md/1.svg" alt="icon" />
                    </div>
                    <h4 className="mil-mb-30">Müşteri Memnunieti İlkesi</h4>
                    <div className="mil-divider mil-divider-left mil-mb-30" />
                    <p>
                 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="mil-banner-slide">
              <img
                src="img/sertifika/sertifikaBanner1.jpg"
                alt="banner"
                style={{ background: 'linear-gradient(90deg, rgba(243, 243, 244, 0) 17%, rgb(243, 243, 244) 59%)!important' }}
                className="mil-banner-bg"
                data-swiper-parallax={-100}
                data-swiper-parallax-scale="1.1"
              />
              <div className="mil-overlay" />
              <div className="row justify-content-end align-items-center">
                <div
                  className="col-lg-8 col-xl-6"
                  data-swiper-parallax-y={-300}
                >
                  <div className="mil-icon-box mil-sb-inner mil-relative">
                    <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                      <img src="img/icons/md/2.svg" alt="icon" />
                    </div>
                    <h4 className="mil-mb-30">Gelişmiş Ürün Geliştirme Prosedürleri</h4>
                    <div className="mil-divider mil-divider-left mil-mb-30" />
                    <p>
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
         
          <div className="mil-banners-pagination" />
        </Swiper>
      </div>
    </section>
  );
};
export default SertifikaBanner;
