const Summary = () => {
  return (
    <div
      className="
    col-span-2 rounded-lg border
    py-6 px-5 drop-shadow-[2px_3px_15px_rgba(135,135,135,0.2)] 
    md:col-span-1
    lg:col-span-2
    "
    >
      {/* 客製化drop-shadow無法顯示 */}
      <div
        className="
      font-sourceSans mb-1.5 text-sm font-semibold text-[#5c6c7a]
      "
      >
        Daily Tax Revenue
      </div>
      <div className="font-bold text-black">
        Rp
        <span className="text-2xl">0</span>
      </div>
    </div>
  );
};

export default Summary;
