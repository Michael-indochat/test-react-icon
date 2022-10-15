//react-icons
import { IconContext } from "react-icons";
import { MdStorefront } from "react-icons/md";

const RankTable = () => {
  //mock-data-head
  const mockData = [
    {
      id: 0,
    },
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];

  return (
    <div className="overflow-auto">
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="font-sourceSans px-4 py-4 text-left text-sm font-semibold text-[#096bef]">
              #
            </th>
            <th className="font-sourceSans px-4 py-4 text-left text-sm font-semibold text-[#096bef]">
              Merchant & District
            </th>
            <th className="font-sourceSans px-4 py-4 text-right text-sm font-semibold text-[#096bef]">
              Total Receipts
            </th>
            <th className="font-sourceSans px-4 py-4 text-right text-sm font-semibold text-[#096bef]">
              Total Transactions(Rp)
            </th>
            <th className="font-sourceSans px-4 py-4 text-right text-sm font-semibold text-[#096bef]">
              Tax Revenue(Rp)
            </th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((data) => (
            <tr key={data.id} className="hover:bg-[#f9fafb]">
              <td className="whitespace-nowrap px-4 py-4">
                <div className="font-sourceSans flex items-center">
                  1.
                  <div className="ml-5">
                    <IconContext.Provider
                      value={{
                        color: "#ffb200",
                        size: "1.2em",
                      }}
                    >
                      <MdStorefront />
                    </IconContext.Provider>
                  </div>
                </div>
              </td>
              <td className="flex flex-col whitespace-nowrap px-4 py-4">
                <p className="font-sourceSans text-base font-semibold">
                  Beijing
                </p>
                <p className="text-[@44474a] mt-1 text-sm">Tanah Abang</p>
              </td>
              <td className="font-sourceSans whitespace-nowrap px-4 py-4 text-right text-base">
                <p>12</p>
                <p>
                  (<span className="text-[#22c25a]">12</span>/0)
                </p>
              </td>
              <td className="font-sourceSans whitespace-nowrap px-4 py-4 text-right">
                125.580,000
              </td>
              <td className="font-sourceSans whitespace-nowrap px-4 py-4 text-right text-[#22c25a]">
                0
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RankTable;
