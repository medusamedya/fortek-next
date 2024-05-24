import Content from "../../data/sections/contact.json";

const ContactSection = () => {
  return (
    <section className="mil-contact mil-gradient-bg mil-p-120-0">
      <div
        className="mil-deco mil-deco-accent"
        style={{ top: 0, right: "10%" }}
      />
      <div className="container">
        <h2 className="mil-light mil-mb-90">
          {Content.title.first} <span className="mil-accent">{Content.title.second}</span>
        </h2>
        <form>
          <div className="row">
            <div className="col-lg-6">
              <div className="mil-input-frame mil-mb-30">
                <label>
                  <span className="mil-light">İsminiz</span>
                  <span className="mil-accent">Gerekli</span>
                </label>
                <input type="text" placeholder="Enter Your Name Here" />
              </div>
              <div className="mil-input-frame mil-mb-30">
                <label>
                  <span className="mil-light">E-Posta Adresiniz</span>
                  <span className="mil-accent">Gerekli</span>
                </label>
                <input type="email" id="email" placeholder="Your Email" />
              </div>
              <div className="mil-input-frame mil-mb-60">
                <label>
                  <span className="mil-light">Telefon</span>
                  <span className="mil-light-soft">Opsiyonel</span>
                </label>
                <input type="number" placeholder="Your Phone" />
              </div>
              {/* <div className="mil-attach-frame mil-mb-60">
                <i className="fas fa-paperclip" />
                <label className="mil-custom-file-input">
                  <span>Attach your file</span>
                  <input type="file" id="mil-file-input" />
                </label>
                <p className="mil-text-sm mil-light-soft">up to 20MB</p>
              </div> */}
            </div>
            <div className="col-lg-6">
              <div className="mil-input-frame mil-mb-30">
                <label>
                  <span className="mil-light">Mesajınız</span>
                  <span className="mil-accent">Gerekli</span>
                </label>
                <textarea placeholder="Your Message" defaultValue={""} />
              </div>
              {/* <p className="mil-text-sm mil-light-soft mil-mb-15">
                Kişisel verilerimin işlenmesini ve iletişim için kullanılmasını kabul ediyorum.
              </p>
              <div className="mil-checbox-frame mil-mb-60">
                <input
                  className="mil-checkbox"
                  id="checkbox-1"
                  type="checkbox"
                  defaultValue="value"
                />
                <label htmlFor="checkbox-1" className="mil-text-sm mil-light">
                  Kişisel haberleşme ve bilgilendirme formunu okudum ve kabul ediyorum{" "}
                  <a href="#." className="mil-accent">
                    events and services
                  </a>
                </label>
              </div> */}
            </div>
            <div className="col-12">
              <button className="mil-button mil-accent-bg mil-fw">
                <span>Bize Ulaşın</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;