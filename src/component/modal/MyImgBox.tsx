import { Link } from "react-router-dom";

interface IMyImgBox {
  link?: boolean;
  href: string;
  bgImg: string;
  alt: string;
}
function MyImgBox({ link, href, bgImg, alt }: IMyImgBox) {
  return (
    <>
      {link && href.length > 1 ? (
        <Link to={href} target="_blank" className="img__link link">
          <img src={bgImg} alt={alt} />
        </Link>
      ) : (
        <span className="img__link">
          <img src={bgImg} alt={alt} />
        </span>
      )}
    </>
  );
}
export default MyImgBox;
