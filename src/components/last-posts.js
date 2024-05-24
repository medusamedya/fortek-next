import Link from "next/link"
import { useTranslation } from "react-i18next";

export const LastPosts = () => {

    const { t: a } = useTranslation('blog_1');
    const { t: b } = useTranslation('blog_2');
    const { t: c } = useTranslation('blog_3');
    const { t: q } = useTranslation('common');

   return (
     <div className="mil-mb-60">
      <h5 className="mil-list-title mil-mb-30">{q("latest_post")}</h5>
      <Link
        href="/enerji-ve-surdurebilirlik"
        className="mil-post-sm mil-mb-15"
      >
        <div className="mil-cover-frame">
          <img
            src="/uploads/enerji verimliliği_1000x667.png"
            alt="cover"
          />
        </div>
        <div className="mil-description">
          <h6>{a('blog_title')}</h6>
        </div>
      </Link>
      <Link
        href="/damper-inovasyon"
        className="mil-post-sm mil-mb-15"
      >
        <div className="mil-cover-frame">
          <img
            src="/uploads/mühendislik çözümleri_1000x667.png"
            alt="cover"
          />
        </div>
        <div className="mil-description">
          <h6>{b('blog_title')}</h6>
        </div>
      </Link>
      <Link
        href="/ozellestirilmis-damper"
        className="mil-post-sm mil-mb-15"
      >
        <div className="mil-cover-frame">
          <img
            src="/uploads/endüstriyel tesisler_1000x667.png"
            alt="cover"
          />
        </div>
        <div className="mil-description">
          <h6>{c('blog_title')}</h6>
        </div>
      </Link>
    </div>
   )
}