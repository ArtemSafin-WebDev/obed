document.addEventListener("DOMContentLoaded", () => {
  const statsBlocks = Array.from(document.querySelectorAll(".stats__block"));

  Chart.register(ChartDataLabels);
  statsBlocks.forEach((block) => {
    const tabsBtns = Array.from(block.querySelectorAll(".stats__block-btn"));
    const tabs = Array.from(block.querySelectorAll(".stats__block-tabs-item"));

    const setActive = (index) => {
      tabsBtns.forEach((btn) => btn.classList.remove("active"));
      tabs.forEach((tab) => tab.classList.remove("active"));
      tabs[index]?.classList.add("active");
      tabsBtns[index]?.classList.add("active");
    };
    if (tabs.length) {
      setActive(0);
    }

    tabsBtns.forEach((btn, btnIndex) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        setActive(btnIndex);
      });
    });

    tabs.forEach((tab) => {
      const items = Array.from(tab.querySelectorAll(".stats__block-item"));
      const amounts = items.map((item) =>
        Number(item.getAttribute("data-amount"))
      );
      const colors = items.map((item) => item.getAttribute("data-color"));
      const labels = items.map((item) => item.getAttribute("data-label"));
      console.log({
        amounts,
        colors,
        labels,
      });
      const canvas = tab.querySelector("canvas");
      let data = [
        {
          //   data: [50, 55, 60, 33],
          //   labels: ["India", "China", "US", "Canada"],
          //   backgroundColor: ["#F49C9F", "#B8D792", "#D1AAD0", "#FBB18E"],
          data: amounts,
          labels: labels,
          backgroundColor: colors,
          borderColor: "#fff",
        },
      ];

      const options = {
        cutout: "30%",
        tooltips: {
          enabled: false,
        },
        plugins: {
          datalabels: {
            formatter: (value, ctx) => {
              let sum = 0;
              let dataArr = ctx.chart.data.datasets[0].data;
              dataArr.map((data) => {
                sum += data;
              });
              let percentage = ((value * 100) / sum).toFixed(2) + "%";
              return percentage;
            },
            color: "white",
            font: {
              family: "Noto Sans",
              size: "14px",
              weight: "bold",
            },
          },
        },
      };

      const ctx = canvas.getContext("2d");
      const myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          datasets: data,
        },
        options: options,
      });
    });
  });
});
