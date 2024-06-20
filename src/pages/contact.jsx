import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import { useTranslation, Trans } from "react-i18next";
import { useState } from "react";

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
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default Contact;
