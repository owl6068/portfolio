import { useEffect, useState } from "react";
import { BannerInfoBox, BannerSection } from "../../css/netflix";
import { getBgimg } from "../../page/netflix/utilImg";

function Banner(props: any) {
  const [random, setRandom] = useState<number>(0); //배너 랜덤
  useEffect(() => {
    const number = Math.floor(Math.random() * 20 + 1);
    setRandom(number);
  }, []);
  return (
    <>
      <BannerSection
        bgimg={getBgimg(props?.results[random]?.backdrop_path || "")}
      >
        <BannerInfoBox>
          <h2 className="banner__title">
            {props?.results[random]?.title || props?.results[random]?.name}
          </h2>
          <p className="banner__desc">{props?.results[random]?.overview}</p>
        </BannerInfoBox>
      </BannerSection>
    </>
  );
}

export default Banner;
