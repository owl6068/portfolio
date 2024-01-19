import { Link } from "react-router-dom";
import { ModalInfoLi } from "../../css/component/modalStyle";
import { IPortFolioTool } from "../../utils/interface/PFinterface";
interface IMyportfolioInfo {
  label: string;
  text?: string;
  tool?: IPortFolioTool;
  link?: string;
  site?: [string, string, string];
  aTarget?: string;
}
function MyInfoBox({
  label,
  text,
  tool,
  link,
  site,
  aTarget,
}: IMyportfolioInfo) {
  return (
    <ModalInfoLi>
      <div className="list__site__box">
        <strong className="list__site__tit">{label}</strong>
        {tool && (
          <div>
            <p>디자인: {tool?.design}</p>
            <p>일정관리: {tool?.schedule}</p>
            <p>협업툴: {tool?.collabo}</p>
          </div>
        )}
        <p>
          {text}
          {link && (
            <Link to={link} target={aTarget} className="link">
              {link}
            </Link>
          )}
        </p>
        {site && (
          <>
            <p className="list__site__dis">
              <span>Display</span> <span>{site[0]}</span>
            </p>
            <p className="list__site__work">
              <span>Wrok</span> <span>{site[1]}</span>
            </p>
            {site[2].length > 1 && (
              <Link to={site[2]} target="_blank" className="list__site__link">
                <span>Link</span> <span>{site[2]}</span>
              </Link>
            )}
          </>
        )}
      </div>
    </ModalInfoLi>
  );
}
export default MyInfoBox;
