import { MdOutlineTune } from "react-icons/md";

const CustomizeBtn = ({ handleShowPopup }) => {
  return (
    <button
      onClick={handleShowPopup}
      className="font-sourceSans inline-flex items-center rounded border-2 border-[#8b959b] px-3 py-2 text-base text-[#5c6c7a]"
      type="button"
    >
      <MdOutlineTune size={14} />
      <span className="pl-1">Customize</span>
    </button>
  );
};

export default CustomizeBtn;
