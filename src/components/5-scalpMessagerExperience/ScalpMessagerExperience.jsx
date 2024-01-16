import ShopButton from "../small-components/ShopButton";
import "./scalpMessagerExperience.scss";
import { useTranslation } from 'react-i18next';


function ScalpMessagerExperience() {
  const { t } = useTranslation();

  return (
    <div className="Scalp-messager-experience-container">
      <div className="scalp-box first">
        <div className="image">
          <img src="/public/scalp-messager-images/one.jpg" alt="One" />
        </div>
        <div className="text">
          <h1>{t("easeTension")}</h1>
          <p>
            {t("scalpMassageBenefits")}
          </p>
          <p>
            {t("amalfiEffectiveness")}
          </p>
          <div>
            <ShopButton title={t("shopNow")} />
          </div>
        </div>
      </div>
      <div className="scalp-box second">
        <div className="text" style={{ textAlign: "start" }}>
          <h1>{t("howToUse")}</h1>
          <p>
            <span>{t("step1")}</span> {t("activationInstructions")}
          </p>
          <p>
            <span>{t("step2")}</span> {t("massageInstructions")}
          </p>
          <p>
            <span>{t("step3")}</span> {t("enhanceResults")}
          </p>
          <ShopButton title={t("shopNow")}/>
        </div>
        <div className="image">
          <img src="/public/scalp-messager-images/one.jpg" alt="One" />
        </div>
      </div>
      <div className="scalp-box third">
        <div className="image">
          <img src="/public/scalp-messager-images/one.jpg" alt="One" />
        </div>
        <div className="text last-one" style={{ textAlign: "start" }}>
          <h1>{t("improveSleep")}</h1>
          <ul>
            <li>{t("feedbackPercentage")}</li>
            <li>
              {t("feedbackPercentageImprovment")}
            </li>
            <li>
              {t("feedbackPercentageExp")}
            </li>
          </ul>
          <p>
            {t("stockAvailabilityNotice")}
          </p>
          <button>{t("getYourMassager")}</button>
        </div>
      </div>
    </div>
  );
}

export default ScalpMessagerExperience;
