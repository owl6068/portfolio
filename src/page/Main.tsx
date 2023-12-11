import {
  MainSection,
  MainInner,
  Name,
  NameBox,
  NameDesc,
  NameText,
  aniName,
  aniM,
  aniText,
  aniUpDwon,
  Triangle,
  aniDwonUp,
} from "../css/page/mainStyle";
import { IPageId } from "../utils/interface/PFinterface";

function Main({ id }: IPageId) {
  return (
    <MainSection id={id}>
      <MainInner>
        <NameBox>
          <Name
            className="container"
            variants={aniName}
            initial="hidden"
            animate="visible"
          >
            <NameText variants={aniM} initial="hidden" animate="visible">
              M
            </NameText>
            {["I", "S", "O"].map((index) => (
              <NameText key={index} variants={aniText}>
                {index}
              </NameText>
            ))}
          </Name>
          <NameDesc variants={aniUpDwon} initial="hidden" animate="visible">
            P o r t F o l i o
          </NameDesc>
        </NameBox>
        <Triangle variants={aniDwonUp} initial="hidden" animate="visible" />
      </MainInner>
    </MainSection>
  );
}

export default Main;
