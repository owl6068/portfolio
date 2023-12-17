import { useOutletContext } from "react-router-dom";
import ApexChart from "react-apexcharts";
import { IChart } from "../../interface/coin";

function CoinChart() {
  const { chart } = useOutletContext<IChart>();
  return (
    <div id="chart">
      <ApexChart
        type="candlestick"
        series={[
          {
            data: chart?.map((price) => ({
              x: price[4],
              y: [price[1], price[2], price[3], price[4]],
            })),
          },
        ]}
        options={{
          theme: {
            mode: "light",
          },
          chart: {
            height: 500,
            width: "100%",
            toolbar: {
              tools: {},
            },
            background: "#eee",
          },
          title: {
            text: "코인차트",
            align: "left",
          },
          grid: {
            show: false,
          },

          xaxis: {
            labels: {
              show: true,
              datetimeFormatter: {
                month: "mmm 'yy",
              },
              style: {
                fontSize: "12px",
              },
            },
            type: "datetime",
            categories: chart?.map((date) => date[0]),
          },
          yaxis: {
            show: true,
            labels: {
              style: {
                fontSize: "12px",
              },
            },
          },
          tooltip: {
            y: {
              formatter: (v) => `$ ${v.toFixed(2)}`,
            },
            enabled: true,
          },
        }}
      />
    </div>
  );
}
export default CoinChart;
