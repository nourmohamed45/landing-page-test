// Components
import { useTranslation } from "react-i18next";
import {
  Features,
  Form,
  HairCarePromotion,
  Header,
  ProductDetails,
  ScalpMessagerExperience,
} from "./components";
import { useState } from "react";

function App() {
  const { i18n } = useTranslation();
  const [ language, setLanguage ] = useState("en");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="up-header">
        <p>Sale ends tonight / free shipping</p>
        { i18n.language === "en" && <button
          style={{
            margin: "0 5px",
            right: "1rem",
            position: "absolute",
            top: "10px",
            padding: "0",
          }}
          onClick={() => {
            changeLanguage('ar')
            setLanguage("ar")
          }}
        >
          AR
        </button>}
        { i18n.language === "ar" && <button
          style={{
            margin: "0 5px",
            right: "1rem",
            position: "absolute",
            top: "10px",
            padding: "0",
          }}
          onClick={() => {
            changeLanguage('en')
            setLanguage("en")
          }}
        >
          EN
        </button>}
      </div>

      <Header />
      <div className="app-container">
        <ProductDetails />
        <HairCarePromotion />
        <Features />
        <ScalpMessagerExperience />
        <Form />
      </div>
    </div>
  );
}

export default App;
