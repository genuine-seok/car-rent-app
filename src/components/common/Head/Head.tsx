import { Helmet } from "react-helmet-async";

import { CarDataType } from "../../../types";
import { getFormattedPrice } from "../../../utils";

interface HeadProps {
  carData: CarDataType;
}

export const Head = ({ carData }: HeadProps) => {
  const { amount, attribute } = carData;
  const { brand, name, imageUrl } = attribute;
  const title = `${brand} ${name}`;
  const price = `월 ${getFormattedPrice(amount)}원`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={price} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={imageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={price} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={imageUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={price} />
    </Helmet>
  );
};
