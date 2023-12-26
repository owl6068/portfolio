import { Link, useNavigate } from "react-router-dom";
import {
  BtnNextBox,
  FormListLi,
  FormListUl,
  Label,
  ProfilBox,
  container,
  item,
} from "../../css/joinStyle";
import ExaTitle from "../../component/ExaTitle";
import { useEffect, useState } from "react";
import { IChkInfo, IFormList } from "../../interface/join";
import { joinApi } from "../../api/joinApi";
import { Helmet } from "react-helmet";
import JoinInfoList from "../../component/form/JoinInfoList";
import { ExaContainer } from "../../css/Exacommon";
import NextButton from "../../component/form/NextButton";

function JoinConfirm() {
  const navigate = useNavigate();
  const [step1, setStep1] = useState<IChkInfo[]>();
  const [step2, setStep2] = useState<IFormList>();
  const [img, setImg] = useState<string>();

  useEffect(() => {
    const data1 = localStorage.getItem("유의사항");
    const data2 = localStorage.getItem("프로필");
    const data3 = localStorage.getItem("사진");
    let data1Json: any = data1;
    if (data1 !== null) {
      data1Json = JSON.parse(data1);
      setStep1(joinApi.filter((data) => data1Json?.chk.includes(data.id)));
    }
    if (data2 !== null) {
      setStep2(JSON.parse(data2));
    }
    if (data3 !== null) {
      setImg(JSON.parse(data3));
    }
  }, []);

  const homeMoving = () => {
    window.localStorage.removeItem("프로필");
    window.localStorage.removeItem("사진");
    window.localStorage.removeItem("유의사항");
    navigate("/");
  };
  return (
    <ExaContainer>
      <Helmet>
        <title>가입완료 | 예제 만들기</title>
      </Helmet>
      <ExaTitle text={`가입을\n축하드립니다.`} size="30px" />
      <FormListUl variants={container} initial="hidden" animate="visible">
        <FormListLi className="step1__list w100" variants={item}>
          <Label as="p">프로필</Label>
          <ProfilBox>
            <input id="picture" type="file" accept="image/*" hidden />
            <div
              className="img__view"
              style={{
                backgroundImage: `url(${img})`,
                cursor: "default",
                marginBottom: 0,
              }}
            ></div>
          </ProfilBox>
        </FormListLi>
        {step2 && (
          <>
            <JoinInfoList text="아이디" data={step2?.id} />
            <JoinInfoList text="닉네임" data={step2?.nick} />
            <JoinInfoList text="패스워드" data={step2?.pw} />
            <JoinInfoList text="패스워드2" data={step2?.pw2} />
            <JoinInfoList text="이메일" data={step2?.email} />
            <JoinInfoList text="수신동의" data={step2?.radio} />
            <JoinInfoList text="수신동의" data={step2?.radio} />
            <JoinInfoList text="유의사항동의" list={step1} />
          </>
        )}
      </FormListUl>
      <BtnNextBox>
        <NextButton text="홈으로 가기" disabled={true} onClick={homeMoving} />
      </BtnNextBox>
    </ExaContainer>
  );
}

export default JoinConfirm;
