import "./features.scss";
import { useTranslation } from 'react-i18next';


function Features() {
  const { t } = useTranslation();

  return (
    <div className="feature-container">
      <div className="box">
        <img src="//amalfiusco.com/cdn/shop/files/Untitled_design_9.png?v=1687989413&width=3200" alt="Stronger Scalp" />
        <div className="text">
          <h3>{t("strongerScalp")}</h3>
          <p>{t("amalfiPurification")}</p>
        </div>
      </div>
      <div className="box">
        <img src="//amalfiusco.com/cdn/shop/files/Untitled_design_10.png?v=1687989756&width=3200" alt="Hair Thickening" />
        <div className="text">
          <h3>{t("hairThickening")}</h3>
          <p>{t("amalfiEnhancementhair")}</p>
        </div>
      </div>
      <div className="box">
        <img src="//amalfiusco.com/cdn/shop/files/Untitled_design_11.png?v=1687989737&width=3200" alt="Enhanced Hair Development" />
        <div className="text">
          <h3>{t("enhancedHairDevelopment")}</h3>
          <p>{t("amalfiEnhancement")}</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
