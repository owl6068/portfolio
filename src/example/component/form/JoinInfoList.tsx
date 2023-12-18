import { FormListLi, Label, item } from "../../css/joinStyle";
import { IChkInfo } from "../../interface/join";
interface IJoinInfoList {
  text: string;
  data?: string;
  list?: IChkInfo[] | undefined;
}

function JoinInfoList({ text, data, list }: IJoinInfoList) {
  return (
    <FormListLi variants={item} className={list && "w100"}>
      <Label as="span">{text}</Label>
      {list ? (
        list?.map((data, i) => (
          <span key={"ss" + i}>
            {i + 1}.{data.name}
          </span>
        ))
      ) : (
        <span>{data}</span>
      )}
      {/* <span>{data}</span> */}
    </FormListLi>
  );
}
export default JoinInfoList;
