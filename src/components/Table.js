import { makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CryptoList } from '../API/Urls';
import { Coin } from '../contextApi/ContextCryto';
import './css/table.css';
import loader from './loader.svg';



function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



const Table = () => {

    const [crypto, setCrypto] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const { currency } = useContext(Coin);
    const history = useNavigate();
    const { symbol } = useContext(Coin);

    const useStyles = makeStyles({
        pagination: {
          "& .MuiPaginationItem-root": {
            color: "white",
          },
        },
      });

    const fetchCrypto = async (currency) => {

        setLoading(true);
        const { data } = await axios.get(CryptoList(currency));
        // console.log(data);
        setCrypto(data);
        setLoading(false);

    }

    useEffect(() => {

        fetchCrypto(currency);

    }, [currency])

    const handleSearch = () => {
        return crypto.filter(
            (coin) =>
                coin.name.toLowerCase().includes(search) ||
                coin.symbol.toLowerCase().includes(search)
        );
    };
    const classes = useStyles();



    return (
        <>
            <div className='table_container'>
                <h2 className='heading'>
                    Today's Cryptocurrency Prices by Market Cap
                </h2>
                <div>
                    <form className="d-flex" id="search_box">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                            onChange={(e) => { setSearch(e.target.value) }}
                        />
                        <button className="btn btn-outline-dark bg-light text-dark" type="submit">Search</button>
                    </form>
                </div>

                {
                    loading ? (
                        <img src={loader} alt="Loading.." />
                    ) : (

                        <table className="table table-dark table-striped" id="table">
                            <thead>
                                <tr>
                                    <th scope="col">Coin</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">24h Change</th>
                                    <th scope="col">24h High</th>
                                    <th scope="col">24h Low</th>
                                    <th scope="col">Market Cap</th>
                                </tr>
                            </thead>


                            <tbody>

                                {
                                    handleSearch().slice((page - 1) * 10, (page - 1) * 10 + 10)
                                        .map((coin) => {

                                            const profit = coin.price_change_percentage_24h > 0;


                                            return (


                                                <tr key={coin.id} id="row" onClick={() => history(`/crypto/${coin.id}`)}>
                                                    <th scope="row" id='row_head'>
                                                        <div  ><img src={coin?.image} alt="" id='row_img' /></div>
                                                    </th>
                                                    <th>
                                                        <div id='crypto_symbol'>{coin.symbol}</div>
                                                        <div>{coin.name}</div>
                                                    </th>
                                                    <td className='center'>{symbol}{" "}{numberWithCommas(coin.current_price.toFixed(2))}</td>
                                                    
                                                    
                                                    <td className='center'
                                                        style={{
                                                            color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                                                            fontWeight: 500,
                                                        }}
                                                    >
                                                        {profit && "+"}
                                                        {coin.price_change_percentage_24h.toFixed(2)}%
                                                    </td>
                                                    
                                                    
                                                    <td className='center'
                                                        style={{
                                                            color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                                                            fontWeight: 500,
                                                        }}
                                                    >
                                                        {coin.high_24h.toFixed(2)}
                                                    </td>

                                                    <td className='center'
                                                        style={{
                                                            color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                                                            fontWeight: 500,
                                                        }}
                                                    >
                                                        {coin.low_24h.toFixed(2)}
                                                    </td>
                                                    
                                                    
                                                    
                                                    <td className='center'>
                                                        {symbol}{" "}
                                                        {numberWithCommas(
                                                            coin.market_cap.toString().slice(0, -6)
                                                        )}
                                                        M
                                                    </td>
                                                </tr>

                                            )


                                        })
                                }

                            </tbody>
                        </table>

                    )
                }



            </div>


            <Pagination
                count={parseInt((handleSearch()?.length / 10).toFixed(0))}
                style={{
                    padding: 20,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
                classes={{ ul: classes.pagination }}
                onChange={(_, value) => {
                    setPage(value);
                    window.scroll(0, 450);
                }}
            />



        </>
    )
}

export default Table