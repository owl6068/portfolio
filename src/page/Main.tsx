import {
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
} from "../css/Main";
import { Section } from "../css/common";
import { IPageId } from "../utils/interface";

function Main({ id }: IPageId) {
  return (
    <Section id={id}>
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
    </Section>
  );
}

export default Main;
