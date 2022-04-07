import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';
import { TrendingCoins } from '../../API/Urls';
import { Coin } from '../../contextApi/ContextCryto';
import '../css/carousal.css';

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

const Carousel = () => {

    
      
    const [trending, setTrending] = useState([]);
    const { currency, symbol} = useContext(Coin);

    const fetchtrendingcrypto = async (currency) => {
        const { data } = await axios.get(TrendingCoins(currency));
        //  console.log(data);
        setTrending(data);
       
    };
   

    useEffect(() => {
        fetchtrendingcrypto(currency);
    }, [currency])

    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 4,
        },
    };

    const items = trending.map((coin) => {

        let profit = coin?.price_change_percentage_24h >= 0;

        return (
            <Link className="carouselItem" to={`/crypto/${coin.id}`}>
                <img src={coin?.image} alt={coin.name} className="carou_img" />
                <span>
                    {coin?.symbol}
                    &nbsp;
                    <span
                        style={{
                            color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                            fontWeight: 500,
                        }}
                    >
                        {profit && "+"}
                        {coin?.price_change_percentage_24h?.toFixed(2)}%
                    </span>
                </span>
                <span style={{ fontSize: 22, fontWeight: 500 }}>
                    {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
                </span>
            </Link>
        )
    })

    return (
        <div className='carousal'>
            <h2 className='trending'>🔥 Trending 🔥</h2>
            <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={2000}
                animationDuration={1500}
                disableDotsControls
                disableButtonsControls
                responsive={responsive}
                items={items}
                autoPlay
                />
        </div>
    )
}

export default Carousel