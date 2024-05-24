import ContactForm from "@/src/components/ContactForm";
import PageBanner from "@/src/components/PageBanner";
import Divider from "@/src/components/sections/Divider";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
import PartnersSection from "../../components/sections/Partners";

const About = () => {
  return (
    <Layouts>
      <PageBanner
        pageName={"Hakkımızda"}
        pageTitle={"Bİz Kİmİz?"}
      />
      {/* call to action */}
      <section className="mil-p-120-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-xl-6">
              <h4 className="mil-mb-60">
                Fortek, endüstriyel damperlerde,{" "}
                <span className="mil-accent">
                  yenilik ve mükemmellik sunar.
                </span>
                &nbsp; Uzmanlarımızla tanışın, farkımızı görün.
              </h4>
            </div>
            <div className="col-lg-12 col-xl-6">
              {/* <div className="mil-adaptive-right">
                <a
                  href="#."
                  className="mil-button mil-border mil-mr-15 mil-mb-30"
                >
                  <span>Talk To an Expert</span>
                </a>
                <a href="#." className="mil-button-with-label mil-mb-60">
                  <div className="mil-button mil-border mil-icon-button">
                    <span>
                      <i className="fas fa-play" />
                    </span>
                  </div>
                  <span className="mil-dark">Watch Video</span>
                </a>
              </div> */}
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
                    src="uploads/biz kimiz.png"
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
                Fortek: <br />
                <span className="mil-accent">Endüstriyel Yenilik</span> ile
                tanışın
              </h2>
              <p className="mil-mb-50">
                Fortek Endüstriyel, sektördeki tecrübesiyle damper
                teknolojilerinde devrim yaratıyor. Sürdürülebilir çözümlerimizle
                endüstrileri dönüştürüyor, geleceğe yön veriyoruz.
              </p>
              <div className="row align-items-end">
                <div className="col-xl-7">
                  <ul className="mil-check-icon-list mil-mb-60">
                    <li>
                      <img
                        src="img/icons/sm/12.svg"
                        alt="icon"
                      />
                      <span className="mil-dark">
                        Fortek, mühendislikte kalite ve yenilikçiliği garanti
                        eder.
                      </span>
                    </li>
                    <li>
                      <img
                        src="img/icons/sm/12.svg"
                        alt="icon"
                      />
                      <span className="mil-dark">
                        Müşteri ihtiyaçlarına özel Fortek mühendislik çözümleri.
                      </span>
                    </li>
                    <li>
                      <img
                        src="img/icons/sm/12.svg"
                        alt="icon"
                      />
                      <span className="mil-dark">
                        Endüstriyel verimliliği Fortek damperlerle artırın.
                      </span>
                    </li>
                    <li>
                      <img
                        src="img/icons/sm/12.svg"
                        alt="icon"
                      />
                      <span className="mil-dark">
                        Fortek ile güçlü ve güvenilir endüstriyel sistemler.
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
                Endüstriyel Başarınız İçin Kapsamlı Hizmetler
              </h2>
            </div>
            <div className="col-lg-6">
              <h3 className="mil-mb-60">
                Fortek ile <span className="mil-accent">yenilikçi</span> damper
                sitemleri ve mühendislik çözümlerinde &nbsp;
                <span className="mil-accent">ÖNCÜ OLUN.</span>
              </h3>
              <div className="row align-items-end">
                <div className="col-xl-7">
                  <ul className="mil-check-icon-list mil-mb-60">
                    <li>
                      <img
                        src="img/icons/sm/12.svg"
                        alt="icon"
                      />
                      <span className="mil-dark">
                        Yenilikçi Damper Tasarımları
                      </span>
                    </li>
                    <li>
                      <img
                        src="img/icons/sm/12.svg"
                        alt="icon"
                      />
                      <span className="mil-dark">Mühendislik Deneyimi</span>
                    </li>
                    <li>
                      <img
                        src="img/icons/sm/12.svg"
                        alt="icon"
                      />
                      <span className="mil-dark">
                        Global Endüstriyel Projeler
                      </span>
                    </li>
                    <li>
                      <img
                        src="img/icons/sm/12.svg"
                        alt="icon"
                      />
                      <span className="mil-dark">Özel Damper Sistemleri</span>
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
                    src="uploads/vizyon.png"
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mil-mb-60">
              <h2 className="mil-mb-50">Misyonumuz</h2>
              <p className="mil-mb-50">
                Yaptığımız işin kalitesinden, müşteri odaklılığımızdan,
                güvenilirliğimizden ve oluşturmuş olduğumuz hakkaniyet
                felsefelerinden ödün vermeden çalışmalar yapmak, yaptığımız
                çalışmaları iç ve diş müşterilerimizle paylaşmak misyonumuzdur.
              </p>
              {/* <ul className="mil-simple-list">
                <li>Accelerate innovation.</li>
                <li>With world class tech teams.</li>
                <li>Our all service offerings to enhance.</li>
              </ul> */}
              <h2 className="mil-mb-50">Vizyonumuz</h2>
              <p className="mil-mb-50">
                Sektörde ortaya koymuş olduğumuz güvenirliliği ve gelişmeye açık
                olan yapımızla, iç ve diş müşterilerimizin memnuniyetini sürekli
                geliştirerek reel büyüme hızıyla yapılanarak kurumsal
                devamlılığımızı sağlamak vizyonumuzdur.
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
            Fortek Küresel Referanslar ve Başarılar
          </h2>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img
                    src="img/icons/md/6.svg"
                    alt="icon"
                  />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Üstün Uzmanlık</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  Fortek Endüstriyel, global pazarda enerji santralleri ve
                  endüstriyel tesisler için öncü damper sistemleri üreten bir
                  liderdir. Yıllar içinde edindiğimiz derin bilgi ve tecrübe,
                  bizim en değerli varlığımızdır.
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
                    src="img/icons/md/10.svg"
                    alt="icon"
                  />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Kalite Yönetimi</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  Her bir damper sistemimiz, ISO 9001:2015, TS ENISO 12100:2011
                  CE ve COC standartlarına uygun olarak en yüksek kalite yönetim
                  sistemleriyle üretilir ve test edilir.
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
                    src="img/icons/md/2.svg"
                    alt="icon"
                  />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Esneklik Fortek Endüstriyel</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  Müşteri gereksinimlerine ve piyasa koşullarına hızla uyum
                  sağlayabilme yeteneği ile bilinir. Her proje için
                  özelleştirilmiş çözümler sunarız.
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
                    src="img/icons/md/4.svg"
                    alt="icon"
                  />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Çeviklik</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  Hızla değişen endüstriyel ihtiyaçlara çabuk cevap verme
                  yeteneğimizle, projelerinizi zamanında ve bütçe dahilinde
                  teslim ediyoruz.
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
                    src="img/icons/md/5.svg"
                    alt="icon"
                  />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Yenilikçilik</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  Fortek, sürekli Ar-Ge yatırımları ile sektördeki en son
                  teknolojileri ve yenilikleri takip eder ve müşterilerine
                  sunar. Bu, küresel pazarda rekabet avantajı sağlar.
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
        </div>
      </section>
      {/* features end */}
      {/* features */}
      <section className="mil-deep-bg mil-p-120-60">
        <div
          className="mil-deco"
          style={{ top: 0, right: "25%" }}
        />
        <div className="container">
          {/* <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            For Enterprise
          </span> */}
          <h2 className="mil-mb-120">
            <span className="mil-accent">Kalite Yönetim</span> Belgelerimiz
          </h2>
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img
                    src="img/icons/md/10.svg"
                    alt="icon"
                  />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">ISO 9001:2015 </h4>
                  <p className="mil-box-text">
                    Kalite Yönetim Belgelerimizi indirmek için{" "}
                    <a
                      href="/img/pdf/IMG_20240301_0002.pdf"
                      download
                      className="mil-accent"
                    >
                      tıklayın
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
                    Kalite Yönetim Belgelerimizi indirmek için{" "}
                    <a
                      href="/img/pdf/IMG_20240301_0001.pdf"
                      download
                      className="mil-accent"
                    >
                      tıklayın
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
                    Kalite Yönetim Belgelerimizi indirmek için{" "}
                    <a
                      href="/img/pdf/IMG_20240220_0001.pdf"
                      download
                      className="mil-accent"
                    >
                      tıklayın
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img
                    src="img/icons/md/10.svg"
                    alt="icon"
                  />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">Değer Yaratma</h4>
                  <p className="mil-box-text">
                    Müşterilerimizin ve çalışanlarımızın gelişimi bizim için her
                    şeyden önemli. Onlara verdiğimiz değer ve destekle, tüm
                    paydaşlarımız için somut değerler yaratmayı hedefliyoruz.
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
                  <h4 className="mil-mb-30">Sürdürülebilir İnanç</h4>
                  <p className="mil-box-text">
                    Uzmanlığımız ve sektör bilgimizle sadece bugün için değil,
                    yarınlar için de değer yaratma gücümüze inanıyoruz. Her
                    yenilik, bu inancın bir göstergesidir.
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
                  <h4 className="mil-mb-30">Sorumluluk Almak</h4>
                  <p className="mil-box-text">
                    Her zorlukta öncü olup, çözüm odaklı yaklaşımımızla
                    sorumluluk alırız. Fortek Endüstriyel, zorlukların
                    üstesinden gelme konusunda proaktif bir yaklaşım sergiler.
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
                  <h4 className="mil-mb-30">Kolektif Başarı</h4>
                  <p className="mil-box-text">
                    Bireysel başarılardan ziyade takım ruhuyla hareket ediyoruz.
                    'Biz' demek, Fortek Endüstriyel'de birlikte daha güçlü ve
                    başarılı olduğumuz anlamına gelir.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* features end */}

      <Divider />

      {/* features */}
      {/* <section className="mil-deep-bg mil-p-120-60">
        <div
          className="mil-deco"
          style={{ top: 0, right: "25%" }}
        />
        <div className="container"> */}
      {/* <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            For Enterprise
          </span> */}
      {/* <h2 className="mil-mb-120">
            Fortek Endüstriyel ile{" "}
            <span className="mil-accent">Kalite ve Standartlar</span>{" "}
          </h2>
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img
                    src="img/icons/md/10.svg"
                    alt="icon"
                  />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">Üstün Kalite Anlayışı</h4>
                  <p className="mil-box-text">
                    Fortek, ISO 9001 ve 3834 standartlarına sıkı sıkıya
                    bağlıdır.
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
                  <h4 className="mil-mb-30">Sertifikalı Üretim Süreci</h4>
                  <p className="mil-box-text">
                    Her üretimimiz, kaliteyi garanti eden ISO yöntemleriyle
                    yönetilir.
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
                  <h4 className="mil-mb-30">Kalite İyileştirme Sözü</h4>
                  <p className="mil-box-text">
                    Sürekli iyileştirme, Fortek kalite yönetiminin temelidir.
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
                  <h4 className="mil-mb-30">Yenilikçi Kalite Taahhüdü</h4>
                  <p className="mil-box-text">
                    Fortek, yenilikçilikle üstün kaliteyi birleştirir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* features end */}

      {/* contact */}
      {/* contact */}
      {/* <ContactForm /> */}
    </Layouts>
  );
};
export default About;
