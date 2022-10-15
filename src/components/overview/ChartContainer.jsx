import Chart from "./Chart";

const ChartContainer = () => {
  const mockData = [
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
    <div className="mb-6 grid gap-6 lg:grid-cols-2">
      {mockData.map((chart) => (
        <Chart key={chart.id} />
      ))}
    </div>
  );
};

export default ChartContainer;
