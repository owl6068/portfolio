import React from "react";
import { useFormContext } from "react-hook-form";
import { CheckChkLi } from "../../css/joinStyle";

interface ICheckBox {
  items: Array<{
    id: string;
    name: string;
    require: boolean;
  }>;
}

function CheckBox({ items }: ICheckBox) {
  const { register, watch } = useFormContext();
  const isValidChk = watch("chk");

  return (
    <>
      {items.map((data, i) => (
        <CheckChkLi key={"chk" + i}>
          <input
            type="checkbox"
            value={data.id}
            id={data.id}
            checked={isValidChk ? isValidChk.includes(data?.id) : false}
            {...register(`chk`)}
          />
          <label htmlFor={data.id}>
            {data.name}
            {data.require ? "(필수)" : "(선택)"}
          </label>
        </CheckChkLi>
      ))}
    </>
  );
}

export default CheckBox;
