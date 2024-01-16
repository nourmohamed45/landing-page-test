import { useEffect, useState } from "react";
// the hook
import { useTranslation } from 'react-i18next';
import "./header.scss";
// Icons
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { IoBagOutline, IoMenu } from "react-icons/io5";

function Header() {
  const [clicked, setClicked] = useState(false);
  const { t } = useTranslation();
  const handleMenuClick = () => {
    setClicked(!clicked);
  };


  

  return (
    <>
      <nav>
        <div id="mobile">
          <div id="bar" onClick={handleMenuClick}>
            {clicked ? (
              <IoMdClose size={32} id="close-icon" />
            ) : (
              <IoMenu size={32} id="menu-icon" />
            )}
          </div>
        </div>
        <a className="logo" href="index.html">
          <img
            src="//amalfiusco.com/cdn/shop/files/Untitled_design_1.png?v=1684098036&width=600"
            alt="Logo Image"
          />
        </a>
        <div className="navbar">
          <ul className={clicked ? "navbar active" : "navbar"} id="navbar">
            <li>
              <a href="#">{t("Home")}</a>
            </li>
            <li>
              <a href="index.html" className="active">
                {t("ScalpMassager")}
              </a>
            </li>
            <li>
              <a href="#">{t("ShippingInformation")}</a>
            </li>
            <li>
              <a href="#">{t("TrackOrder")}</a>
            </li>
            <li>
              <a href="#">{t("AboutUs")}</a>
            </li>
            <li>
              <a href="#">{t("Contact")}</a>
            </li>
          </ul>
        </div>
        <div className="icons">
          <div className="icon" style={{ marginRight: "1rem" }}>
            <IoIosSearch className="simbol" size={24} />
          </div>
          <div className="icon">
            <IoBagOutline className="simbol" size={24} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
