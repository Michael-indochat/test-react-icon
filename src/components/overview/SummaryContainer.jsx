import Summary from "./Summary";

const SummaryContainer = () => {
  const mockData = [
    {
      id: 1,
      name: "Daily Tax Revenue",
      tax: "Rp",
      count: 0,
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
    <div className="mt-6 grid w-full grid-cols-2 gap-6 lg:mr-6 lg:w-96">
      {mockData.map((field) => (
        <Summary key={field.id} />
      ))}
    </div>
  );
};

export default SummaryContainer;
