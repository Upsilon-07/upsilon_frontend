
import {Doughnut} from 'react-chartjs-2';
import PropTypes from "prop-types";

const DoughnutChart = () => {
// Calculate the value left of 100% - nutrient_value
const valueLeft = 100 - data.nutrient_value;

// Create the data array in the desired format
const chartData = [data.nutrient_value, valueLeft];

    const chartValue = {
        
        // (nutrient_name, nutrient_type, nutrient_value, meal_id)
        datasets: [
            {
                label: 'Nutrition',
                data: [chartData],
                borderColor: ['#FFF'],
                backgroundColor: ['#EB784E',
                '#EAF2F2'],
                pointBackgroundColor: '#FFF',
            }
            
        ]
    }

    const options = {
        plugins: {
            title: {
                display: true,
                font: {
                    size:34
                },
                padding:{
                    top:30,
                    bottom:30
                },
                responsive:true,
                animation:{
                    animateScale: true,
                               }
            }
        }
        
    }

  return (
    <div>
      <Doughnut data={chartValue} options={options} />
    </div>
  )
}

DoughnutChart.propTypes = {
    data: PropTypes.shape({
        nutrient_name: PropTypes.string,
        nutrient_type: PropTypes.string,
        nutrient_value: PropTypes.number,
        meal_id: PropTypes.number,
    }),
  };

export default DoughnutChart
