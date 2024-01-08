import Title from "../component/Title";
import {
  AboutInner,
  TitleBox,
  MyInfo,
  MySkill,
  Tag,
  TagBox,
  MyOneWord,
  MsImg,
  MyAnotherInfo,
  SkillStep,
  SkillInfoBox,
  leftBox,
  rightBox,
  cardVariants,
  MsImgMo,
} from "../css/page/aboutStyle";
import { motion, useScroll, useTransform } from "framer-motion";
import { myInfoTag, mySkill } from "../utils/array/utilArr";
import { useRecoilValue } from "recoil";
import {
  moWidthAtom,
  windowHeightAtom,
  windowWidthAtom,
} from "../utils/atom/commonAtom";
import { IPageId } from "../utils/interface/PFinterface";
import { useEffect, useState } from "react";
import { Section } from "../css/common";
import { ImgUrlEtcArr } from "../utils/array/ImgUrl";

function About({ id }: IPageId) {
  const getMoWidth = useRecoilValue(moWidthAtom);
  const getWindowWidth = useRecoilValue(windowWidthAtom);
  const getWindowHeigh = useRecoilValue(windowHeightAtom);
  const [delay, setDelay] = useState(1);
  const { scrollY } = useScroll();
  const y = useTransform(
    scrollY,
    [getWindowHeigh, getWindowHeigh * 2],
    [0, getWindowHeigh * 2 - 200]
  );
  const mainAniAtom = JSON.parse(
    sessionStorage.getItem("hasExecutedOnce") || "false"
  );
  useEffect(() => {
    if (getWindowWidth > getMoWidth) {
      setDelay(0.5);
    } else if (getWindowWidth < getMoWidth) {
      setDelay(0);
    }
  }, [getWindowWidth, getMoWidth]);

  return (
    <Section id={id}>
      <AboutInner>
        <div>
          <MyInfo
            initial={mainAniAtom ? "onscreen" : "offscreen"}
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={leftBox} custom={delay}>
              <TitleBox>
                <Title as={"h1"} text={"Kim\nMi So"} size={"m"} />
              </TitleBox>
              <TagBox>
                {myInfoTag.map((tag) => (
                  <Tag key={tag.id}>{tag.name}</Tag>
                ))}
              </TagBox>
              <MyOneWord>
                <b>퍼블리셔에서 프론트로</b>
                <br />
                React를 독학으로 공부하였으며, 회사를 다닐때 Vue를 활용한
                퍼블리싱 작업 경험이 있습니다. SPA의 매력을 느끼고, 이를
                공부하며 더 나은 역량을 갖추기 위해 노력했습니다.
                <br />
                새로운 도전을 통해 계속해서 성장하는 것을 즐기고, 기술적으로
                발전하며 나 자신을 업그레이드해 가고 있습니다.
              </MyOneWord>
              <MyAnotherInfo>
                <li>
                  <a href="tel:01033867068">010.3386.7068</a>
                </li>
                <li>
                  <a href="email:owl6068@naver.com">owl6068@naver.com</a>
                </li>
                <li>
                  <address>서울시 종로구 창신동</address>
                </li>
              </MyAnotherInfo>
            </motion.div>
          </MyInfo>
          {getWindowWidth > getMoWidth ? (
            <MsImg
              initial={mainAniAtom ? "onscreen" : "offscreen"}
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.img
                src={ImgUrlEtcArr.smile.url}
                alt="ms"
                variants={cardVariants}
              />
            </MsImg>
          ) : (
            <MsImgMo style={{ y, x: 0 }}>
              <motion.img src={ImgUrlEtcArr.smile.url} alt="ms" />
            </MsImgMo>
          )}
          <MySkill
            initial={mainAniAtom ? "onscreen" : "offscreen"}
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={rightBox} custom={delay}>
              <TitleBox>
                <Title as={"h2"} text={"Skill"} size={"m"} />
              </TitleBox>
              <SkillInfoBox as="ul">
                {mySkill.map((data) => (
                  <li key={data.name}>
                    <img src={data.img} alt={data.name} />
                    <SkillStep width={data.adept}></SkillStep>
                  </li>
                ))}
              </SkillInfoBox>
            </motion.div>
          </MySkill>
        </div>
      </AboutInner>
    </Section>
  );
}

export default About;
