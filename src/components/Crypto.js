import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Coin } from '../contextApi/ContextCryto';
import { SingleCoin } from '../API/Urls';
import ChartBox from './ChartBox';
import './css/crypto.css';
import Loading from './loader.svg';
import parse from 'html-react-parser';
import { numberWithCommas } from "./CoverPage/Carousel";

const Crypto = () => {

  const { id } = useParams();
  const { symbol, currency } = useContext(Coin);
  const [crypto, setCrypto] = useState({});
  const [loader, setLoader] = useState(false);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [marketcap, setMarketcap] = useState(0);
  const [ids, setIds] = useState('');
 

  const fetchdata = async()=>{

    setLoader(true);
    const { data } = await axios.get(SingleCoin(id));

    setCrypto(data);
    setImage(data.image.large);
    setDescription(data.description.en.split(". ")[0]);
    setPrice(data.market_data.current_price[currency.toLowerCase()]);
    setMarketcap(data?.market_data.market_cap[currency.toLowerCase()]
    .toString()
    .slice(0, -6))
    setIds(data.id);
    
    setLoader(false);
    

  }
  
 
  useEffect(() => {
    
    fetchdata();
    
    //console.log(crypto);

  }, [currency,id])
  


  return (

    (loader && ids.length === 0 )? (
       <div className='loader'>
         <img src={Loading} alt="Loading.." />
       </div>
    ):(

      <div className='chart_container'>
      <div className='left_section'>
          <img
            src={image}
            alt={crypto.name}
            className="crypto_img"
          />
          <h3 className='cypto_name'>{crypto.name}</h3>
          <div className='__description'>
          
           {parse(description)}
      
          </div>

          <div className='market_data'>
            <span className='data'>
              <h5>Rank :</h5> &nbsp;&nbsp;
              <h5>{crypto?.market_cap_rank}</h5>
            </span>
            
            <span className='data'>
              <h5>Price :</h5> &nbsp;&nbsp;
              <h5>{symbol}{" "}
              {numberWithCommas(price)}</h5>
            </span>

            <span className='data'>
              <h5>Market Cap :</h5> &nbsp;&nbsp;
              <h5>
              {numberWithCommas(marketcap)} M
              </h5>
            </span>
           
          </div>
          

      </div>
      
      <ChartBox ids={ids} name={crypto.name} image={image}/>
      
    </div>

    )
    
  )
}

export default Crypto