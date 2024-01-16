import "./productDetails.scss";
import { useTranslation } from 'react-i18next';

// ======== Icons ========
import { LuPlane } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import { IoStarOutline } from "react-icons/io5";
// ======== Swiper ========

// Import Swiper styles
import "swiper/css";

// ======== Hooks ========
import { useState } from "react";

import Offers from "../small-components/Offers";
import LeftBigImage from "../small-components/LeftBigImage";
import UpProductDescription from "../small-components/UpProductDescription";

function ProductDetails() {
  const { t } = useTranslation();
  // Radio buttons
  const [selectedValue, setSelectedValue] = useState("b");
  const [activeOffer, setActiveOffer] = useState("b");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleClick = (radioType) => {
    setActiveOffer(radioType === activeOffer ? null : radioType);
    setSelectedValue(radioType);
  };
  return (
    <div className="product-details-container">
      <LeftBigImage />

      <div className="right">
        <UpProductDescription />
        <div className="separate">
          <span>{t("bundleAndSave")}</span>
        </div>
        <div className="middle">
          <div className="radio">
            <Offers
              type={"single offers"}
              title={t("single")}
              description={t("standardPrice")}
              oldPrice={"4,412.00"}
              currentPrice={"2,206.00"}
              radioType={"a"}
              radioInputProp={"A"}
              selectedValue={selectedValue}
              handleChange={handleChange}
              handleClick={handleClick}
              activeOffer={activeOffer}
            />
            <Offers
              type={"duo offers"}
              title={t("duo")}
              description={t("youSave10Percent")}
              oldPrice={"8,824.00"}
              currentPrice={"3,970.00"}
              radioType={"b"}
              radioInputProp={"B"}
              selectedValue={selectedValue}
              handleChange={handleChange}
              handleClick={handleClick}
              activeOffer={activeOffer}
            />
            <Offers
              type={"trio offers"}
              title={t("trio")}
              description={t("youSave20Percent")}
              oldPrice={"13,236.00"}
              currentPrice={"5,294.00"}
              radioType={"c"}
              radioInputProp={"C"}
              selectedValue={selectedValue}
              handleChange={handleChange}
              handleClick={handleClick}
              activeOffer={activeOffer}
            />
          </div>
          <div className="buttons">
            <button className="btn add-to-cart">{t("addToCart")}</button>
            <button className="btn shop-pay">
              {t("buyWith")}<span>Shop Pay</span>
            </button>
          </div>
          <div className="payment-options">
            <a href="#">{t("morePaymentOptions")}</a>
          </div>
        </div>
        <div className="down">
          <div className="box plane">
            <LuPlane size={32} />
            <span>{t("freeShippingWorldwide")}</span>
          </div>
          <div className="box time">
            <FaRegClock size={32} />
            <span>{t("riskFreeTrial")}</span>
          </div>
          <div className="box star">
            <IoStarOutline size={32} />
            <span>{t("oneYearGuarantee")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
