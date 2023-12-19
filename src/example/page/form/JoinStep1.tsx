import { useEffect, useState } from "react";
import { joinApi } from "../../api/joinApi";
import ExaTitle from "../../component/ExaTitle";
import { CheckWrap, JoinContainer, container } from "../../css/joinStyle";
import { IChk } from "../../interface/join";
import { FormProvider, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import CheckAll from "../../component/form/CheckAll";
import CheckBox from "../../component/form/CheckBox";
import NextButton from "../../component/form/NextButton";
function JoinStep1() {
  const reqTrueFilter = joinApi.filter((data) => data.require === true);
  const [reqCheck, setReqCheck] = useState(false); // 필수값 체크가 다 되었는지
  const methods = useForm<IChk>({});
  const { handleSubmit, watch, setValue } = methods;
  const isValidChk = watch("chk");

  useEffect(() => {
    // 처음 선택
    const filter = reqTrueFilter.filter((data) =>
      isValidChk ? isValidChk.includes(data.id) : []
    );
    setReqCheck(filter.length >= reqTrueFilter.length);
  }, [isValidChk]);

  useEffect(() => {
    // 로컬 스토리지에서 값이 있으면 체크 상태 복원
    const storedData = JSON.parse(localStorage.getItem("유의사항") || "{}");
    setValue("chk", storedData.chk || []);
  }, []);

  const onSubmit = (data: IChk) => {
    localStorage.setItem("유의사항", JSON.stringify(data)); // 로컬스토라지
  };

  return (
    <JoinContainer>
      <Helmet>
        <title>유의사항 | 예제 만들기</title>
      </Helmet>
      <ExaTitle text={`유의 사항에\n동의해주세요`} size="30px" />
      <FormProvider {...methods}>
        <CheckWrap>
          <form onSubmit={handleSubmit(onSubmit)}>
            <motion.ul variants={container} initial="hidden" animate="visible">
              <CheckAll label="전체 선택" items={joinApi} />
              <CheckBox items={joinApi} />
            </motion.ul>
            <NextButton
              text="다음으로"
              disabled={!isValidChk || reqCheck}
              onClick={handleSubmit(onSubmit)}
            />
          </form>
        </CheckWrap>
      </FormProvider>
    </JoinContainer>
  );
}

export default JoinStep1;
