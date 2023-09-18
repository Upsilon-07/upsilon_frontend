
import { Doughnut } from 'react-chartjs-2';
import PropTypes from "prop-types";
import { useRef, useEffect, useState } from 'react';

const DoughnutChart = ({ data }) => {
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState(null);
  
    useEffect(() => {
      if (chartRef.current && data.length > 0) {
        const proteinValue = data.find(item => item.nutrient_name === 'Protein')?.nutrient_value || 0;
        const carbohydratesValue = data.find(item => item.nutrient_name === 'Carbohydrates')?.nutrient_value || 0;
        const fatValue = data.find(item => item.nutrient_name === 'Fat')?.nutrient_value || 0;


        const newChartData = {
          labels: ['Protein', 'Carbohydrates', 'Fat'],
          datasets: [
            {
              data: [proteinValue, carbohydratesValue, fatValue],
              backgroundColor: ['#EB784E', '#C5C884', '#171717'],
            },
          ],
        };
  
        setChartData(newChartData);
      }
    }, [data]);
  
    return (
      <div>
        {chartData && (
          <Doughnut data={chartData} options={{ responsive: true, maintainAspectRatio: false }} ref={chartRef} />
        )}
      </div>
    );
  };
  
  DoughnutChart.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        nutrient_name: PropTypes.string,
        nutrient_value: PropTypes.number,
      })
    ),
  };

export default DoughnutChart
