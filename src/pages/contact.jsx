import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import { useTranslation, Trans } from "react-i18next";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const { t } = useTranslation("contact");

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage(t("form_submit_success"));
        setFormData({
          name: "",
          surname: "",
          email: "",
          phone: "",
          description: "",
        });
      } else {
        setMessage(t("form_submit_error"));
      }
    } catch (error) {
      setMessage(t("form_submit_error"));
    }
  };

  return (
    <Layouts>
      <PageBanner
        pageName={`${t("page_title")}`}
        pageTitle={`${t("page_title")}`}
        srcLink="/uploads/d.png"
      />
      {/* contact */}
      <section className="mil-contact mil-p-120-0">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 col-xl-8 mil-mb-120">
              <form onSubmit={handleSubmit}>
                <h4 className="mil-mb-60">
                  <Trans
                    i18nKey="page_description"
                    t={t}
                    components={{ 1: <span className="mil-accent" /> }}
                  />
                </h4>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>{t("name")}</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6">
                        <span>{t("surname")}</span>
                      </label>
                      <input
                        type="text"
                        name="surname"
                        value={formData.surname}
                        onChange={handleChange}
                        placeholder="Jones"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6">
                        <span>{t("email")}</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="doe@mydomain.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6">
                        <span>{t("phone")}</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6">
                        <span>{t("description")}</span>
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Your Message"
                        className="mil-shortened"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button className="mil-button mil-border mil-fw" type="submit">
                      <span>{t("send")}</span>
                    </button>
                  </div>
                </div>
              </form>
              {message && <p>{message}</p>}
            </div>
            <div className="col-lg-4 col-xl-4 mil-mb-120">
              <h3 style={{
                marginBottom: "2rem"
              }}>
                {t("right_subtitle")}
              </h3>
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: "2rem"
              }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem"
                }}>
                  <Mail style={{
                    height: "2rem",
                    width: "2rem"
                  }} />
                  <a href="mailto:info@fortekindustrial.com">info@fortekindustrial.com</a>
                </div>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem"
                }}>
                  <Phone style={{
                    height: "2rem",
                    width: "2rem"
                  }} />
                  <a href="tel:+902329999057">+90 232 999 90 57</a>
                </div>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem"
                }}>
                  <MapPin style={{
                    height: "4rem",
                    width: "4rem"
                  }} />
                  <span>Kazımdirik Mahallesi, Üniversite Caddesi, Lobi Parlas, No:72/505, Bornova/İzmir/Türkiye</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.8433752050845!2d27.19709721624308!3d38.45321839981117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b963c47a53770d%3A0xc05eaaa32df06753!2sFortek%20End%C3%BCstriyel!5e0!3m2!1str!2str!4v1719386721052!5m2!1str!2str" width="600" height="450" style={{
            border: "0"
          }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </Layouts>
  );
};

export default Contact;
