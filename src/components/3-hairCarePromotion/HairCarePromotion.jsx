import ShopButton from "../small-components/ShopButton"
import "./hairCarePromotion.scss"
import { useTranslation } from 'react-i18next';


function HairCarePromotion() {
  const { t } = useTranslation();
  return (
    <div className="hairCareContainer">
      <div className="left">
        <h1>{t("unlockSecret")}</h1>
        <p>{t("stressDescription")}</p>
        <p>{t("amalfiDescription")}</p>
        <ShopButton title={t("shopNow")} />
        <span>{t("tryRiskFree")}</span>
      </div>
      <div className="right">
        <img src="/public/haircarepromotion.jpg" alt="" />
      </div>
    </div>
  )
}

export default HairCarePromotion
