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
import { myInfoTag, mySkill } from "../utils/utilArr";
import { useRecoilValue } from "recoil";
import {
  moWid,
  windowHeightAtom,
  windowWidthAtom,
} from "../utils/atom/commonAtom";
import { IPageId } from "../utils/interface/PFinterface";
import { useEffect, useState } from "react";
import { Section } from "../css/common";

function About({ id }: IPageId) {
  const moWidth = useRecoilValue(moWid);
  const windowWidth = useRecoilValue(windowWidthAtom);
  const windowHeigh = useRecoilValue(windowHeightAtom);
  const [delay, setDelay] = useState(1);
  const { scrollY } = useScroll();
  const y = useTransform(
    scrollY,
    [windowHeigh, windowHeigh * 2],
    [0, windowHeigh * 2 - 200]
  );
  useEffect(() => {
    if (windowWidth > moWidth) {
      setDelay(0.5);
    } else if (windowWidth < moWidth) {
      setDelay(0);
    }
  }, [windowWidth, moWidth]);

  return (
    <Section id={id}>
      <AboutInner>
        <div>
          <MyInfo
            initial="offscreen"
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut,
                soluta nobis incidunt eaque rem dignissimos ea mollitia iste
                deleniti corrupti nostrum officia, consequatur corporis.
                Laborum, soluta. Deserunt minima nobis ab delectus placeat
                tempora similique maiores ullam dignissimos dicta repellat, cum
                et laboriosam aliquam exercitationem unde iure totam facere.
                Delectus, commodi.
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
          {windowWidth > moWidth ? (
            <MsImg
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.img
                src="portfolio/img/smile.svg"
                alt="ms"
                variants={cardVariants}
              />
            </MsImg>
          ) : (
            <MsImgMo style={{ y, x: 0 }}>
              <motion.img src="portfolio/img/smile.svg" alt="ms" />
            </MsImgMo>
          )}
          <MySkill
            initial="offscreen"
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
