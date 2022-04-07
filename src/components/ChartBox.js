import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Chart } from '../API/Urls';
import { Coin } from '../contextApi/ContextCryto';
import './css/chartbox.css';
import Loading from './loader.svg';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2'
import { TimeFrames } from '../API/Timeframes';
import Button from './Button';
import { CompareArrows } from '@material-ui/icons';
ChartJS.register(...registerables);



const ChartBox = ({ ids ,image}) => {


  const [pastdata, setPastdata] = useState([]);
  const [dayCount, setDayCount] = useState(1);
  const [loader, setLoader] = useState(false);
  const { currency } = useContext(Coin);



  const fetchData = async () => {



    setLoader(true);
    const { data } = await axios.get(Chart(ids, dayCount, currency));
    setPastdata(data.prices);

    console.log(data);



    setLoader(false);
  }


  useEffect(() => {

    fetchData();
    // console.log(ids);

  }, [dayCount, currency])


  return (
    <div className='container'>
      {
        (loader && pastdata.length <= 0) ? (
          <div className='loader'>
            <img src={Loading} alt="Loading.." />
          </div>
        ) : (

          <>

            <div className='button_box'>
              {TimeFrames.map((day) => (
                <Button
                  key={day.value}
                  onClick={() => {
                    setDayCount(day.value);
                    // setflag(false);
                  }}
                  selected={day.value === dayCount}
                >
                  {day.label}
                </Button>
              ))}
            </div>


            <Line
              className="chart_sheet"
              data={{
                labels: pastdata.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return dayCount === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: pastdata.map((coin) => coin[1]),
                    label: `Price ( Past ${dayCount} Days ) in ${currency}`,
                    borderColor: "black",
                    backgroundColor: "black"
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1.5,

                  },
                },
              }}
            />

            <div className='converter_box'>
              <div className='c1'>
                  <span>{ids.toUpperCase()}</span>
                  <span><img src={image} alt={ids}  className='image'/></span>
              </div>
              <div className='compare_icon'>
                <CompareArrows></CompareArrows>
              </div>
              <div className='c2'>
                  {currency.toUpperCase()}
              </div>
            </div>

          </>

        )
      }
    </div>
  )
}

export default ChartBox