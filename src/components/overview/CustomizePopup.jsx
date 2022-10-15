import { IconContext } from "react-icons";
import { MdPlaylistAddCheck } from "react-icons/md";

const CustomizePopup = ({ handleClosePopup }) => {
  const handleSaveChanges = (evt) => {
    evt.preventDefault();

    console.log(evt.target);
  };

  const mock = [
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
    {
      id: 5,
    },
    {
      id: 6,
    },
  ];

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div className="relative my-6 mx-auto w-auto max-w-3xl">
          {/*content*/}
          <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center justify-between rounded-t border-b border-solid border-slate-200 p-5">
              <div className="text-3xl font-semibold">Customize Dashboard</div>
              <div onClick={handleClosePopup} className="hover:cursor-pointer">
                &#10005;
              </div>
            </div>

            {/*body*/}
            <div className="relative flex-auto p-6">
              <div className="flex flex-col">
                <div className="flex">
                  Summary
                  <IconContext.Provider
                    value={{
                      color: "red",
                      size: "2em",
                    }}
                  >
                    <MdPlaylistAddCheck />
                  </IconContext.Provider>
                </div>
                <div>Choose 4 indexes for display. Drag to rearrange.</div>
                <div>
                  <form>
                    {mock.map((data) => (
                      <div key={data.id} className="mb-4 flex items-center">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                        />
                        <label
                          htmlFor="default-checkbox"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          checkbox
                        </label>
                      </div>
                    ))}
                  </form>
                </div>
              </div>
            </div>

            {/*footer*/}
            <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
              <button
                className="background-transparent mr-1 mb-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                type="button"
                onClick={handleClosePopup}
              >
                Cancel
              </button>
              <button
                className="mr-1 mb-1 rounded bg-emerald-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                type="submit"
                onClick={handleSaveChanges}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
};

export default CustomizePopup;
