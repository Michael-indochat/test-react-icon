import RankTable from "./RankTable";

const RankContainer = () => {
  return (
    <div className="rounded-lg border">
      <div className="font-sourceSans py-3 px-4 text-xl font-extrabold text-black">
        Top Five Merchants of the Month
      </div>
      <div className="px-4 pb-3">
        <RankTable />
      </div>
    </div>
  );
};

export default RankContainer;
