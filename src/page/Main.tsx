import { useRecoilValue } from "recoil";
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
import { mainAniOneMovingAtom } from "../utils/atom/commonAtom";

function Main({ id }: IPageId) {
  const mainAniAtom = useRecoilValue(mainAniOneMovingAtom);
  return (
    <MainSection id={id}>
      <MainInner>
        <NameBox>
          <Name
            className="container"
            variants={aniName}
            initial="hidden"
            animate="visible"
            custom={mainAniAtom ? true : false}
          >
            <NameText
              variants={aniM}
              initial="hidden"
              animate="visible"
              custom={mainAniAtom ? true : false}
            >
              M
            </NameText>
            {["I", "S", "O"].map((index) => (
              <NameText key={index} variants={aniText}>
                {index}
              </NameText>
            ))}
          </Name>
          <NameDesc
            variants={aniUpDwon}
            initial="hidden"
            animate="visible"
            custom={mainAniAtom ? true : false}
          >
            P o r t F o l i o
          </NameDesc>
        </NameBox>
        <Triangle
          variants={aniDwonUp}
          initial="hidden"
          animate="visible"
          custom={mainAniAtom ? true : false}
        />
      </MainInner>
    </MainSection>
  );
}

export default Main;
