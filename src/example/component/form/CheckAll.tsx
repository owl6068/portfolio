import { useFormContext } from "react-hook-form";
import { CheckAllBox } from "../../css/joinStyle";

interface ICheckAll {
  label: string;
  items: Array<{
    id: string;
  }>;
}

function CheckAllCheckBox({ label, items }: ICheckAll) {
  const { setValue, watch } = useFormContext();
  const watchValue = watch("chk");

  const handleAllChk = (checked: boolean) => {
    if (checked) {
      setValue(
        "chk",
        items.map((data) => data.id)
      );
    } else {
      setValue("chk", []);
    }
  };

  return (
    <CheckAllBox>
      <input
        type="checkbox"
        id="allChk"
        checked={watchValue ? watchValue.length === items.length : false}
        onChange={(e) => handleAllChk(e.target.checked)}
      />
      <label htmlFor="allChk">{label}</label>
    </CheckAllBox>
  );
}

export default CheckAllCheckBox;
