import { Link } from "react-router-dom";

interface IMyImgBox {
  link?: boolean;
  href: string;
  bgImg: string;
  alt: string;
  aTarget: string;
}
function MyImgBox({ link, href, bgImg, alt, aTarget }: IMyImgBox) {
  return (
    <>
      {link && href.length > 1 ? (
        <Link to={href} target={aTarget} className="img__link link">
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
