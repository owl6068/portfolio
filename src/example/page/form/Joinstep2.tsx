import { useForm } from "react-hook-form";
import ExaTitle from "../../component/ExaTitle";
import {
  DFlexFixAuto,
  ErrorText,
  Label,
  ProfilBox,
  InputBox,
  PasswordInput,
  InputChk2,
  container,
  item,
  BtnNextBox,
} from "../../css/joinStyle";
import { useEffect, useState } from "react";
import { IFormList } from "../../interface/join";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ExaContainer } from "../../css/Exacommon";
import NextButton from "../../component/form/NextButton";

function JoinStep2() {
  const errorNick = [
    { id: "1", nick: "tomato" },
    { id: "2", nick: "orange" },
    { id: "3", nick: "aa" },
    { id: "4", nick: "ss" },
  ];
  const {
    register,
    handleSubmit,
    watch,
    setError,
    reset,
    setValue,
    formState: { errors },
  } = useForm<IFormList>({
    defaultValues: {
      radio: "yes",
    },
  });
  const navigate = useNavigate();
  const [passWordView, setPassWordView] = useState(true);
  const [passWordView2, setPassWordView2] = useState(true);
  const [localImg, setLocalImg] = useState("");
  const [profill, setProfill] = useState("");

  const HandlerPassWord = () => {
    //pw
    setPassWordView((view) => !view);
  };
  const HandlerPassWord2 = () => {
    //pw2
    setPassWordView2((view) => !view);
  };

  const formSubmit = (data: IFormList) => {
    navigate("/joinconfirm");
    localStorage.setItem("프로필", JSON.stringify(data));
    localStorage.setItem("사진", JSON.stringify(profill));
  };

  const avatar = watch("image");
  useEffect(() => {
    // 프로필박스
    if (avatar && avatar.length > 0) {
      const file = avatar[0];
      setProfill(URL.createObjectURL(Object(file)));
    } else {
      setProfill(
        "https://t4.ftcdn.net/jpg/01/64/87/01/360_F_164870164_IRVXO976UO5nd79niegmWB3AJMqwfs6n.jpg"
      );
    }
  }, [avatar]);

  useEffect(() => {
    // 로컬 스토리지에서 가져온 값으로 각 input 필드에 값을 설정합니다.
    const storedData: IFormList = JSON.parse(
      localStorage.getItem("프로필") || "{}"
    );
    const storedImage = JSON.parse(localStorage.getItem("사진") || "{}");
    setLocalImg(storedImage);
    if (Object.keys(storedData).length !== 0) {
      setValue("id", storedData.id);
      setValue("image", storedImage.image);
      setValue("nick", storedData.nick);
      setValue("pw", storedData.pw);
      setValue("pw2", storedData.pw2);
      setValue("email", storedData.email);
      setValue("radio", storedData.radio);
    }
  }, [setValue]);

  const onReset = () => {
    window.localStorage.removeItem("프로필");
    window.localStorage.removeItem("사진");
    reset();
  };

  return (
    <ExaContainer>
      <Helmet>
        <title>회원가입폼 | 예제 만들기</title>
      </Helmet>
      <ExaTitle text={`프로필을\n입력해주세요`} size="30px" />
      <form onSubmit={handleSubmit(formSubmit)}>
        <motion.ul variants={container} initial="hidden" animate="visible">
          <DFlexFixAuto as="li">
            <InputBox className="box__fixed">
              <ProfilBox>
                <input
                  className="input"
                  {...register("image", {
                    required: "이미지 넣어주세요",
                  })}
                  id="picture"
                  type="file"
                  accept="image/*"
                  hidden
                />
                <label
                  className="img__view"
                  htmlFor="picture"
                  style={{
                    backgroundImage: `url(${
                      localImg.length !== undefined ? localImg : profill
                    })`,
                  }}
                >
                  <span className="img__view-text">파일 추가 +</span>
                </label>
                <ErrorText>{errors.image?.message}</ErrorText>
              </ProfilBox>
            </InputBox>
            <div className="box__auto">
              <InputBox>
                <Label htmlFor="id">아이디</Label>
                <input
                  className="input"
                  {...register("id", {
                    required: "값을 입력해 주세요",
                    minLength: {
                      value: 2,
                      message: "1글자 이상 적어주세요.",
                    },
                    onChange: (e) => {
                      watch("id");
                    },
                  })}
                  type="text"
                  id="id"
                  placeholder="아이를 입력해주세요"
                  autoComplete="username"
                />
                <ErrorText>{errors.id?.message}</ErrorText>
              </InputBox>
              <InputBox>
                <Label htmlFor="id">닉네임</Label>
                <input
                  className="input"
                  {...register("nick", {
                    required: "닉네입을 적어주세요",
                    minLength: {
                      value: 2,
                      message: "1글자 이상 적어주세요.",
                    },
                    validate: (v) => {
                      const aa = errorNick.filter((data) => data.nick === v);
                      return v.includes(aa[0]?.nick)
                        ? `${aa[0]?.nick} 사용 안됩니다.`
                        : true;
                    },
                  })}
                  type="text"
                  id="nick"
                  placeholder="닉네임을 입력해 주세요.(tomato,orange no)"
                  autoComplete="username"
                />
                <ErrorText>{errors.nick?.message}</ErrorText>
              </InputBox>
            </div>
          </DFlexFixAuto>
          <motion.li variants={item}>
            <InputBox>
              <Label htmlFor="pw">비밀번호</Label>
              <PasswordInput>
                <input
                  className="input"
                  {...register("pw", {
                    required: "비밀번호를 적어주세요",
                    minLength: {
                      value: 2,
                      message: "1글자 이상 적어주세요.",
                    },
                  })}
                  type={passWordView ? "password" : "text"}
                  id="pw"
                  placeholder="비밀번호를 입력해주세요."
                  autoComplete="new-password"
                />
                <button type="button" onClick={HandlerPassWord}>
                  {passWordView ? "보기" : "숨기기"}
                </button>
              </PasswordInput>
              <ErrorText>{errors.pw?.message}</ErrorText>
            </InputBox>
          </motion.li>
          <motion.li variants={item}>
            <InputBox>
              <Label htmlFor="pw2">비밀번호 확인</Label>
              <PasswordInput>
                <input
                  className="input"
                  {...register("pw2", {
                    required: "비밀번호를 확인해 주세요.",
                    minLength: {
                      value: 2,
                      message: "1글자 이상 적어주세요.",
                    },
                    onChange: (e) => {
                      const pw = watch("pw");
                      const pw2 = e.target.value;
                      if (pw !== pw2 && pw2.length > pw.length) {
                        setError("pw2", {
                          message: "비밀번호가 다릅니다. 다시 확힌해 주세요",
                        });
                      } else {
                        setError("pw2", {
                          message: "",
                        });
                      }
                    },
                  })}
                  type={passWordView2 ? "password" : "text"}
                  id="pw2"
                  placeholder="비밀번호를 다시 입력해주세요."
                  autoComplete="new-password"
                />
                <button type="button" onClick={HandlerPassWord2}>
                  {passWordView2 ? "보기" : "숨기기"}
                </button>
              </PasswordInput>
              <ErrorText>{errors.pw2?.message}</ErrorText>
            </InputBox>
          </motion.li>
          <motion.li variants={item}>
            <InputBox>
              <Label htmlFor="email">이메일</Label>
              <input
                className="input"
                {...register("email", {
                  required: "email을 작성해 주세요",
                  minLength: {
                    value: 2,
                    message: "1글자 이상 적어주세요.",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@gmail.com$/,
                    message: "gmail를 적어주세요",
                  },
                })}
                type="email"
                id="email"
                placeholder="gmail만 가입 가능합니다."
              />
              <ErrorText>{errors.email?.message}</ErrorText>
            </InputBox>
          </motion.li>
          <motion.li variants={item}>
            <InputBox>
              <Label htmlFor="email" className="input__title">
                수신동의
              </Label>
              <InputChk2>
                <input
                  className="input"
                  {...register("radio", {
                    minLength: {
                      value: 2,
                      message: "1글자 이상 적어주세요.",
                    },
                  })}
                  type="radio"
                  id="rd1"
                  value="yes"
                />
                <Label htmlFor="rd1">동의</Label>
                <input
                  className="input"
                  {...register("radio", {
                    minLength: {
                      value: 2,
                      message: "1글자 이상 적어주세요.",
                    },
                  })}
                  type="radio"
                  id="rd2"
                  value="no"
                />
                <Label htmlFor="rd2">미수신</Label>
              </InputChk2>
            </InputBox>
          </motion.li>
        </motion.ul>
        <BtnNextBox>
          <NextButton text="리셋" disabled={true} onClick={onReset} />
          <NextButton
            text="완료"
            disabled={true}
            onClick={handleSubmit(formSubmit)}
          />
        </BtnNextBox>
      </form>
    </ExaContainer>
  );
}

export default JoinStep2;
