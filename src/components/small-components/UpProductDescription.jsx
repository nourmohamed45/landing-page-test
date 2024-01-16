import { Box, Rating, Stack } from "@mui/material";
import { useTranslation } from 'react-i18next';

const UpProductDescription = () => {

  const { t } = useTranslation();


  return (
    <div className="up">
      <h1>{t("product.name")}</h1>
      <p className="price">
        <span className="previous-price">LE 4,412 EGP</span> LE 2,206.00 EGP{" "}
        <span className="sale">{t("Sale")}</span>
      </p>
      <Box sx={{ display: "flex", margin: "1.5rem 0px" }}>
        <Stack spacing={1}>
          <Rating name="half-rating" defaultValue={5} precision={0.5} readOnly />
        </Stack>
        <span style={{ marginLeft: "1rem" }}>213 {t("Reviews")}</span>
      </Box>
      <p className="details">
        <span style={{ fontWeight: "bold" }}>{t("product.description.span")}</span>{" "}
        {t("product.description.rest")}{" "}
      </p>
    </div>
  );
};

export default UpProductDescription;
